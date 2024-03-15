import mongoose from "mongoose";
import User from "../models/User.js";

const connectDB = (async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
  } catch (error) {
    console.log(" error in connection");
    process.exit(1);
  }
})();

export async function POST(req) {
  const body = await req.json();
  const createdUser = await User.create(body);
  return Response.json(createdUser);
}
