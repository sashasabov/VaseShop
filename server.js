const express = require('express');
const app = express();
const PORT = 3000;
const productRoutes = require('./routes/productRoutes');
const Product = require('./models/products');
const path = require('path');
// const Product = require('')

// require db connection
require('./db/connection');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
// app.use(Product)
app.use('/products', productRoutes);

app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))


app.listen(PORT, () => {
    console.log(`✅ listening on port: ${PORT} 🌟`);
})