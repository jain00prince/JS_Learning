const path = require("path");

console.log("------------------------------");
const giveExtension = path.extname(path.join(__dirname, "abc.js"));
console.log(giveExtension);
console.log("------------------------------");

let giveName = path.basename(__dirname);
console.log(giveName);
console.log("------------------------------");

giveName = path.basename(path.join(__dirname, "abc.js"));
console.log(giveName);
console.log("------------------------------");
