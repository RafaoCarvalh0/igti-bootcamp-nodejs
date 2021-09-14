import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Animal from "./animal.model.js";

const Servicos = db.define("servicos", {
    servicoId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    valor:{
        type: Sequelize.DOUBLE,
        allowNull: false
    },
    animal_id:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {
    underscored: true,
    freezeTableName: true
});

Servicos.belongsTo(Animal, { foreignKey: "animalId" });

export default Servicos;