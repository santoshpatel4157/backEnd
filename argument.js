const minimist = require("minimist")

const newArg = minimist(process.argv.slice(2))
console.log(newArg.name)