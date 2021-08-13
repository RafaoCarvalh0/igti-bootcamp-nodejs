import { GraphQLList, GraphQLInt } from "graphql";
import Pedido from "../types/Pedido.js";
import InputPedido from "../types/InputPedido.js";
import DeliveryResolver from "../resolvers/account.resolver.js";

const deliveryQueries={
    pedidos:{
        type: new GraphQLList(InputPedido),
        resolve: ()=> DeliveryResolver.pedidos()
    },
    consultarPedido: {
        type: Pedido,
        args:{
            id:{
                name: "id",
                type: GraphQLInt
            }
        },
        resolve: (_, args)=> DeliveryResolver.consultarPedido(args.id)
    }
};

export default deliveryQueries;

/*
router.post("/criarPedido", DeliveryController.criarPedido);
router.put("/atualizarPedido", DeliveryController.atualizarPedido);
router.patch("/atualizarStatus", DeliveryController.atualizarStatus);
router.get("/consultarPedido/:id", DeliveryController.consultarPedido);
router.delete("/excluirPedido", DeliveryController.excluirPedido);
router.get("/valorTotalCliente/:data", DeliveryController.consultaVTCP);
router.get("/valorTotalProduto/:data", DeliveryController.consultaVTCP);
router.get("/maisVendidos", DeliveryController.maisVendidos);
*/