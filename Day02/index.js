require ('dotenv').config()

const express = require('express')
const app = express()

app.get('/',(req,res) => {
    res.send('Hello world!')
})

app.get('/twitter', ( req,res) => {
    res.send("https://x.com/Samrat4488");
})

app.get('/login', ( req, res)=> {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})