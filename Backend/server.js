const express=require("express");
const connectionDB=require("./config/dbConnection");
const app=express();
const cors = require('cors')
const errorHandler = require("./middleware/errorHandler");
const dotenv=require("dotenv").config();

const port=process.env.PORT || 8000;

app.use(cors());

app.use(express.json());

connectionDB();

app.use('/api/employeeItems',require('./routes/itemRoutes'))


app.use(errorHandler);
app.listen(port,()=>{
    console.log("Listening to u on Port:",port);
    
})
