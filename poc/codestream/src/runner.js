
// console.log(process.argv[2])

const {readFileSync} = require('fs')
const f = readFileSync('./poc1.js', {encoding: 'utf-8'});

// console.log(f);

eval(f)
// eval("console.log(\"dogeuttetet\")")