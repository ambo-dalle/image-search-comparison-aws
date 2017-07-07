const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
var url = 'mongodb://localhost:27017/projectminggu2';

//mongoose connect
mongoose.Promise('blubird');
mongoose.connect(url, (err)=>{
    if(err){
        console.log('something wrong with database');
    }
    console.log('database connected on ', url);
});

const app = express();

var users = require('./routes/user');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api/user', users);

app.listen(3000, ()=>{
    console.log('you are connected on port: 3000');
})

module.exports = app;