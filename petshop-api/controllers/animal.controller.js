import AnimalService from "../services/animal.service.js";

//controller is responsible for all the validations

async function createAnimal(req, res, next) {
    try {
        let animal = req.body;
        if (!animal.name || !animal.type || !animal.proprietario_id ) {
            throw new Error("All data needed");
        }
        res.send(await AnimalService.createAnimal(animal));
        logger.info(`POST /animal - ${JSON.stringify(animal)}`);

    } catch (err) {
        next(err);
    }

}

async function getAnimals(req, res, next){
    try{
        res.send(await AnimalService.getAnimals(req.query.proprietario_id));
        logger.info(`GET /animals`);
    }catch(err){
       next(err); 
    }

}

async function getAnimal(req, res, next){
    try{
        res.send(await AnimalService.getAnimal(req.params.id));
        logger.info(`GET /animal`);
    }catch(err){
       next(err); 
    }
}

async function deleteAnimal(req, res, next){
    try{
        await AnimalService.deleteAnimal(req.params.id)
        res.end();
        logger.info(`DELETE /animal`);
    }catch(err){
       next(err); 
    }
}

async function updateAnimal(req, res, next){
    try{
        let animal = req.body;
        if (!animal.animal_id || !animal.name || !animal.type || !animal.proprietario_id) {
            throw new Error("All data needed");
        }
        animal = await AnimalService.updateAnimal(animal);
        res.send(animal);
        logger.info(`PUT /animal - ${JSON.stringify(animal)}`);
    }catch(err){
       next(err); 
    }
}

export default {
    createAnimal,
    getAnimals,
    getAnimal,
    deleteAnimal,
    updateAnimal
}