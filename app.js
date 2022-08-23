const fs = require('fs')
const name = require('./utils')
const getNotes = require('./notes')
const validator = require('validator')
const chalk = require('chalk');
const yargs = require('yargs');
const { argv } = require('process');
//! nodemon app.js [live server]



//! this is the sync function takes 2 argument, first name of the file, second data in it. Override data
fs.writeFileSync('notes.text', 'This is Bilal Majeed')
//! async add data to the file, It doesn't override the existing data 
fs.appendFileSync('notes.txt', 'This is another file with the same name')

//console.log(name)
const msg = getNotes()
console.log(msg)
//! testing validator library
console.log(validator.isEmail('bilal@example.com'))

//! testing chalk library
console.log(chalk.green.bgWhite.bold('Success!! Hurray'))

//! getting user input
// process is big object which contain argument as argv
// console.log(process.argv) // we got three argument in the console and we will get third one

const command = process.argv[ 2 ]
if (command === 'add') {
    console.log('I am added')
}
else if (command === 'remove') {
    console.log('I am removed')
}
//! for adding the title to 'add' we use
// node.js add --title="I am the title", we can see this in console using process.argv
//yargs parse command line = { _: [ 'add' ], title: 'I am the title', '$0': 'app.js' } 

yargs.command({
    command: 'add',
    describe: 'add a new text',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function () {
        console.log('iam tying ')
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove a text',
    handler: function () {
        console.log('i am removed')
    }
})

yargs.command({
    command: 'list',
    describe: 'list items',
    handler: function () {
        console.log('items are listed')
    }
})
yargs.command({
    command: 'read',
    describe: 'read items',
    handler: function () {
        console.log('items are readed')
    }
})


console.log(yargs.argv)