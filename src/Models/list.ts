import { pgInstance } from "../Instances/pgInstance";
import {DataTypes,Model } from "sequelize";

export interface pgInterface extends Model{


    id:number,
    title:string,
   done:boolean


}



export const list=pgInstance.define<pgInterface>('list',
    
    {
            id:{
                type:DataTypes.INTEGER,
                primaryKey:true,
                autoIncrement:true
            },
            title:{
                type:DataTypes.STRING
            },
           done:{
                type:DataTypes.BOOLEAN
            }
    },
    {
        timestamps:false,
        tableName:'lista-de-tarefas'
    }
    
  


)