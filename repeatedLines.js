const fs = require('fs')

const file = fs.readFileSync(process.argv[2], {encoding: 'utf-8'}).split('\n')
const lines = {}
file.forEach(line => {
  const trimmed = line.trim()
    // .replace(/"/g, "").replace(/\/$/g, "")
    // .replace(/https?:\/\/(www\.)?/g, "")
  lines[trimmed] = (lines[trimmed] || 0) + 1
})

const repeatedLines = Object.keys(lines)
  .filter(line => lines[line] > 1)
  .sort((a, b) => lines[a] - lines[b])

repeatedLines.forEach(line => {
    console.log(line, lines[line])
})