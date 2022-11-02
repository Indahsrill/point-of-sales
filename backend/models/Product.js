import { Sequelize } from "sequelize";
import db from '../config/Database';

const {DataTypes} = Sequelize;
const Product = db.define('product', {
    kode: DataTypes.STRING,
    nama: DataTypes.STRING,
    harga: DataTypes.INTEGER,
    stok: DataTypes.INTEGER
}, {
    freezeTableName: true
});

export default Product;
(async ()=> {
    await db.sync();
})()