const fs = require("fs/promises");

async function readFile() {
  let fileData;
  // callback
  // fs.readFile("data.txt", function (error, fileData) {
  // if (error) {
  //   // ...
  // }
  //   console.log("File parsing done!");
  //   console.log(fileData.toString());
  // });

  // promise -> async / await & try - catch
  try {
    fileData = await fs.readFile("data.txt");
  } catch (error) {
    console.log(error);
  }

  console.log("File parsing done!");
  console.log(fileData.toString());
  // return anotherAsyncOperation
  console.log("Hi there!");
}

readFile();
