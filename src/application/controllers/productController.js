const productService = require('../../domain/productService');

async function getById(req, res) {
    const id = req.params.id;
    const response = await productService.getProductById(id);
    res.json(response);
}

async function getAll(req, res) {
    const response = await productService.getAll();
    res.json(response);
}

async function addProduct(req,res) {
    const body = req.body;
    const response = await productService.addProduct(body);
    res.json(response);
}

async function update(req,res) {
    const id = req.params.id;
    const body = req.body;
    const response = await productService.update(id,body);
    res.json(response);
}

async function deleteProduct(req,res) {
    const id = req.params.id;
    const response = await productService.deleteProduct(id);
    res.json(response);
}

async function getDto(req, res) {
    const response = await productService.getDto();
    res.json(response);
}

async function getDtoById(req, res) {
    const id = req.params.id;
    const response = await productService.getDtoById(id);
    res.json(response);
}

module.exports = {
    getById,
    getAll,
    addProduct,
    update,
    deleteProduct,
    getDto,
    getDtoById
}