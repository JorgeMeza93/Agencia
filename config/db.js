import sequelize, { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config({ path:"variables.env"})
const db = new Sequelize(process.env.BD_NOMBRE, process.env.BD_USER, process.env.BD_PASS, {
    host: process.env.BD_HOST,
    port: process.env.BD_PORT,
    dialect: "mysql",
    define: {
        timestamps: false,   // <-- evita que se creen columnas que contengan datos cuando fue creado y modificado un registro
    },
    poo: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

export default db;