const fs = require("fs");

// writing files
const writeFile = (fileContent) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./README.md", fileContent, (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File written!",
      });
    });
  });
};

// copying file
const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./README.md", "./Develop/dist/README.md", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "README copied!",
      });
    });
  });
};

module.exports = { writeFile, copyFile };
