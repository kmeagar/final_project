import type { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../middleware/db-connect";
import { findAllLocations } from "../../middleware/mongoose/locations/services";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  await dbConnect();

  const locations = await findAllLocations({}); // ✅ Pass empty filter object
  res.status(200).json(locations);
}
