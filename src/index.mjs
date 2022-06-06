import express from 'express'
import dotenv from 'dotenv'
import apiRotas from './apiRoutes.mjs'
import cors from 'cors'

dotenv.config()

const api=express()
api.use(cors({
    origin:'*',
}))
api.use(apiRotas)

api.listen(process.env.PORT)