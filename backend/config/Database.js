import { Sequelize } from "sequelize";
const db = new Sequelize('PointOfSales', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db;
