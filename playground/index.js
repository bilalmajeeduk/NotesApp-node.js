const fs = require('fs')
// const data = {
//     name: 'Bilal',
//     planet: 'Moon',
//     age: 25
// }
// const person = JSON.stringify(data)
// fs.writeFileSync('sample.json', person)
const buf = fs.readFileSync('sample.json')
const dataJSON = buf.toString()
const updateObjects = JSON.parse(dataJSON)
// console.log(updateObjects)
updateObjects.planet = 'Earth'
updateObjects.age = 98
// console.log(updateObjects.age)
const makeInObject = JSON.stringify(updateObjects)
fs.writeFileSync('sample.json', makeInObject)
console.log(makeInObject)
