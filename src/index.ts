import mongoose from 'mongoose'
import app from './config/app'
import { BAGDAD_PORT, mongoUrl } from './config/dotenv'

async function main() {
  try {
    await mongoose.connect(mongoUrl)
    console.log(`MongoDB database connected.`)

    app.listen(BAGDAD_PORT, '0.0.0.0', () => console.log(`Listening on port : ${BAGDAD_PORT}`))
  } catch (error) {
    console.error(error)
  }
}

main()
