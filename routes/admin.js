const path = require('path');

const express = require('express');

const productController=require('../controllers/productsController');

const router = express.Router();

// /admin/add-product => GET
router.get('/add-product',productController.getAddProduct);

// /admin/add-product => POST
router.post('/add-product',productController.postAddProduct);

exports.routes = router;
