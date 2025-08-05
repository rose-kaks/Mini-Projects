import express from "express";
const app = express();
const port=3000;

//get the homepage on load
app.get("/", (req,res)=>{
    res.send("<i>Hello, you beautiful person!</i>");
});

//start the server at given port
app.listen(port, ()=> {
    console.log(`Server running on port ${port}.`);
});