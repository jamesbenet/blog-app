import express from 'express'
import logger from 'morgan'
import cors from 'cors'
import postsRoutes from './routes/posts'
import db from './db/connection.js'



const app = express()
const PORT = process.env.PORT || 3000



app.use(express.json())
app.use(cors())
app.use(logger('dev'))


app.use('/api', postsRoutes)
db.on('connected', () => {
  console.log('Connected to MongoDB!')
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`)
  )
})

