import redis from "redis";
import cfgVar from '../configuration/Variables'

export default {
    test: async (req,res,next) =>{

        res.status(200).send({});
    }
}

async function test(){
    let client = redis.createClient({
        db: 1,
        port: cfgVar.redisPort,
        host: cfgVar.redisHost
    })
    let respuesta;
    await client.get('PG01', (err, data) => {
        console.log('ON!')
        console.dir(data)
        respuesta= data;
    });
    return {respuesta:respuesta};
}