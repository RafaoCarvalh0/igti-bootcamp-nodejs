import dotenv from "dotenv";
dotenv.config()
import Sequelize from "sequelize";


const sequelize = new Sequelize(
    `mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {
        dialect: "mysql",
        define: {
            timestamps: false
        }
    }
);

export default sequelize;