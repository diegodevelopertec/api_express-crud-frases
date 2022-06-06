
import { mysqlModel } from "../models/mysql.model.mjs"





export const pingPong=(req,res)=>{
    res.status(200)
    res.json({pong:true})
}

export const random=(req,res)=>{

    let num=Math.floor(Math.random() * 50)
    res.status(200)
    res.json({num:num})
}