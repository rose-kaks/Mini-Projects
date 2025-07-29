//this script is in CJS (Common JS) and thus we use 'require()'

// var generateStupidName = require("sillyname");
// var sillyname = generateStupidName();
// console.log(`My name is ${sillyname}.`);

//lets upgrade to import with ECMAScript (good practice now)
//to use ES modules and import, we need to go to package.json and add or edit type, set it to "module"
import generateStupidName from "sillyname";
var sillyname = generateStupidName();
console.log(`My name is ${sillyname}.`);

// import { randomSuperhero } from "superheroes";
// const name=randomSuperhero();