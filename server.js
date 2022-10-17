const express = require('express');
const app = express();
const PORT = 4000;
const methodOverride = require('method-override')
const productRoutes = require('./routes/productRoutes');
//
// const Product = require('./models/products');
//
const path = require('path');

// require db connection
require('./db/connection');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/products', productRoutes);

app.listen(PORT, () => {
    console.log(`✅ listening on port: ${PORT} 🌟`);
})