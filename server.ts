import express from 'express';
import authRoutes from './routes/auth.route';
import { Sequelize, DataTypes } from 'sequelize';
import {Client} from 'pg';
import bodyparser  from 'body-parser';
import router from './routes/index'; 



const Connection = new Client({
    host: 'localhost',
    user: 'hadiqasumbalarshad',
    password: '11223344',
    port: 5432,
    database: 'signup',
});

Connection.connect()
    .then(() => {
        console.log('Connected to database');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error);
    });
  


const app = express();

const PORT: number = 3001;

app.use(express.json());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }))


app.use(router);






app.listen(PORT, (): void => {
    console.log('SERVER IS UP ON PORT:', PORT);
});


