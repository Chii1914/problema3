const express = require('express');
const router = express.Router();
const productoController = require('../controllers/productoController');

router.get('/productos', productoController.getAllProductos);
router.post('/productos', productoController.createProducto);
router.put('/productos/:id', productoController.updateProducto);
router.delete('/productos/:id', productoController.deleteProducto);

module.exports = router;
