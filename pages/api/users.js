// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { userdata } from "../../data/user"
export default function handler(req, res) {
  res.status(200).json(userdata)
}
