import mongoose from 'mongoose'
import app from './config/app'
//import {  mongoUrl } from './config/dotenv'

async function main() {
  try {
    await mongoose.connect("mongodb+srv://root:sam30127@sam-dev.a6whj1z.mongodb.net/maelPlanner?authSource=admin&w=1")
    console.log(`MongoDB database connected.`)
//    "start": "node -r ts-node/register/transpile-only -r tsconfig-paths/register ./dist/index.js",

    app.listen(1631, '0.0.0.0', () => console.log(`Listening on port : 1631`))
  } catch (error) {
    console.error(error)
  }
}

main()
