import type { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../auth/[...nextauth]";

export async function handler(
    req: NextApiRequest,
    res: NextApiResponse
    ) {
        console.log(req.method)
  if (req.method === "POST") {
      // const session = await getServerSession(req, res, authOptions);
      // console.log(session)
      // if (!session) {
          //     return res
          //       .status(401)
          //       .json({ message: "Please signin to create a post." })
          //   }
          
          console.log(req.body);
          res.send({message:req.body})
  }
}
