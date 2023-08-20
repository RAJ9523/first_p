
const express=require('express');

const mongoose=require('mongoose');
const cors=require('cors');




const bodyparser=require("body-parser");
const cookieparser=require('cookie-parser');
const app=express();
app.use(express.json());
app.set("view engine","ejs");
app.use(cookieparser());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(bodyparser.json());
mongoose.connect("mongodb://localhost:27017",{

dbName:"apis",
}).then(()=>console.log("database  is connected"));
 const schema=new mongoose.Schema({
          name:String,
          password:String,
    });
    
    const apis=mongoose.model("apis",schema);
app.get("/",(req,res)=>{
     apis.create({
        name:"raj",
        password:"123"
    });

    const {f}=apis.find({});
    console.log(f);
    res.render("login");
 
});

app.listen(3000,()=>{

console.log("server is listenong at :localhost3000");

});



