let time = setInterval(timer, 1000)

function timer() {
    let date = new Date()
    return console.log(date.toLocaleTimeString())
}

setTimeout(() => {
    console.log('This message appears after 5 seconds')
    clearInterval(time)
}, 5000)