import DeliveryRepository from "../repositories/delivery.repository.js"

async function criarPedido(pedido){
   return await DeliveryRepository.criarPedido(pedido);
}

async function atualizarPedido(pedido){
    return await DeliveryRepository.atualizarPedido(pedido);
}

async function atualizarStatus(pedido){
    const pd = await DeliveryRepository.consultarPedido(pedido.id);
    pd.entregue = pedido.entregue;
    return await DeliveryRepository.atualizarPedido(pd);
}

async function excluirPedido(pedido){
    return await DeliveryRepository.excluirPedido(pedido);
}

async function consultarPedido(pedido){
    return await DeliveryRepository.consultarPedido(pedido);
}

async function consultaVTCliente(cliente){
    return await DeliveryRepository.consultaVTCliente(cliente);
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