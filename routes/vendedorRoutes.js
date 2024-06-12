const express = require('express');
const router = express.Router();
const vendedorController = require('../controllers/vendedorController');

router.get('/', vendedorController.getAllVendedores);
router.post('/', vendedorController.createVendedor);
router.put('/:id', vendedorController.updateVendedor);
router.delete('/:id', vendedorController.deleteVendedor);

module.exports = router; // Asegúrate de que esto esté presente


