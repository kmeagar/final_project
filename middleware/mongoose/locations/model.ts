import mongoose, { Schema } from "mongoose";
import { LocationType } from "./schema";

const locationSchema = new Schema<LocationType>({
  name: String,
  address: String,
  zipcode: String,
  on_wishlist: [String], // user IDs who have it on wishlist
});

// Avoid model overwrite error in dev
export default mongoose.models.Locations || mongoose.model("Locations", locationSchema);
