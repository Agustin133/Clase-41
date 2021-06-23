
let id = 0;
class persistenciaMemory{
    static instance
    constructor(){
        if(!persistenciaMemory.instance){
            this.products = [
                {
                    id: 0,
                    title: "remera",
                    price: "2400",
                    stock: "44",
                    code: "AH4ajha4aAdf",
                    thumbnail: "foto de remera.png",
                    timestamp: "Mar 17, 2021 9:04 PM",
                    description: "Este objeto se usa para salir de joda atr"
                }
            ];
            persistenciaMemory.instance = this
        }else {
            return persistenciaMemory.instance
        };
    };

    async getProducts() {
        //traer todos
        return this.products;
    };

    async getProductById(id) {
        //traer por id
        const item = this.products.find( item => item.id == id);
        return item;
    };

    async addProducts(dataToAdd) {
        //agregar products
        id = id + 1;
        const { title, price, thumbnail, code, stock, description, timestamp } = dataToAdd;
        const item = {
        id,
        title,
        price,
        stock,
        code,
        thumbnail,
        timestamp,
        description
        };
        return this.products.push(item);
    };

    async updateProduct(dataToUpdate) {
        //actualizar prod por id
        const item = this.products.find( item => item.id == dataToUpdate.id);
        
        item.title = dataToUpdate.data.title;
        item.price = dataToUpdate.data.price;
        item.stock = dataToUpdate.data.stock;
        item.code = dataToUpdate.data.code;
        item.thumbnail = dataToUpdate.data.thumbnail;
        item.timestamp = dataToUpdate.data.timestamp;
        item.description = dataToUpdate.data.description;

        return item;
    };

    async deleteProduct(id) {
        //Eliminar prod por id
        const item = this.products.find( item => item.id == id);
        return this.products = this.products.filter( item => item.id != id);
    };
};

module.exports = new persistenciaMemory()