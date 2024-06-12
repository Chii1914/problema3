const express = require('express');
const router = express.Router();
const tipoproducto = require('../controllers/tipoProductoController');

router.get('/', tipoproducto.getAllProductos);
router.post('/', tipoproducto.createProducto);
router.put('/:id', tipoproducto.updateProducto);
router.delete('/:id', tipoproducto.deleteProducto);

module.exports = router;
