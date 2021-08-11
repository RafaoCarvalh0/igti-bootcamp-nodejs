import { GraphQLObjectType, GraphQLSchema } from "graphql"
import AccountQuery from "./queries/account.query.js"

const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields: {
            ...AccountQuery,
        }
    }),
    mutation: null
});

export default Schema;