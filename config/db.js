import sequelize, { Sequelize } from "sequelize";

const db = new Sequelize("agenciaviajes", "root", "rootroot", {
    host: "127.0.0.1",
    port: "3306",
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