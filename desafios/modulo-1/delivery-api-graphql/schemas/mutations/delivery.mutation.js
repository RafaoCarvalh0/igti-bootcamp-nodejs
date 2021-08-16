import Pedido from "../types/Pedido.js";
import InputPedido from "../types/InputPedido.js";
import DeliveryResolver from "../resolvers/delivery.resolver.js";
import { GraphQLBoolean, GraphQLInt } from "graphql";

const deliveryMutation = {
    criarPedido: {
        type: Pedido,
        args: {
            pedido: {
                name: "pedido",
                type: InputPedido
            }
        },
        resolve(_, args) {
            return DeliveryResolver.criarPedido(args.pedido);
        }

    },
    atualizarPedido: {
        type: Pedido,
        args: {
            pedido: {
                name: "pedido",
                type: InputPedido
            }
        },
        resolve(_, args) {
            return DeliveryResolver.atualizarPedido(args.pedido);
        }

    },
    excluirPedido: {
        type: GraphQLBoolean,
        args: {
            id: {
                name: "id",
                type: GraphQLInt
            }
        },
        resolve(_, args) {
            DeliveryResolver.excluirPedido(args.id)
        }

    },
    atualizarStatus: {
        type: Pedido,
        args: {
            id: {
                name: "id",
                type: InputPedido
            }
        },
        resolve(_, args) {
            return DeliveryResolver.atualizarStatus(args.id)
        }
    }

}

export default deliveryMutation;

/*
router.patch("/atualizarStatus", DeliveryController.atualizarStatus);
*/