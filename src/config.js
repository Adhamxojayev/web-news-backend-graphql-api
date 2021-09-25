import path from 'path'
import dotenv from 'dotenv'
dotenv.config({path: path.join(process.cwd(), 'src', '.env')})


const pgConfig = {
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE ,
}

export {
    pgConfig
}