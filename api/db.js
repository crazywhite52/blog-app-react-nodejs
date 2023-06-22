import mysql from "mysql"
import * as dotenv from "dotenv";
dotenv.config();
export const db = mysql.createConnection({
  host:"172.18.43.183",
  user: process.env.DB_USER,
  password: process.env.DB_KEY,
  database:"blog"
})