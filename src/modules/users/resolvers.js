import model from './model.js'
import { registerJoi } from '../../lib/validation.js'
import jwt from 'jsonwebtoken'

export default {
    Query: {
        users: async () => await model.users()
    },
    Mutation:{
        register: async (_,args) => {
            try {
                let {error} = registerJoi.validate(args)
                if(error){
                    throw error
                }
                let user = await model.insertUser(args)
                if(user.length){
                    return {
                        status: 201,
                        message: 'you are registered',
                        data: jwt.sign({userId: user[0].user_id}, 'exam')
                    }
                }else throw new Error('error')
            } catch (error) {
                return{
                    status: 400,
                    message: error,
                    data: null
                }
            }
        },
        login: async (_,args) => {
            try {
                let user = await model.loginUser(args)
                if(user.length){
                    return {
                        status: 201,
                        message: 'you have logged in',
                        data: jwt.sign({userId: user[0].user_id}, 'exam')
                    }
                }else throw new Error('error')
            } catch (error) {
                return{
                    status: 400,
                    message: error,
                    data: null
                }
            }
        } 
    },
    Users:{
        firstName: global => global.first_name,
        lastName: global => global.last_name,
        email: global => global.email,
        password: global => global.password,
        specialist: global => global.specialist
    }
}