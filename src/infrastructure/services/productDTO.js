const moment = require('moment');

async function productInfo(products) {
    const info = [];
    products.forEach(product => {
        product.title = product.title.toUpperCase();
        product.price = product.price / 157
        const infoProduct = {
            id: product.id,
            fyh: moment().format('lll'),
            title: product.title,
            priceUSD: product.price,
            desctiption: product.description
        }
        info.push(infoProduct); 
    });
    return info
};

module.exports = {
    productInfo
}