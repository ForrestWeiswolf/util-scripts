const fs = require('fs')

const text = fs.readFileSync(process.argv[2], {encoding: 'utf-8'})

const counts = {};
[...text].forEach(char => {
  char = char.toLowerCase()
  counts[char] = (counts[char] || 0) + 1
})

Object.entries(counts)
  .sort((a, b) => a[0] > b[0] ? 1 : -1)
  .forEach(e => console.log(e))
