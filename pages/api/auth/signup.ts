import { handleLogin } from "@auth0/nextjs-auth0";
import { NextApiRequest, NextApiResponse } from "next";

export default async function signup(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await handleLogin(req, res, {
    authorizationParams: {
      prompt: "login",
      screen_hint: "signup",
    },
    returnTo: "/profile",
  });
}
