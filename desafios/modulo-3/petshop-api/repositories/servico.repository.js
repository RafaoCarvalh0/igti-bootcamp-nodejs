import Servicos from "../models/servico.model.js"
import Animais from "../models/animal.model.js"
import Proprietario from "../models/proprietario.model.js"

async function insertServico(servico) {
    try {
        const data = await Servicos.create(servico);
        return data;
    } catch (err) {
        throw err;
    }
}

async function getServicos() {
    try {
        const data = await Servicos.findAll();
        return data
    } catch (err) {
        throw err;
    }
}

async function getServico(id) {
    try {
        return await Servicos.findByPk(id);
    } catch (err) {
        throw err;
    }
}

async function getServicoByProprietarioId(id) {
    try {
        const  data = await Servicos.findAll({
            include:{
                model:Animais,
                where:{
                    proprietarioId: id
                }, include: {
                    model:Proprietario,
                    where:{
                        proprietarioId: id
                    }
                }
            }
        })
        return data;
    } catch (err) {
        throw err;
    }
}



export default {
    insertServico,
    getServicos,
    getServico,
    getServicoByProprietarioId
}