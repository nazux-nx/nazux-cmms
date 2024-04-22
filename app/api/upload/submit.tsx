import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data = req.body;
  // const id = await createItem(data)
  res.status(200).json("form data succecssfully submited");
  console.log(data);
}
