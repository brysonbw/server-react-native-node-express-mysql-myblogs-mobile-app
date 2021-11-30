const express = require('express')
const app = express()
require('dotenv').config()


// middleware 
app.use(express.json())


// blog route
const blogRouter = require('./routes/blogs')

// routes
app.use('/api/blogs', blogRouter)



const PORT = process.env.PORT || 3007
app.listen(PORT, () => {
  console.log(`Server GOOD, running on port ${PORT}`)
})