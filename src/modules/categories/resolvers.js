import model from './model.js'



export default {
    Query: {
        categories: async () => model.categoryGet()
    },

    Mutation:{
        addCategory: async (_,args) => {
            try {
                let category = await model.insertCategory(args)
                if(category.length){
                    return {
                        status: 201,
                        message: 'you are category added',
                        data: category
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
        deleteCategory: async (_,args) => {
            try {
                let category = await model.deleteCategory(args)
                if(category.length){
                    return {
                        status: 200,
                        message: 'you are category deleted',
                        data: category
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
        updateCategory: async (_,args) => {
            try {
                let category = await model.updateCategory(args)
                if(category){
                    return {
                        status: 200,
                        message: 'you are category updated',
                        data: category
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

    Category:{
        categoryId: global => global.category_id,
        categoryName: global => global.category_name,
        langId: global => global.lang_id,
    }


}