const fs = require("fs/promises");

function readFile() {
  let fileData;
  // callback
  // fs.readFile("data.txt", function (error, fileData) {
  //   console.log("File parsing done!");
  //   console.log(fileData.toString());
  // });

  // promise
  fs.readFile("data.txt")
    .then(function (fileData) {
      console.log("File parsing done!");
      console.log(fileData.toString());
      // return anotherAsyncOperation
    })
    .then(function () {});

  console.log("Hi there!");
}

readFile();
