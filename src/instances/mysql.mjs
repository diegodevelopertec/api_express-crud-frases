import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

export const mysql=new Sequelize(
    process.env.MY_BD,
    process.env.MY_USER,
    process.env.MY_PASS,


    {
        dialect:'mysql',
        port:parseInt(process.env.MY_PORT)
    }
)