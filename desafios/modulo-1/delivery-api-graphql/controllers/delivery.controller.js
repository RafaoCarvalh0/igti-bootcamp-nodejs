import DeliveryService from "../schemas/resolvers/account.resolver.js"


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

async function atualizarPedido(req, res, next){
    try{
        const pedido = req.body;
        if (!pedido.id || !pedido.cliente || !pedido.produto || pedido.valor == null) {
            throw new Error("ID, Cliente, produto ou valor sao invalidos");
        }
        res.send(await DeliveryService.atualizarPedido(pedido));
    }catch(err){
        next(err);
    }   
}

async function atualizarStatus(req, res, next){
    try{
        const pedido = req.body;

        if (!pedido.id || pedido.entregue == undefined) {
            throw new Error("Id ou status de entrega incorretos");
        }
        
        res.send(await DeliveryService.atualizarStatus(pedido));

    }catch(err){
        next(err);
    }    
}

async function excluirPedido(req, res, next){
    try{
        await DeliveryService.excluirPedido(req.body.id);
        res.end();
    }catch(err){
        next(err);
    }
}

async function consultarPedido(req, res, next){
    try{
        if (!req.params.id){
            throw new Error("Pedido nao encontrado");
        }
        res.send(await DeliveryService.consultarPedido(req.params.id));
    }catch(err){
        next(err);
    }
}

async function consultaVTCP(req, res, next){
    try{
        res.send(await DeliveryService.consultaVTCP(req.params.data));
    }catch(err){
        next(err);
    }
}

async function maisVendidos(req, res, next){
    try{
        res.send(await DeliveryService.maisVendidos());
    }catch(err){
        next(err);
    }
}

export default{
    criarPedido,
    atualizarPedido,
    atualizarStatus,
    excluirPedido,
    consultarPedido,
    consultaVTCP,
    maisVendidos
}