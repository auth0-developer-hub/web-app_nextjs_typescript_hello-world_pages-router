import { withApiAuthRequired } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../../models/message";

const getProtectedMessage = async (
  req: NextApiRequest,
  res: NextApiResponse<Message>
) => {
  const message: Message = {
    text: "This is a protected message.",
  };

  res.status(200).json(message);
};

export default withApiAuthRequired(getProtectedMessage);
