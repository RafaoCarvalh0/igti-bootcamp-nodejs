import DeliveryService from "../services/delivery.service.js"

/*
{
  "nextId": 501,
  "pedidos": [
    {
      "id": 1,
      "cliente": "Lavínia Dâmaso",
      "produto": "Pizza Muçarela",
      "valor": 26,
      "entregue": true,
      "timestamp": "2021-05-02T19:48:09.765Z"
    },
    {
      "id": 2,
      "cliente": "Tália Simas",
      "produto": "Pizza Napolitana",
      "valor": 28,
      "entregue": true,
      "timestamp": "2021-05-02T19:48:09.765Z"
    },
*/

async function criarPedido(req, res, next){
    try{
        let pedido = req.body;
        if(!pedido.cliente || !pedido.produto){
            throw new Error("Dados inválidos")
        }
        pedido = await DeliveryService.criarPedido(pedido);
        res.send({pedido})
    }catch(err) {
        next(err);
    }
}

async function atualizarPedido(){
    
}

async function atualizarStatus(){
    
}

async function excluirPedido(){
    
}

async function consultarPedido(){
    
}

async function consultaVTCliente(){
    
}

async function consultaVTProduto(){
    
}

async function maisVendidos(){
    
}

export default{
    criarPedido,
    atualizarPedido,
    atualizarStatus,
    excluirPedido,
    consultarPedido,
    consultaVTCliente,
    consultaVTProduto,
    maisVendidos
}