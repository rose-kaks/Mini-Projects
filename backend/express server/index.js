import express from "express";
const app = express();
const port=3000;

//get the homepage on load
app.get("/", (req,res)=>{
    res.send("<i>Hello, you beautiful person!</i>");
});

//handling endpoints other than just home
app.get("/about", (req,res)=>{
    res.send("Currently, you're meeting a <b>DeveLoPEr!</b>");
});

app.get("/contact", (req,res)=>{
    res.send("Meet me at the Eastside!");
});

//start the server at given port
app.listen(port, ()=> {
    console.log(`Server running on port ${port}.`);
});