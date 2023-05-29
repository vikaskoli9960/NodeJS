const assert = require('assert')

try{
    assert.notDeepEqual({a: '9'}, {a : 9})
    console.log('No error found')
} catch(error) {
    console.log('Error', error)
}
