
const fs = require('fs');
const util = require('util');
let file = `${__dirname}/categories.db`;

let readFile = util.promisify(fs.readFile);
readFile(file)
  .then(data=>{
    return JSON.parse(data);
  })
  .then(data=>writerWithPromise(file,data))
  .catch(error=>error);



const writeFile = util.promisify(fs.writeFile);

const writerWithPromise = (file,data)=>{
  data.firstName = 'dania';
  let dataAfterModifing = JSON.stringify(data);
  writeFile(file,dataAfterModifing);
};

module.exports = {readFile,writerWithPromise};