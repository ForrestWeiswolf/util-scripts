const fs = require('fs')

let text = fs.readFileSync(process.argv[2], {encoding: 'utf-8'})

const regexes = []

let isRegex = true
for(i = 3; i <  process.argv.length; i++){
  if(isRegex){
    regexes.push({pattern: RegExp(process.argv[i], 'gm')})
  } else {
    regexes[regexes.length - 1].replacement = process.argv[i]
      .replace('\\n', '\n')
      .replace('\\t', '\t')
  }
  isRegex = !isRegex
}

regexes.forEach(({pattern, replacement}) => {
  text = text.replaceAll(pattern, replacement)
})

console.log(text)
