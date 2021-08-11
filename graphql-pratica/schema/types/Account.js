import { GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLFloat } from "graphql";

const Account = new GraphQLObjectType({
    name: "Accout",
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        name:{
            type: GraphQLString
        },
        balance:{
            type: GraphQLFloat
        }
    })
});

export default Account;