import {gql} from 'apollo-server'


export default gql`
    extend type Query {
        news: [News!]!
    }

    extend type Mutation {
        addNews(newsTitle: String!, newsBody: String!, categoryId: ID!, authorId: ID!, langId: ID!): MutationResponse!
        deleteNews(newsId: ID!): MutationResponse!
        updateNews(newsId: ID, newsTitle: String, newsBody: String, authorId:ID, views: Boolean): MutationResponse!
    }

    type News {
        newsTitle: String!
        newsBody: String!
        categoryId: ID!
        authorId: ID!
        langId: ID!
    }
`