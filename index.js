const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = 3003;

app.use(express.json);


app.get('/user',async(req,res)=>{
    console.log('This is Aryan');
    
})


app.listen(port,(res,req)=>{
    console.log(`Listening on port http:/localhost:${port}`);
    
})


