import clientModel from "../models/Cliente.js";
import mongoose from "mongoose"

const clientController = {};

//SELECT
clientController.getCliente = async (req, res) => {
   const client = await clientModel.find()
   res.json(client)
}

//INSERT
clientController.insertCliente = async (req, res) => {
    const { name, email, password, telephone, age } = req.body;
    const newClient = new clientModel({ name, email, password, telephone, age })
    await newClient.save()
    res.json({message: "Client saved"})
}

//DELETE
clientController.deleteCliente = async (req, res) => {
    await clientModel.findByIdAndDelete(req.params.id)
    res.json({message: "Deleted successfully"})
}

//UPDATE
clientController.updateCliente = async (req, res) => {
    const { name, email, password, telephone, age } = req.body;
    const updateClient = await clientModel.findByIdAndUpdate(req.params.id,
        {name, email, password, telephone, age}, {new: true}
    )
    res.json({message: "Client updated successfully"})
}

//Select by ID
clientController.getUserById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const user = await clientModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error); // <-- Esto te mostrará el error real en consola
        res.status(500).json({ message: "Error fetching user" });
    }
}


export default clientController;