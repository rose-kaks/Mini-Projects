import express from "express";
import morgan from "morgan";

const app=express();
const port=3000;

app.use(morgan("tiny")); //minimal output

app.get("/",(req,res)=>{
    res.send("Hello!");
});

app.listen(port, ()=>{
    console.log(`running on ${port}`);
});