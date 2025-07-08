import { Schema, model } from "mongoose";

const clienteSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true, // Ensure email is unique
      match: [/\S+@\S+\.\S+/, "Invalid email format"], // Regex for email validation
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters long"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      match: [/^\d{10}$/, "Phone number must be 10 digits"], // Regex for phone validation
    },
    age: {
      type: Number,
      required: [true, "Age is required"],
      min: [18, "Age must be at least 18"], // Minimum age validation
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("cliente", clienteSchema);