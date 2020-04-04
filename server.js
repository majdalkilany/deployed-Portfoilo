'use strict'
const express = require('express');

const serve = express();

const PORT = process.env.PORT|| 3000;

serve.use(express.static('./public'));


http://localhost:3000/test
serve.get('/test',(request,response)=>{
response.send('my name is majd')
})


serve.listen(PORT,()=>{
    console.log('listening  ', PORT);
    });
    