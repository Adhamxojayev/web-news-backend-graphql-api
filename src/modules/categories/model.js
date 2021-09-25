import db from '../../lib/postgres.js'

const GET = `
    select
        * 
    from categories
`
const POST = `
    insert into categories(
        category_name,
        lang_id
    ) values ($1, $2)
    returning *
`
const DELETE = `
    delete from categories
    where category_id = $1
    returning *
`
const PUT = `
    update categories set
        category_name = $2
    where 
        category_id = $1
    returning *
`

const categoryGet = () => db(GET)
const insertCategory = ({categoryName, langId}) => db(POST, [categoryName, langId])
const deleteCategory = ({categoryId}) => db(DELETE, [categoryId])
const updateCategory = ({categoryId, categoryName}) => db(PUT,[categoryId, categoryName])

export default {
    categoryGet,
    insertCategory,
    deleteCategory,
    updateCategory
}