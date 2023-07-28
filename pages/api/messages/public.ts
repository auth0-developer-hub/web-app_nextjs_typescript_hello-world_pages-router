import { NextApiRequest, NextApiResponse } from "next";
import { Message } from "../../../models/message";

const getPublicMessage = async (
  req: NextApiRequest,
  res: NextApiResponse<Message>
) => {
  const message: Message = {
    text: "This is a public message.",
  };

  res.status(200).json(message);
};

export default getPublicMessage;
