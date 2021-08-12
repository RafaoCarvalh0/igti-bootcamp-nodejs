import { promises as fs } from "fs";
const { readFile, writeFile } = fs;

async function carregarPedidos(){
    const data = JSON.parse(await readFile(fileName));
    return data.pedidos;
};

async function criarPedido(pedido){
    const data = await carregarPedidos();
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

async function atualizarPedido(pedido){
    const data = JSON.parse(await readFile(fileName));
    const index = data.pedidos.findIndex(
        a => a.id === pedido.id
    );

    if(index === -1){
        throw new Error("Pedido nao encontrado");
    }

    data.pedidos[index].cliente = pedido.cliente;
    data.pedidos[index].produto = pedido.produto;
    data.pedidos[index].valor = pedido.valor;
    data.pedidos[index].entregue = pedido.entregue;

    await writeFile(fileName, JSON.stringify(data));
    return data.pedidos[index];
    
}

async function excluirPedido(data){

    const pedido =  JSON.parse(await readFile(fileName));
    pedido.pedidos = pedido.pedidos.filter(
        pd => pd.id !== parseInt(data)
    );
    if(pedido){
        await writeFile(fileName, JSON.stringify(pedido));
    }else{
        throw new Error("Pedido nao encontrado");
    }
}

async function consultarPedido(data){
    const pedidos = await carregarPedidos();
    const pedido = pedidos.find(
        p => p.id == data
    )

    if(pedido){
        return pedido;
    }else{
        throw new Error("Pedido nao encontrado");
    }
    
}

async function consultaVTCliente(data){
    const pedidos = await carregarPedidos();
    //pedidos = data.pedidos
    let pedidosCliente = pedidos.filter(
        p => p.cliente === data && p.entregue === true
    );
    
    if(pedidosCliente){
        let valorTotal = 0;
        for (let i in pedidosCliente){
            valorTotal = valorTotal + pedidosCliente[i].valor
        }

       return pedidosCliente = {
            "nomeCliente": data,
            "valorTotalGasto": valorTotal
        }

    }else{
        throw new Error("Cliente Nao encontrado");
    }

}

async function consultaVTProduto(){
    
}

async function maisVendidos(){
    
}

async function sortOrder(data) {
    return function (a, b) {
        if (a[data] > b[data]) {
            return 1;
        } else if (a[data] < b[data]) {
            return -1;
        }
        return 0;
    }
}

export default{
    criarPedido,
    atualizarPedido,
    excluirPedido,
    consultarPedido,
    consultaVTCliente,
    consultaVTProduto,
    maisVendidos,
    carregarPedidos
}