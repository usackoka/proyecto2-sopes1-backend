import mongoose, {Schema} from 'mongoose';
const usuarioSchema = new Schema({
    rols: { type:String,maxlength:200, required:true},
    user: { type:String,maxlength:50, required:true},
    password: { type:String, maxlength:50, required:true}
}, {collection: 'sgUsuario'});

const Usuario = mongoose.model('sgUsuario',usuarioSchema);
export default Usuario;