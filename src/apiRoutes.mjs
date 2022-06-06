import { Router } from "express";
import * as apiControler from './controllers/apiController.mjs'

const apiRotas=Router()


apiRotas.get('/ping',apiControler.pingPong)
apiRotas.get('/random',apiControler.random)

export default apiRotas