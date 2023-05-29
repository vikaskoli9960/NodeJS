
const myURL = new URL('http://vikas.website.org/5296koli')

console.log('Before changes')
console.log(myURL.href)

console.log('host: ', myURL.host)

myURL.host = 'vikaskoliwebsite.org'
console.log('After changes')
console.log('New URL: ', myURL.href)

const host = myURL.host
console.log('host: ', host)



