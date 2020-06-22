import redis from "redis";
import models from "../models"

export default {
    list: async (req,res,next) =>{
        res.status(200).send(await models.Caso.find());
    }
}