import ServicoRepository from "../repositories/servico.repository.js";

async function createServico(servico){
    return await ServicoRepository.insertServico(servico);
}

async function getServicos(data){
    if(data){
        return await ServicoRepository.getServicoByProprietarioId(data)
    }
    return await ServicoRepository.getServicos();
}

async function getServico(data){
    return await ServicoRepository.getServico(data);
}



export default {
    createServico,
    getServicos,
    getServico
}