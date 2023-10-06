import * as dotenv from 'dotenv-safe'

if (process.env.NODE_ENV != 'production') {
  dotenv.config()
}
export const JWT_ACCESS_TOKEN_SECRET: string = process.env.JWT_ACCESS_TOKEN_SECRET!
export const JWT_REFRESH_TOKEN_SECRET: string = process.env.JWT_REFRESH_TOKEN_SECRET!
const MONGO_DB_HOST: string = process.env.MONGO_DB_HOST!
const MONGO_DB_USERNAME: string = process.env.MONGO_DB_USERNAME!
const MONGO_DB_PASSWORD: string = process.env.MONGO_DB_PASSWORD!
const MONGO_DB_NAME: string = process.env.NODE_ENV === 'development' ? 'dev-maelPlanner' : 'maelPlanner'
export const mongoUrl = `mongodb+srv://${MONGO_DB_USERNAME}:${MONGO_DB_PASSWORD}@${MONGO_DB_HOST}/${MONGO_DB_NAME}?authSource=admin&w=1`
