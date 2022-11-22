import pg from 'pg'
import * as dotenv from 'dotenv'
dotenv.config()

const config = {
   user: process.env.USERNAME,
   host: process.env.HOST,
   database: process.env.DATABASE,
   password: process.env.PASSWORD
}

/*
const SELECT = 'SELECT * FROM books'
const INSERT = "INSERT INTO books VALUES (7,'Los 12 pilares','Jim Rohn')"
const UPDATE = "UPDATE books SET author = 'miguel angel ruiz' WHERE section = 6"
*/

export const Pool = new pg.Pool(config)

/*
export async function getBooks(expresion){
   return await pool.query(expresion)
}
*/