const fs = require('fs')

const text = fs.readFileSync(process.argv[2], {encoding: 'utf-8'})

let result = ''
const chars = {};
[...text].forEach(char => {
  char = char.toLowerCase()
  if(!chars[char]) {
    chars[char] = true
    result += char
  }
})

console.log(result)