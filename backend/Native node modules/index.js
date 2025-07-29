// Native node modules -

//fs (file system)

//1. to write or create a new file, message.txt
// const fs = require("fs");
// fs.writeFile("message.txt", "Hello from NodeJS!", (err)=>{
//     if (err) throw err;
//     console.log("the file is saved!");
// });

//2. to read from a created file
const fs = require("fs");
fs.readFile("message.txt", "utf8", (err,data) => {
    if (err) throw err;
    console.log(data);
});