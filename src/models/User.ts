import mongoose, { Document, Schema, Model, Types } from "mongoose";
import bcrypt from "bcrypt";

interface IUser extends Document {
  company: string;
  email: string;
  password: string;
  plan: string;
  billing: {
    company: string;
    orgNumber: string;
    adress: string;
    email: string;
    phone: number;
  };
  departments: {
    department: string;
    manager: string;
  }[];
}

const UserSchema = new Schema<IUser>({
  company: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    required: true,
    /* validate: {
      validator: function (value: String) {
        // Define your password validation criteria here
        return value.length >= 8 && value.length <= 15; // Example: Password should be between 8 and 15 characters
      },
      message: (props) => "Password must be between 8 and 15 characters!",
    }, */
  },
  plan: { type: String, required: true },
  billing: {
    company: { type: String, required: true },
    orgNumber: { type: String, required: true, unique: true },
    adress: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
  },
  departments: [
    {
      department: { type: String },
      manager: { type: String },
    },
  ],
});

// Hash the password before saving
UserSchema.pre("save", async function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  try {
    const hashedPassword = await bcrypt.hash(user.password, 10);
    user.password = hashedPassword;
    next();
  } catch (error) {
    return next(error as Error);
  }
});

const UserModel: Model<IUser> = mongoose.model<IUser>("User", UserSchema);

export default UserModel;
