const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

require('dotenv').config()

const routes = require('./routes')

const app = express()

mongoose.connect(process.env.MONGO_URI,{ 
    useNewUrlParser: true, 
    useUnifiedTopology: true },
        () => console.log('Connected to MongoDB'))

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})

app.use(express.json())
app.use(cors())
app.use(routes)
