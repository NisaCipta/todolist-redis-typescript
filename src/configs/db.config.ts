import mysql, { ConnectionOptions } from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();

const access: ConnectionOptions = {
   connectionLimit: 10,
   host: process.env.DB_HOST,
   user: process.env.DB_USER,
   password: process.env.DB_PASS,
   database: process.env.DB_NAME,
   port: Number(process.env.DB_PORT),
};

const connection = mysql.createPool(access);

export default connection;
