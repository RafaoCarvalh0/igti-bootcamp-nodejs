import DeliveryRepository from "../repositories/delivery.repository.js"

async function criarPedido(pedido){
   return await DeliveryRepository.criarPedido(pedido);
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