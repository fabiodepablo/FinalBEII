const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const productRoutes = require('./routes/product.router');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../public')));

// Conexión a la base de datos
mongoose
    .connect('mongodb://localhost:27017/ticketsDB', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.error('Error al conectar a la base de datos:', error));

// Rutas
app.use('/api/products', productRoutes);

// Ruta para redirigir al archivo login.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/login.html'));
});

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
