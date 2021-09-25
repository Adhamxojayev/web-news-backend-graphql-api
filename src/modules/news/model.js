import db from '../../lib/postgres.js'

const GET_NEWS = `
    select * from news
`

const NEWS_POST = `
    insert into news (
        news_title, 
        news_body, 
        category_id, 
        author_id, 
        lang_id
    ) values ($1, $2, $3, $4, $5)
    returning *
`
const DELETE_NEWS = `
    delete from news 
    where news_id = $1
    returning *
`
const UPDATE_NEWS = `
    with  old_news as (
        select 
            news_id,
            news_title,
            news_body,
            author_id,
            views
        from news where news_id = $1
    )update news n set
    views = case
            when $5 then o.views + 1
            else o.views
        end
    ,
    news_title = 
        case
            when length($2) > 0 then $2
            else o.news_title
        end
    ,
    news_body = 
        case
            when length($3) > 0 then $3
            else o.news_body
        end
    ,
    author_id = 
        case
            when $4 > 0 then $4
            else o.author_id
        end
    
    from old_news o
    where n.news_id = $1
    returning n.*
`


const getNews = () => db(GET_NEWS)
const insertNews = ({newsTitle, newsBody, categoryId, authorId, langId}) => db(NEWS_POST,[newsTitle, newsBody, categoryId, authorId, langId])
const deleteNews = ({newsId}) => db(DELETE_NEWS, [newsId])
const updateNews = ({newsId, newsTitle = '', newsBody = '', authorId = 0, views}) => db(UPDATE_NEWS,[newsId, newsTitle, newsBody, authorId, views])

export default {
    getNews,
    insertNews,
    deleteNews,
    updateNews
}