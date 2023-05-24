const express = require('express');
const app = express();
const router = require('./routes/router.js')
app.use(express.static('public'))
app.use('/',router);

app.listen(3000,()=>{
    console.log('Running on port 3000');
})