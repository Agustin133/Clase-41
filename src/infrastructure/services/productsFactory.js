const bdd = require('./productMariaDbQueryService');
const mem = require('./productMemoryQueryService');
const file = require('./productFileQueryService.js');

class FactoryProducts {
    static set(option) {
        console.log(`**** PERSISTENCIA SELECCIONADA **** [${option}]`);
        switch(option) {
            case 'Memory': return mem;
            case 'File': return file;
            case 'Mysql': return bdd;
        };
    };
};

const option = process.argv[2] || 'Memory';
module.exports = FactoryProducts.set(option);
