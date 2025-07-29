//1. to get user's url input
import inquirer from 'inquirer';
//2. to generate a qr code
import qr from "qr-image";
//3. write into a new file using fs
import fs from "fs";


inquirer
  .prompt([
    /* Pass your questions in here */
    {
        "message":"Please enter your URL", 
        "name":"URL"
    }
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    const url = answers.URL;
    var qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream('qr_img.png'));
    fs.writeFile("URL.txt", url, (err)=>{
        if (err) throw err;
        console.log("URL has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });