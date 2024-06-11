const express = require('express');
const router = express.Router();
const vendedorController = require('../controllers/vendedorController');

router.get('/vendedores', vendedorController.getAllVendedores);
router.post('/vendedores', vendedorController.createVendedor);
router.put('/vendedores/:id', vendedorController.updateVendedor);
router.delete('/vendedores/:id', vendedorController.deleteVendedor);

module.exports = router; // Asegúrate de que esto esté presente


