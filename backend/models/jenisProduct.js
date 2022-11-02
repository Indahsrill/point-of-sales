import { Sequelize } from "sequelize";
import db from '../config/Database';

const {DataTypes} = Sequelize;
const jenisProduct = db.define('jenis', {
    kode: DataTypes.STRING,
    jenis: DataTypes.STRING,
}, {
    freezeTableName: true
});

export default Product;
(async ()=> {
    await db.sync();
})()