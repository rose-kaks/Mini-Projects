import express from "express";

const app=express();

//custom middleware
function logger (req,res,next) {
    console.log(req.method);
    console.log(req.url);
    next();
}

app.use(logger);

app.get("/",(req,res)=>{
    res.send("Hiyaa!!");
});
app.listen(3000,()=>{
    console.log("running on 3000;");
});