const express = require('express');
const app = express();
require('dotenv').config({ path: './config/.env' });
require('./config/database.config')



app.listen(4000, ()=>{
    console.log("L'application tourne bien sur le port 4000");
});