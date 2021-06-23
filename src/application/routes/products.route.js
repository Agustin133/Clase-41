const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router  
    .route('/dto').get(productController.getDto);

router
    .route('/:id').get(productController.getById);

router  
    .route('/:id/dto').get(productController.getDtoById);

router
    .route('/').get(productController.getAll);

router
    .route('/').post(productController.addProduct);

router
    .route('/:id').put(productController.update);

router
    .route('/:id').delete(productController.deleteProduct);



module.exports = router;