import { GraphQLInputObjectType, GraphQLInt, GraphQLString, GraphQLFloat, GraphQLBoolean } from "graphql";

const InputPedido = new GraphQLInputObjectType({
    name: "ConsultarPedido",
    fields: () => ({
        id: {
            type: GraphQLInt
        },
        cliente: {
            type: GraphQLString
        },
        produto: {
            type: GraphQLString
        },
        valor:{
            type: GraphQLFloat
        },
        entregue:{
            type: GraphQLBoolean
        },
        timestamp:{
            type: GraphQLString
        }
    })
});

export default InputPedido;
