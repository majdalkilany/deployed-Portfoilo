'use strict'
const express = require('express');

const serve = express();

const PORT = process.env.PORT|| 3000;


http://localhost:3000/test
serve.get('/test',(request,response)=>{

    serve.use(express.static('./public'));

response.send('my name is majd')
})



serve.listen(PORT,()=>{
    console.log('listening  ', PORT);
    });
    