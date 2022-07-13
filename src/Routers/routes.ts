import { Router } from "express";
import * as apiController from '../Controllers/apiController'


const rotas=Router()


rotas.post('/list',apiController.add)
rotas.get('/list',apiController.all)
rotas.put('/list:id',apiController.update)
rotas.delete('/list/:id',apiController.remove)

export default rotas