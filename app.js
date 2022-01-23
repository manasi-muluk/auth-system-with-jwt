require('dotenv').config();
const express=require('express');
const mongoose=require('mongoose');
const app=express();
const cookieParser = require("cookie-parser");

app.use(cookieParser());
const PORT=process.env.PORT||8000;

mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true});
const db=mongoose.connection;
//if error
db.on('error',(error)=>{
    console.log(error)
})
//once connected successfully, display success message
db.once('open',()=>{console.log('Sucessfully connected to database!!!')});

//middlewares
app.use(express.urlencoded({extended:false}));
app.use(express.json());


app.use('/add',require('./api/routes/add_data') )
app.use('/user',require('./api/routes/user'))


app.use((req,res,next)=>{
    res.status(404).json({
        error: 'bad request'
    })
})




app.listen(PORT,()=>{
    console.log("Server connceted");
})



