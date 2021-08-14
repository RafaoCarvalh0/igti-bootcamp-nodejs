import { GraphQLList, GraphQLInt, GraphQLString, GraphQLFloat } from "graphql";
import DeliveryResolver from "../resolvers/delivery.resolver.js";
import Pedido from "../types/Pedido.js";


const deliveryQueries = {
    pedidos: {
        type: new GraphQLList(Pedido),
        resolve: () => DeliveryResolver.pedidos()
    },
    maisVendidos:{
        type: new GraphQLList(Pedido),
        resolve: () => DeliveryResolver.maisVendidos()
    },
    consultarPedido: {
        type: Pedido,
        args: {
            id: {
                name: "id",
                type: GraphQLInt
            }
        },
        resolve: (_, args) => DeliveryResolver.consultarPedido(args.id)
    },
    valorTotalCliente: {
        type: Pedido,
        args: {
            cliente: {
                name: "cliente",
                type: GraphQLString
            }
        },
        resolve: (_, args) => DeliveryResolver.consultaVTCP(args.cliente)
    },
    valorTotalProduto: {
        type: Pedido,
        args:{
            produto:{
                name: "produto",
                type: GraphQLString
            }
        },
        resolve: (_, args) => DeliveryResolver.consultaVTCP(args.produto)

    }

};

export default deliveryQueries;

