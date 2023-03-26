import { config } from "@/config";
import Mongo from "@/shared/utils/db";
import { ApplicationError } from "@/shared/utils/error";
import { NextApiRequest, NextApiResponse } from "next";
import { UserService } from "../../../../services/user";

const db = new Mongo(config.DB_URL);
const service = new UserService(db);
const isAppError = (err: unknown | ApplicationError): err is ApplicationError => err instanceof ApplicationError;

export async function GET(request: Request) {
  return new Response('Hey!')
}

export async function POST(request: Request) {
  const user = await request.json()
  const res = await service.createUser(user)
  let response
  console.log(res)
  if (res) { response = JSON.stringify({body: res.toString(), status: 200}) } 
  return new Response(response)
}

// export default async function POST(req: NextApiRequest, res: NextApiResponse) {
//     console.log('REQUEST', req)
//     res.send('hey')
//     // switch (req.method) {
//     //   case "POST":
//     //     try {
//     //       res.send(await service.createUser(req.body))
//     //     } catch (err: unknown | ApplicationError) {
//     //       if (isAppError(err)) {
//     //         return res.status(err.status).send(err.errorData);
//     //       }
//     //       console.log(err);
//     //       res.status(500).end();
//     //     }
//     //     break;
  
//     //   default:
//     //     return res.status(501).end();
//     // }
// }