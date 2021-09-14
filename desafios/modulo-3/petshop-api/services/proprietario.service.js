import ProprietarioRepository from "../repositories/proprietario.repository.js";

async function createProprietario(proprietario){
    return await ProprietarioRepository.insertProprietario(proprietario);
}

async function getProprietarios(){
    return await ProprietarioRepository.getProprietarios();
}

async function getProprietario(id){
    return await ProprietarioRepository.getProprietario(id);
}

async function deleteProprietario(id){
    return await ProprietarioRepository.deleteProprietario(id);
}

async function updateProprietario(proprietario){
    return await ProprietarioRepository.updateProprietario(proprietario);
}

export default {
    createProprietario,
    getProprietarios,
    getProprietario,
    deleteProprietario,
    updateProprietario
}