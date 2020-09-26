import dotevn from 'dotenv'
dotevn.config();

export default {
    //variables con la configuracion para la base de datos de MongoDB
    urlMongoDB:process.env.URL_MONGO,
}