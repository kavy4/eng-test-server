const express = require('express')
const fileSystem = require('fs')
const cors = require('cors')
const app = express()

const PORT = 5000
app.use(express.json())
app.use(cors({ 
  origin: '*'
 }))

app.get('/api/get-topics', (request, response) => {
  response.json(fileSystem.readFileSync('./data.json', 'utf-8'))
})

app.post('/api/set-topics', (request, response) => {
  fileSystem.writeFileSync('./data.json', JSON.stringify(request.body))
  response.json('ok')
})

app.listen(PORT, () => console.log(`Server worked: http://localhost:${PORT}`))