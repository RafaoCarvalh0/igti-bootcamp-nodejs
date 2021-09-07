import ProprietarioService from "../services/proprietario.service.js";

//controller is responsible for all the validations

async function createProprietario(req, res, next) {
    try {
        let proprietario = req.body;
        if (!proprietario.name || !proprietario.phone) {
            throw new Error("All data needed");
        }
        res.send(await ProprietarioService.createProprietario(proprietario));
        logger.info(`POST /proprietario - ${JSON.stringify(proprietario)}`);

    } catch (err) {
        next(err);
    }

}

async function getProprietarios(req, res, next){
    try{
        res.send(await ProprietarioService.getProprietarios());
        logger.info(`GET /proprietarios`);
    }catch(err){
       next(err); 
    }

}

async function getProprietario(req, res, next){
    try{
        res.send(await ProprietarioService.getProprietario(req.params.id));
        logger.info(`GET /proprietario`);
    }catch(err){
       next(err); 
    }
}

async function deleteProprietario(req, res, next){
    try{
        await ProprietarioService.deleteProprietario(req.params.id)
        res.end();
        logger.info(`DELETE /proprietario`);
    }catch(err){
       next(err); 
    }
}

async function updateProprietario(req, res, next){
    try{
        let proprietario = req.body;
        if (!proprietario.proprietario_id || !proprietario.name || !proprietario.phone) {
            throw new Error("All data needed");
        }
        proprietario = await ProprietarioService.updateProprietario(proprietario);
        res.send(proprietario);
        logger.info(`PUT /proprietario - ${JSON.stringify(proprietario)}`);
    }catch(err){
       next(err); 
    }
}

export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
    updateProprietario
}