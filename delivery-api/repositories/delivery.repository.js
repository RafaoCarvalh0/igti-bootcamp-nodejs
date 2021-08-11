import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function criarPedido(pedido){
    const data = JSON.parse(await readFile(fileName))

    pedido = {
        id: data.nextId++,
        cliente: pedido.cliente,
        produto: pedido.produto,
        valor: pedido.valor,
        entregue: false,
        timestamp: new Date()
    }

    data.pedidos.push(pedido);
    
    await writeFile(fileName, JSON.stringify(data, null, 2));

    return pedido;
}

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
*/

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