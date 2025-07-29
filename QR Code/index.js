//1. to get user's url input
import inquirer from 'inquirer';

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
    console.log(url);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

//2. to generate a qr code
import qr from "qr-image";
 
var qr_svg = qr.image('I love QR!', { type: 'svg' });
qr_svg.pipe(require('fs').createWriteStream('i_love_qr.svg'));
 
var svg_string = qr.imageSync('I love QR!', { type: 'svg' });