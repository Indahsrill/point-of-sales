import { Sequelize } from "sequelize";
import db from '../config/Database';

const {DataTypes} = Sequelize;
const kategori = db.define('kategori', {
    kode: DataTypes.STRING,
    kategori: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Product;
(async ()=> {
    await db.sync();
})()