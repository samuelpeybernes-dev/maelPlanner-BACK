import mongoose from 'mongoose'
import app from './config/app'
import { BAGDAD_PORT, mongoUrl } from './config/dotenv'

async function main() {
  try {
    await mongoose.connect(mongoUrl)
    console.log(`MongoDB database connected.`)

    app.listen(1631, '0.0.0.0', () => console.log(`Listening on port : 1631`))
  } catch (error) {
    console.error(error)
  }
}

main()
