const express = require('express');
const app = express();
const sequelize = require('./config/database');
const morgan = require('morgan');
const axios = require('axios');
// Importar rutas
const vendedorRoutes = require('./routes/vendedorRoutes');
const compradorRoutes = require('./routes/compradorRoutes');
const productoRoutes = require('./routes/productoRoutes');
const tipoproductoRoutes = require('./routes/tipoProductoRoutes');


app.use(express.json());

// Usar rutas
app.use(morgan('tiny'));

app.use('/api/vendedores', vendedorRoutes);
app.use('/api/compradores', compradorRoutes);
app.use('/api/productos', productoRoutes);
app.use('/api/tipoProducto', tipoproductoRoutes);


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.get('/', (req, res) => {
  res.render('index', { title: 'My EJS Page', message: 'Hello, EJS!' });
});
app.get('/productos', async (req, res) => {
  try {
    const [productosResponse, compradoresResponse, vendedoresResponse, tipoProductoResponse] = await Promise.all([
      axios.get(`http://localhost:${PORT}/api/productos`),
      axios.get(`http://localhost:${PORT}/api/compradores`),
      axios.get(`http://localhost:${PORT}/api/vendedores`),
      axios.get(`http://localhost:${PORT}/api/tipoProducto`)
    ]);

    const productos = productosResponse.data;
    const compradores = compradoresResponse.data;
    const vendedores = vendedoresResponse.data;
    const tipoProductos = tipoProductoResponse.data;

    // Join productos with compradores, vendedores, and tipoProductos
    const productosConNombresYDescripcion = productos.map(producto => {
      const comprador = compradores.find(c => c.idComprador === producto.idComprador);
      const vendedor = vendedores.find(v => v.numeroVendedor === producto.numeroVendedor);
      const tipoProducto = tipoProductos.find(t => t.idTipoProducto === producto.idTipoProducto);
      return {
        ...producto,
        nombreComprador: comprador ? comprador.nombreComprador : 'Unknown',
        nombreVendedor: vendedor ? vendedor.nombreVendedor : 'Unknown',
        descripcionProducto: tipoProducto ? tipoProducto.descripcionProducto : 'Unknown'
      };
    });

    res.render('productos', { productos: productosConNombresYDescripcion });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching data');
  }
});
const PORT = process.env.PORT || 6969;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});


