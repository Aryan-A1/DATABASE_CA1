const express = require('express')
const mongoose = require('mongoose')

const app = express();
const port = 3003;

app.use(express.json);

app.get('/',async(req,res)=>{
    try{}
    catch{}
})


app.listen(port,(res,req)=>{
    console.log(`Listening on port http:/localhost:${port}`);
    
})


