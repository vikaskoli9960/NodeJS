// syntax - assert.deepStrictEqual(actual, expected[, message])

const assert = require('assert')

try {
    assert.deepStrictEqual({a: 2}, {a : '2'})
    console.log('No error found!')
    
} catch(error) {
    console.log('Error Found!')
}
