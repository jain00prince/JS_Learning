const fs = require("fs");
const path = require("path");

// const a = fs.mkdirSync("a", { recursive: true });
// console.log(a)

const b = () => {
  const folderName = "Lectures Files";
  const isPathExist = fs.existsSync(folderName);

  if (!isPathExist) {
    fs.mkdirSync("Lectures Files");

    for (let i = 1; i <= 10; i++) {
      let dirToMake = path.join("Lectures Files", `Lecture - ${i}`);
      fs.mkdirSync(dirToMake);
      fs.writeFileSync(
        path.join(dirToMake, "ReadMe.md"),
        `Read Me file for Lecture - ${i}`
      );
    }
    console.log(`${folderName} Created 😊`);
  } else {
    console.log("Folder Already Exists 😒");

    fs.mkdirSync("Lectures Files_copy");

    for (let i = 1; i <= 10; i++) {
      let dirToMake = path.join("Lectures Files_copy", `Lecture - ${i}`);
      fs.mkdirSync(dirToMake);
      fs.writeFileSync(
        path.join(dirToMake, "ReadMe.md"),
        `Read Me file for Lecture - ${i}`
      );
    }

    console.log("Copy of Folder Created 😊");
  }

  // setTimeout(() => {
  //   const newFolderName = "Updated Lectures Files";
  //   fs.renameSync(folderName, newFolderName);
  //   console.log(`${folderName} Updated to ${newFolderName} 😊`);
  // }, 3000);
};

b();
