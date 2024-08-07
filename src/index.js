import app from './app.js'
import { PORT } from './config/index.js'
import { connectDB } from './database/index.js'

async function main () {
  try {
    await connectDB()
    app.listen(PORT)
    console.log(`Listening on port http://localhost:${PORT}`)
    console.log(`Environment: ${process.env.NODE_ENV}`)
  } catch (error) {
    console.error(error)
  }
}

main()
