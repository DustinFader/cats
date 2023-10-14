// asyncBreeds.js
const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {

    console.log("In readFile's Callback: it has the data.");
    
    // ISSUE: Returning from *inner* callback function, not breedDetailsFromFile.
    
    if (!error) {
      callback(data);
    } else callback(undefined)
  });
};

const bombay = breedDetailsFromFile('Bombay', (data) => { console.log(data) });
// we try to get the return value
//console.log('Return Value: ', bombay); // => will NOT print out details, instead we will see undefined!

module.exports = breedDetailsFromFile;