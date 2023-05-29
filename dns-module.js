const fs = require('fs')

fs.readFile('sample.txt', function(error, data){
    if(error) return console.error(error)
    console.log('Data: ', data.toString())
})