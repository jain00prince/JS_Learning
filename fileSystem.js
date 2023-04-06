const { opendir } = require("fs/promises");

const a = async () => {
  try {
    const dir = await opendir("./");
    for await (const dirName of dir) {
      console.log(dirName.name);
      console.log(typeof dirName.name);
    }
    console.log(typeof dir);
  } catch (err) {
    console.error(err);
  }
};

const fs = require("fs");

const read = () => {
  // READ
  let bufferdata = fs.readFileSync("demo.js");
  console.log(bufferdata);
  console.log("---------------------");
  let data = `data is ${bufferdata}`;
  console.log("Type Of data is " + typeof data + " with data: " + bufferdata);
};

const createUpdateWithReplace = () => {
  // CREATE
  //   fs.openSync("abc.txt", "w");

  // no file => create new file AND file exist => content replace
  fs.writeFileSync("abc.txt", `console.log("Hello World")`);
  console.log(fs.readFileSync("abc.txt").toString());
};

const createUpdateWithoutReplace = () => {
  fs.appendFileSync("new.txt", "This is Line 1 \n");
  fs.appendFileSync("new.txt", "This is Line 2 \n");
  fs.appendFileSync("new.txt", "This is Line 3 \n");
};

const newFolderWithFile = () => {
  fs.mkdirSync("MyFolder");
  fs.appendFileSync("MyFolder/MyFile.txt", "this is my new content");
};

const readAndDeleteAllFilesOfFolders = () => {
  const fileNames = fs.readdirSync("MyFolder");
  console.log(typeof fileNames);
  //   fs.rmSync("MyFolder/Myfile.txt");
  console.log("---------------------");
  for (let i = 0; i < fileNames.length; i++) {
    fs.unlinkSync("MyFolder/" + fileNames[i]);
    console.log(fileNames[i] + " Deleted Successfully!");
  }
  fs.rmdirSync("MyFolder");
  console.log("Folder Deleted");
};

const doesPathExist = () => {
  const isPathExist = fs.existsSync("demo");
  if (isPathExist) {
    console.log("Path Exists 😊");
  } else {
    console.log("No Such Path Exists 😒");
  }
};

const doesFileOrFolder = () => {
  const isFolderExist = fs.existsSync("demo");
  if (isFolderExist) {
    const isFolder = fs.lstatSync(__dirname + "\\demo");
    if (isFolder.isDirectory()) {
      console.log("Folder Exists 😊");
    } else {
      console.log("No Folder Exists 😒");
    }
  } else {
    console.log("No Such Folder Path Exists 😒");
  }
  const isFileExist = fs.existsSync("index.jsx");
  if (isFileExist) {
    const isFile = fs.lstatSync(__dirname + "\\index.js");
    if (isFile.isFile()) {
      console.log("File Exists 😊");
    } else {
      console.log("No File Exists 😒");
    }
  } else {
    console.log("No Such File Path Exists 😒");
  }
};
