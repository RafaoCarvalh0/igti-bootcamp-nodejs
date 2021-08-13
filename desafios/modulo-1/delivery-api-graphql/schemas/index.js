import { GraphQLSchema, GraphQLObjectType }  from "graphql";
import DeliveryQuery from "./queries/delivery.queries.js";
import DeliveryMutation from "./mutations/delivery.mutation.js"

const Schema = new GraphQLSchema({
    types: null,
    query: new GraphQLObjectType({
        name: "RootQueryType",
        fields:{
            ...DeliveryQuery
        }
    }),
    mutations: new GraphQLObjectType({
        name: "RootMutation",
        fields:{
            ...DeliveryMutation
        }
    })
});

export default Schema;