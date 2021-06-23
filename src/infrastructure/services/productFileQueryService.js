const fs = require('fs');

let id = 0;
 class persistenciaFile {
    static instance
    constructor() {
        if(!persistenciaFile.instance){
            ;( async () => {
                try {
                    await fs.promises.readFile('datos.txt')
                }
                catch {
                    await fs.promises.writeFile('datos.txt', JSON.stringify([]))
                }
            })()
            persistenciaFile.instance = this
        }else {
            return persistenciaFile.instance
        };
    };

    async getProducts() {
        //traer todos
        let products = await fs.promises.readFile('datos.txt');
        return JSON.parse(products);
    };

    async getProductById(id) {
        //traer por id
        let product = JSON.parse(await fs.promises.readFile('datos.txt'));
        const item = product.find( item => item.id == id);
        return item;
    };

    async addProducts(dataToAdd) {
        //agregar products
        id = id + 1;
        let product = JSON.parse(await fs.promises.readFile('datos.txt'));
        const dataToadd = {
            id: id,
            title: dataToAdd.title,
            price: dataToAdd.price,
            stock: dataToAdd.stock,
            code: dataToAdd.code,
            thumbnail: dataToAdd.thumbnail,
            timestamp: dataToAdd.timestamp,
            description: dataToAdd.description,
        };
        product.push(dataToadd);
        return await fs.promises.writeFile('datos.txt', JSON.stringify(product));
    };

    async updateProduct(dataToUpdate) {
        //actualizar prod por id
        let product = JSON.parse(await fs.promises.readFile('datos.txt'));
        let item  = product.find( item => item.id == dataToUpdate.id);
        let id = parseInt(dataToUpdate.id);
        let dataUpdated = {
            id: id,
            title: dataToUpdate.data.title,
            price: dataToUpdate.data.price,
            stock: dataToUpdate.data.stock,
            code: dataToUpdate.data.code,
            thumbnail: dataToUpdate.data.thumbnail,
            timestamp: dataToUpdate.data.timestamp,
            description: dataToUpdate.data.description
        };
        item = dataUpdated;
        let products = product.filter( item => item.id != id);
        products.push(item)
        return await fs.promises.writeFile('datos.txt', JSON.stringify(products));
    };

    async deleteProduct(id) {
        //Eliminar prod por id
        let product = JSON.parse(await fs.promises.readFile('datos.txt'));
        let products = product.filter( item => item.id != id);
        return await fs.promises.writeFile('datos.txt', JSON.stringify(products));
    };
};

module.exports = new persistenciaFile();
