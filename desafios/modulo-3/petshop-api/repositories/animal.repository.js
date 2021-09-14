import Animal from "../models/animal.model.js";

async function insertAnimal(animal) {

    try {
        return await Animal.create(animal);
    } catch (err) {
        throw err;
    }
}

async function getAnimals() {
    try {
        return await Animal.findAll();
    } catch (err) {
        throw err;
    }
}

async function getAnimalsByProprietarioId(proprietarioId) {
    try {
        return await Animal.findAll({
            where: {
                proprietarioId
            }
        });
    } catch (err) {
        throw err;
    }
}

async function getAnimal(animalId) {
    try {
        return await Animal.findAll({
            where: {
                animalId
            }
        });
    } catch (err) {
        throw err;
    }
}

async function deleteAnimal(animalId) {
    try {
        return await Animal.destroy({
            where: {
                animalId
            }
        });
    } catch (err) {
        throw err;
    }
}

async function updateAnimal(animal) {
    try {
        return await Animal.update(animal,{
            where: {
                animalId: animal.animal_id
            }
        });
    } catch (err) {
        throw err;
    }
}


export default {
    insertAnimal,
    getAnimals,
    getAnimal,
    updateAnimal,
    deleteAnimal,
    updateAnimal,
    getAnimalsByProprietarioId
}