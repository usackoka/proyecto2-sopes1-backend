import redis from "redis";
import models from "../models"

export default {
    list: async (req,res,next) =>{
        res.status(200).send(await models.Caso.find());
    },
    topCasos:async(req,res,next) =>{
        const data = await models.Caso.find();
        //map clave-departamento valor-conteo
        const mapSort = new Map()
        for (const departamento of data){
            if(mapSort.has(departamento.departamento)){
                mapSort.set(departamento.departamento,mapSort.get(departamento.departamento)+1)
            }else{
                mapSort.set(departamento.departamento,1)
            }
        }
        //ordeno el map
        mapSort[Symbol.iterator] = function* () {
            yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
        }
        res.status(200).send(mapSort)
    }
}