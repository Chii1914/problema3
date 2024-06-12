const express = require('express');
const app = express();
const sequelize = require('./config/database');
const morgan = require('morgan');
// Importar rutas
const vendedorRoutes = require('./routes/vendedorRoutes');
const compradorRoutes = require('./routes/compradorRoutes');
const productoRoutes = require('./routes/productoRoutes');

app.use(express.json());

// Usar rutas
app.use(morgan('tiny'));

app.use('/api/vendedores', vendedorRoutes);
app.use('/api/compradores', compradorRoutes);
app.use('/api/productos', productoRoutes);

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
  res.render('index', { title: 'My EJS Page', message: 'Hello, EJS!' });
});
const PORT = process.env.PORT || 6969;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


