const express = require('express')
const app = express()

const PORT = 3000
const TIME_ALIVE = parseInt(process.env.TIME_ALIVE) || 10000

app.get('/', (req, res) => {
    return res.send('Hello world.')
})

app.get('*', (req, res) => {
    res.statusCode = 404
    return res.send('404')
})

app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Test webserver is running on port ${PORT}. Will exit in ${TIME_ALIVE}ms.`)
})

setTimeout(() => {
    console.log('Test webserver is shutting down.')
    process.exit(0)
}, TIME_ALIVE);