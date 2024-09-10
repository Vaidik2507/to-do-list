require('dotenv').config()
console.log(process.env)
const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res)=>{
    res.send('hi vaidik')
})
app.get('/vc',(req,res)=>{
    res.send('welcum')
})
app.listen(process.env.PORT,()=>{
    console.log('I am listening')
})

