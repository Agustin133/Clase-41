const {options} = require('../mariaDB');
const knex = require('knex')(options);

class persistenciaBdd {
    static instance
    constructor() {
        if(!persistenciaBdd.instance){
            persistenciaBdd.instance = this
        }else {
            return persistenciaBdd.instance
        };
    };

    async getProducts() {
        //traer todos
        return await knex('product').select('*')
    };

    async getProductById(id) {
        //traer por id
        return await knex('product').select().where({id: id});
    };

    async addProducts(dataToAdd) {
        //agregar products
        return await knex('product').insert(dataToAdd);
    };

    async updateProduct(dataToUpdate) {
        //actualizar prod por id
        return await knex('product').update(dataToUpdate.data).where({id: dataToUpdate.id});
    };

    async deleteProduct(id) {
        //Eliminar prod por id
        return await knex('product').delete().where({id: id});
    };
};

module.exports = new persistenciaBdd()

