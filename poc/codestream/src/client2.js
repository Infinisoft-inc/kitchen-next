const fetch = require('node-fetch')

const codeStream = (url) => {
    console.log(`fetching code `)
    fetch(url)
    .then(r => r.text())
    .then(console.log)
    .catch(console.error)
}

codeStream("http://localhost:3000");