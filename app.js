const express = require('express');
const app = express();
const sequelize = require('./config/database');

// Importar rutas
const vendedorRoutes = require('./routes/vendedorRoutes');
//const compradorRoutes = require('./routes/compradorRoutes');
const productoRoutes = require('./routes/productoRoutes');

app.use(express.json());

// Usar rutas
app.use('/api/vendedores', vendedorRoutes);
//app.use('/api/compradores', compradorRoutes);
app.use('/api/productos', productoRoutes);

app.set('view engine', 'ejs');

const PORT = process.env.PORT || 3000;

sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


