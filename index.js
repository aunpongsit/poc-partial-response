const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

app.get('/partial', (req, res) => {
  res.connection.setTimeout(0);
  res.writeHead(200, { 'Content-type': 'multipart/json' })

  res.write(JSON.stringify({ progress: '25%' }))

  setTimeout(() => {
    res.write(JSON.stringify({ progress: '50%' }))
  }, 1000)

  setTimeout(() => {
    res.write(JSON.stringify({ progress: '100%' }))
    res.end()
  }, 2000)
})
