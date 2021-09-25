import model from './model.js'


export default {
    Query:{
        news: async () => model.getNews()
    },

    Mutation: {
        addNews: async (_,args) => {
            try {
                let news = await model.insertNews(args)
                if(news.length){
                    return {
                        status: 201,
                        message: 'you are news added',
                        data: news
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
        deleteNews: async (_,args) => {
            try {
                let news = await model.deleteNews(args)
                if(news.length){
                    return {
                        status: 201,
                        message: 'you are news deleted',
                        data: news
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
        updateNews: async (_,args) => {
            try {
                let news = await model.updateNews(args)
                if(news.length){
                    return {
                        status: 201,
                        message: 'you are news updated',
                        data: news
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

    News: {
        newsTitle: global => global.news_title,
        newsBody: global => global.news_body,
        categoryId: global => global.category_id,
        authorId: global => global.author_id,
        langId: global => global.lang_id,
    }
}

