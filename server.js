const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes')
require('dotenv').config()

const app = express()
app.use(express.json())
app.use(cors())

const PORT = process.env.SERVER_PORT || 9001
mongoose.connect(process.env.DB_CONNECT)
  .then(console.log('Database connected'))
  .catch((err) => console.error(err))

app.use('/api', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})