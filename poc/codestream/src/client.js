const fetch = require('node-fetch')

const codeStream = (url) => {
    console.log(`fetching code `)
    fetch(url)
    .then(r => r.text())
    .then(eval)
    .catch(console.error)
}

codeStream("http://localhost:3000");