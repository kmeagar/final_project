import mongoose from "mongoose";

// Define TypeScript type
export interface LocationType {
  _id: string;
  name: string;
  address: string;
  zipcode: string;
  borough: string;
  cuisine: string;
  grade: string;
  on_wishlist?: string[]; // Optional array of user IDs
}

// Define Mongoose schema
const locationSchema = new mongoose.Schema<LocationType>({
  name: String,
  address: String,
  zipcode: String,
  borough: String,
  cuisine: String,
  grade: String,
  on_wishlist: [String], // Mongoose field for array of user IDs
});

// Export the model
export default mongoose.models.Location ||
  mongoose.model("Location", locationSchema);
