const { response } = require("express");
const moment = require('moment');
const model = require('../infrastructure/services/productsFactory');
const dto = require('../infrastructure/services/productDTO');

async function getProductById(id) {
    const response = model.getProductById(id);
    return response;
};

async function getAll() {
    const response = model.getProducts();
    return response;
};

async function addProduct(body) {
    let timestamp = moment().format('lll');
    const { title, price, thumbnail, code, stock, description } = body;
    const item = {
        title,
        price,
        stock,
        code,
        thumbnail,
        timestamp,
        description
    }
    try {
        model.addProducts(item);
        return 'Product added successfully';
    } catch (err) {
        return err;
    }
};

async function update(id,body) {
    try{
        let timestamp = moment().format('lll');
        body = {
            title: body.title,
            price: body.price,
            stock: body.stock,
            code: body.code,
            thumbnail: body.thumbnail,
            timestamp: timestamp,
            description: body.description
        };
        const dataToUpdate = {data: body, id: id};
        model.updateProduct(dataToUpdate);
        return 'Product uploaded successfully';
    }catch(err){
        return err;
    };
};

async function deleteProduct(id) {
    try{
        model.deleteProduct(id);
        return 'Product deleted successfully';
    }catch(err){
        return err;
    };
};

async function getDto () {
    const products = await model.getProducts();
    const response = await dto.productInfo(products);
    return response;
};

async function getDtoById(id) {
    const products = await model.getProductById(id);
    const response = await dto.productInfo(products);
    return response;
}

module.exports = {
    getProductById,
    getAll,
    addProduct,
    update,
    deleteProduct,
    getDto,
    getDtoById
}