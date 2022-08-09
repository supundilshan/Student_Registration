const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = 4000;
const cors = require('cors');

const mongoose = require('mongoose');
const config = require('./db');

const studentRoute = require('./route');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB,{useNewUrlParser:true}).then(
    ()=>{console.log('data base is connected')},
    err => {console.log('Error : '+ err)}
);

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.use('/student', studentRoute);

app.listen(PORT,function(){
    console.log('server listening to: ',PORT);
});