import {gql} from 'apollo-server'


export default gql`
    extend type Query {
        categories: [Category!]!
    }

    extend type Mutation {
        addCategory(categoryName: String!, langId: ID!): MutationResponse!  
        deleteCategory(categoryId: ID!): MutationResponse!
        updateCategory(categoryId: ID, categoryName: String!): MutationResponse!
    }

    type Category {
        categoryId: ID!
        categoryName: String!
        langId: ID!
    }
`