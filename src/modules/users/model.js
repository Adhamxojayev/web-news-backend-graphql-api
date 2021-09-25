import db from '../../lib/postgres.js'


const USERS = `
    select * from users
`
const INSERT_USER = `
    insert into users(
        first_name, 
        last_name, 
        email, 
        password,
        specialist
    ) values ($1, $2, $3, $4, $5)
    returning *
`

const LOGIN = `
    select 
    *
    from users u
    where
    case
        when u.password = $1 and u.email = $2 then true
        else false
    end

`

const users = () => db(USERS)
const insertUser = ({firstName, lastName, email, password,specialist}) => db(INSERT_USER, [firstName, lastName, email, password,specialist])
const loginUser = ({password, email}) => db(LOGIN, [password, email])

export default {
    users,
    insertUser,
    loginUser
}