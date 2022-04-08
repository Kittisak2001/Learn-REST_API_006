const postRoute = require('./route/posts')
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config')




// Middlewaer
app.use(cors());

app.use(express.json());
app.use('/posts', postRoute);

app.get('/', (req,res)=>{
    console.log('OK')
})

// Connect To DB
mongoose.connect(process.env.URL, () => {
    console.log('connected');
})

app.listen(3000);