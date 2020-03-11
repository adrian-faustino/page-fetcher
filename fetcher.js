// Takes a URL as a cmd line argument as well as a local file path and download the resource to the path

const userInput = process.argv.slice(2);
const URL = userInput[0];
const savePath = userInput[1];

const request = require('request'); //built in npm, installed it
const fs = require('fs'); //built in node

//connect to server
if (URL === undefined || savePath === undefined) {
  console.log('Please enter a URL and a save path!');
} else {
  request(`${URL}`, (error, response, body) => {
    fs.writeFile(`${savePath}`, body, (err) => {
      if (err) {
        console.log('erroR!');
      } else {
        console.log(`Downloaded and saved to ${savePath}`);
      }
    });
  });
}

//on connect, write a GET request?