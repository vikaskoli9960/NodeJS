const  fs = require('fs')

fs.readFile('text.file', 'utf-8', function(error, data){
    if(error) return console.error(error)
    console.log('Data:', data)
})