import { getAccessToken, withApiAuthRequired } from "@auth0/nextjs-auth0";
import { AxiosRequestConfig } from "axios";
import { NextApiRequest, NextApiResponse } from "next";
import { AppError } from "../../../models/app-error";
import { Message } from "../../../models/message";
import { callExternalApi } from "../../../services/external-api.service";

const apiServerUrl = process.env.API_SERVER_URL;

const getAdminMessage = async (
  req: NextApiRequest,
  res: NextApiResponse<Message | AppError>
) => {
  try {
    const { accessToken } = await getAccessToken(req, res);

    const config: AxiosRequestConfig = {
      url: `${apiServerUrl}/api/messages/admin`,
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    };

    const { data, error, status } = await callExternalApi<Message>({
      config,
    });

    if (data) {
      res.status(status).json(data);
      return;
    }

    res
      .status(status || 500)
      .json(error || { message: "Unable to retrieve message" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export default withApiAuthRequired(getAdminMessage);
