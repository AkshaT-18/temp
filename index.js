const express = require('express')

const app = express();

app.get("/",(req,res)=>{
    res.send("hey!!! this is my api")
})

app.listen(3000);