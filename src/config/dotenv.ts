import * as dotenv from 'dotenv-safe'
import path from 'path'

dotenv.config()
let dotenvPath
switch (process.env.NODE_ENV) {
  case 'test':
    dotenvPath = '.env.example'; 
    break
  case 'production':
    dotenvPath = '.env.example'; 
    break
  default:
    dotenvPath = '.env.example'; 
}
dotenv.config({ path: dotenvPath })



export const mongoUrl: string = `mongodb+srv://root:sam30127@sam-dev.a6whj1z.mongodb.net/maelPlanner?authSource=admin&w=1`

export const NODE_ENV: string = process.env.NODE_ENV!
export const BAGDAD_PORT: number = NODE_ENV === 'development' ? 1632 : 1631
// eslint-disable-next-line eqeqeq
export const REQUIRE_AUTH: boolean = NODE_ENV === 'production' || process.env.REQUIRE_AUTH! !== 'false'


export const JWT_PUB_KEY_PATH: string = process.env.JWT_PUB_KEY_PATH!
