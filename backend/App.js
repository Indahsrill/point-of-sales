const express = require ('express');
const sequelize = require ('sequelize');
const app = express();
const ProductsRoute = require ('./routes/ProductsRoute');

app.use('/api', ProductsRoute)
app.listen(3000, () => {
    console.log('Server berjalan...');
});
