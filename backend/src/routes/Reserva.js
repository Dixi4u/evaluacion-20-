import express from 'express'
import reservaControllers from '../controllers/reservaController.js'
import multer from 'multer'

const upload = multer({ dest: 'public/' })
const router = express.Router()

router.route("/")
.get(reservaControllers.getReserva)
.post(reservaControllers.insertReserva)

router.route("/:id")
.put(reservaControllers.updateReserva)
.delete(reservaControllers.deleteReserva)
.get(reservaControllers.getReserva)

export default router