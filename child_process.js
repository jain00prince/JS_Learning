const cp = require("child_process");

// console.log("opening calculator");
// cp.execSync("calc");
// console.log("calculator opened");

// cp.execSync("start chrome http://www.google.com");

// cp.execSync("mkdir new");

// let c = cp.execSync("node --version");
// console.log("output is " + c);
// console.log("------------------------------");
// console.log("output is ", c); // c gives you buffer value
// console.log("------------------------------");
// console.log(`output is ${c}`);

cp.exec("start chrome https://youtube.com/", (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("started");
  }
});
