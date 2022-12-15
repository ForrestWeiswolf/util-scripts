const fs = require('fs')
const { stdout } = require('process')

const file = fs.readFileSync(process.argv[2], {encoding: 'utf-8'})

const removeDialogue = (text) => {
  return text.replaceAll(/["“][^"“”]+([.—?–!-,]?)["”]/g, `"___$1"`)
}

stdout._write(removeDialogue(file))
