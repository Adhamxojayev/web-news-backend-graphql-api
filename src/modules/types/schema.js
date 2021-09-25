import {gql} from 'apollo-server'

export default gql`
    scalar AnyData

    type MutationResponse {
        status: Int!
        message: String!
        data: AnyData
}
`