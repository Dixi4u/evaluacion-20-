import express from 'express'
import clientControllers from '../controllers/clienteController.js'
import multer from 'multer'

const upload = multer({ dest: 'public/' })
const router = express.Router()

router.route("/")
.get(clientControllers.getCliente)
.post(clientControllers.insertCliente)

router.route("/:id")
.put(clientControllers.updateCliente)
.delete(clientControllers.deleteCliente)
.get(clientControllers.getUserById)

export default router