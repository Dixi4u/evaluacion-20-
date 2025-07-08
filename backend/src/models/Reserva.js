import {Schema, model} from "mongoose";

const reservaSchema = new Schema({
    clientId: {
        type: Schema.Types.ObjectId,
        ref: "cliente", 
        required: true 
    },
    vehicle: {
        type: String,
        required: true 
    },
    service: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    strict: false
})

export default model("reserva", reservaSchema)