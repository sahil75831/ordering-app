import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema(
  {
    email: { type: String, require: true, unique: true },
    password: { type: String, required: true },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  try {
    console.log("first");
    if (this.isModified("password") || this.new) {
      const salt = await bcrypt.genSalt(10);
      console.log("salt : ", salt);
      this.password = await bcrypt.hash(this.password, salt);
    }
  } catch (error) {
    next(error);
  }
  next();
});
const User = mongoose.models?.User || mongoose.model("User", UserSchema);

export default User;
