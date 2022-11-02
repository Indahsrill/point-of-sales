import { Sequelize } from "sequelize";
import db from '../config/Database';

const {DataTypes} = Sequelize;
const User = db.define('user', {
    nama: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.ENUM ('manager', 'kasir', 'owner')
}, {
    freezeTableName: true
});

export default Product;
(async ()=> {
    await db.sync();
})()