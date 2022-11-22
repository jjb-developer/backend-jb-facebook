//require('dotenv').config()


import express from 'express'
import { Pool } from './db.js'
//import * as dotenv from 'dotenv'
//dotenv.config()
const app = express();
const port = process.env.PORT || 3001;

//app.get("/", (req, res) => res.type('html').send(html));

app.get("/", async (req, res) => {
   const data = await Pool.query('SELECT * FROM books').catch(e=>console.log(e.message))
   //console.log(info.rows)
   //res.send('Running')
   console.log(data)
   res.json(data)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));


const html = `
<!DOCTYPE html>
<html>
  <head>
    <title>jb-developer</title>
  </head>
  <body>
    <section>
      Mi Primer Backend!
    </section>
  </body>
</html>
`