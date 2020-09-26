import express from 'express';
import morgan from 'morgan';
import cors from 'cors'
import path from 'path';
import router from './routes'
import dotevn from 'dotenv'
dotevn.config();

const app=express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));
app.use('/api',router)
app.set('port', process.env.PORT || 3100);
app.listen(app.get('port'), () => {
    console.log('server on port '+app.get('port'));
}); 