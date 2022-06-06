
import { DataTypes } from "sequelize";
import { mysql } from "../instances/mysql.mjs";



export const mysqlModel=mysql.define("mysqlModel",
    {
        id:{
            primaryKey:true,
            type:DataTypes.INTEGER
        },
        autor:{
            type:DataTypes.STRING
        },
        frase:{
            type:DataTypes.TEXT
        }

    },{
        tableName:'frases',
        timestamps:false
    }
)