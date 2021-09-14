import Sequelize from "sequelize";
import db from "../repositories/db.js";

const Proprietario = db.define("proprietario", {
    proprietarioId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    underscored: true,
    freezeTableName: true
});

export default Proprietario