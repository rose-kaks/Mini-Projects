import express from "express";
import ejs from "ejs";

const app = express();
const today = new Date(); // Creates a Date object for the current date and time
const dayOfWeek = today.getDay(); // Gets the day of the week as a number
// 0 for Sunday, 6 for Saturday

let advice = "It's a weekday! Time to get things done."; // Default advice
if (dayOfWeek === 0 || dayOfWeek === 6) { // Check if it's Sunday or Saturday
    advice = "It's the weekend! Have funnnn ;)";
}

app.get("/", (req,res)=>{
    res.render("index.ejs", {
        advice : advice,
        secret : "<i><b>shhhh</i></b>"
    });
});

app.listen(3000, (req,res)=>{
    console.log(`Server running on port 3000!`);
});