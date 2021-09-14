import ServicoService from "../services/servico.service.js";

//controller is responsible for all the validations

async function createServico(req, res, next) {
    try {
        let servico = req.body;
        if (!servico.descricao || !servico.valor || !servico.animal_id) {
            throw new Error("All data needed");
        }
        res.send(await ServicoService.createServico(servico));
        logger.info(`${req.method} /servico - ${JSON.stringify(servico)}`);

    } catch (err) {
        next(err);
    }

}

async function getServicos(req, res, next){
    try{
        if(req.query.proprietario_id){
            res.send(await ServicoService.getServicos(req.query.proprietario_id));
        }else{
            res.send(await ServicoService.getServicos());
            logger.info(`${req.method} /servicos`);
        }
        
    }catch(err){
       next(err); 
    }

}

async function getServico(req, res, next){
    try{
        res.send(await ServicoService.getServicos(req.params.servico_id));
        logger.info(`${req.method} /servico`);
    }catch(err){
       next(err); 
    }
}

export default {
    createServico,
    getServicos,
    getServico,
   
}