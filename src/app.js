import express from "express";
import cors from "cors";

import connection from "./database.js";

const app = express();
app.use(express.json());
app.use(cors());

app.post('/items', async (req,res) => {
    const {text} = req.body

    if(!text) return res.sendStatus(404) 
    try {
        await connection.query('INSERT INTO list (text) VALUES ($1)', [text])
        return res.sendStatus(201)
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(501)
    }
})

app.get('/items', async (req,res) => {
    //res.send(lista de compras)
    try {
        const result = await connection.query('SELECT * FROM list')
        return res.send(result.rows)
    }
    catch (e) {
        console.log(e)
        return res.sendStatus(501)
    }
})

export default app;
