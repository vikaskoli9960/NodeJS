//  Syntax: fs.unlink(path, options, callback)

const fs = require('fs')

fs.unlink('text.file', () => {
    console.log('File deleted!')
})