import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";
import type { NextApiRequest, NextApiResponse } from "next";

export default handleAuth({
  // handleAuth types each handler as a Pages-Router/App-Router union, so the
  // parameters need explicit Pages Router types to avoid implicit `any`.
  async login(req: NextApiRequest, res: NextApiResponse) {
    await handleLogin(req, res, {
      authorizationParams: {
        prompt: "login",
      },
      returnTo: "/profile"
    });
  },
});
