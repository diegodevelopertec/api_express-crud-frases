import e, {Request,Response} from 'express'
import {list}  from '../Models/list'


export const add = async(req:Request,res:Response)=>{

    if(req.body.title){


                let newItem=await list.create({
                    title:req.body.title,
                    done:req.body.done ? true:false
                })

                res.status(201).json({item : newItem})
        }else{
            res.status(400).json({erro:'Dados não enviados'})
    }

}


export const all= async(req:Request,res:Response)=>{
  

    const lista=await list.findAll()
    res.status(201).json({lista})


    
}



export const update= async(req:Request,res:Response)=>{
    let id = req.params.id


    let item=await list.findByPk(id)
        if(item){
              if(req.body.title){
                item.title=req.body.title
              }
              if(req.body.done){
                switch(req.body.done.toLowercase()){
                        case 'true':
                            case '1':
                                item.done=true;
                                break;

                        case 'false':
                            case '0':
                                item.done=false;
                                break;

                }
              }

              await item.save()
              res.status(200).json(
                {ok:item}
              )


        }else{
                res.status(400).json({erro:'Item não encontrado'})





        }



    
}


export const remove= async (req:Request,res:Response)=>{

    let id=req.params.id 
    let item=await list.findByPk(id)
        if(id){
           await item?.destroy()
        }


    
}