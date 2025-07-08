const reservaController = {};
import reservaModel from "../models/Reserva.js"

//SELECT
reservaController.getReserva = async (req, res) => {
   try {
       const evaluation = await reservaModel.find().populate('clientId', 'name')
       res.json(evaluation)
   } catch (error) {
       res.status(500).json({ message: error.message })
   }
}

//INSERT
reservaController.insertReserva = async (req, res) => {
    try {
        // Cambiar idBranch por idBrand para coincidir con el frontend
        const { clientId, vehicle, service, status } = req.body;
        
        console.log("Datos recibidos:", { clientId, vehicle, service, status });
        
        const newReserva = new reservaModel({ clientId, vehicle, service, status })
        const savedReserva = await newReserva.save()
        
        // Populate el modelo recién creado antes de responder
        const populatedModel = await reservaModel.findById(savedReserva._id).populate('clientId', 'name')
        
        res.status(201).json({
            message: "Model saved",
            model: populatedModel
        })
    } catch (error) {
        console.error("Error saving model:", error);
        res.status(500).json({ message: error.message })
    }
}

//DELETE
reservaController.deleteReserva = async (req, res) => {
    try {
        await reservaModel.findByIdAndDelete(req.params.id)
        res.json({message: "Deleted successfully"})
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//UPDATE
reservaController.updateReserva = async (req, res) => {
    try {
        // Cambiar idBranch por idBrand para coincidir con el frontend
        const { clientId, vehicle, service, status } = req.body;
        
        const updateReserva = await reservaModel.findByIdAndUpdate(
            req.params.id,
            { clientId, vehicle, service, status }, 
            { new: true }   
        ).populate('clientId', 'name')
        
        res.json({
            message: "Model updated successfully",
            model: updateReserva
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

//Select by ID
reservaController.getReservaById = async (req, res) => {
    try {
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ message: "Invalid user ID" });
        }
        const user = await clientModel.findById(req.params.id).populate('clientId', 'name');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.json(user);
    } catch (error) {
        console.error(error); // <-- Esto te mostrará el error real en consola
        res.status(500).json({ message: "Error fetching user" });
    }
}
export default reservaController;