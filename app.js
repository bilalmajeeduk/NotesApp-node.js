const fs = require('fs')
const name = require('./utils')
const getNotes = require('./notes')
const validator = require('validator')
const chalk = require('chalk');
//! nodemon app.js [live server]



//! this is the sync function takes 2 argument, first name of the file, second data in it. Override data
fs.writeFileSync('notes.text', 'This is Bilal Majeed')
//! async add data to the file, It doesn't override the existing data 
fs.appendFileSync('notes.txt', 'This is another file with the same name')

console.log(name)
const msg = getNotes()
console.log(msg)
//! testing validator library
console.log(validator.isEmail('bilal@example.com'))

//! testing chalk library
console.log(chalk.green.bgWhite.bold('Success!! Hurray'))