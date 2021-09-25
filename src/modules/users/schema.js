import {gql} from 'apollo-server'


export default gql`
    extend type Query {
        users: [Users!]!
    }

    type Mutation {
        register(firstName: String! lastName: String! email: String! password: String! specialist: String!): MutationResponse!
        login(password: String! email: String!): MutationResponse!
    }

    type Users {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
        specialist: String!
    }
`