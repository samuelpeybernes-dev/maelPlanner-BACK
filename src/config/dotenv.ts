import * as dotenv from 'dotenv-safe'
import path from 'path'

dotenv.config()
let dotenvPath
switch (process.env.NODE_ENV) {
  case 'test':
    dotenvPath = path.join(__dirname, '.env')
    break
  case 'production':
    dotenvPath = path.join(__dirname, '.env')
    break
  default:
    dotenvPath = path.join(__dirname, '.env')
}
//path: dotenvPath 
dotenv.config({ example: '.env.example', allowEmptyValues: true})

export const mongoUrl: string = `mongodb+srv://root:sam30127@sam-dev.a6whj1z.mongodb.net/maelPlanner?authSource=admin&w=1`

export const NODE_ENV: string = process.env.NODE_ENV!
export const BAGDAD_PORT: number = NODE_ENV === 'development' ? 1632 : 1631
// eslint-disable-next-line eqeqeq
export const REQUIRE_AUTH: boolean = NODE_ENV === 'production' || process.env.REQUIRE_AUTH! !== 'false'


export const JWT_PUB_KEY_PATH: string = process.env.JWT_PUB_KEY_PATH!
