import { Schema, model } from "mongoose";

const reservaSchema = new Schema(
  {
    clientId: {
      type: Schema.Types.ObjectId,
      ref: "cliente",
      required: [true, "Client ID is required"],
    },
    vehicle: {
      type: String,
      required: [true, "Vehicle is required"],
      trim: true,
    },
    service: {
      type: String,
      required: [true, "Service is required"],
      trim: true,
    },
    status: {
      type: String,
      required: [true, "Status is required"]
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("reserva", reservaSchema);