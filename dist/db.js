"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const user_1 = require("./entities/user"); // Ajusta la ruta según tu estructura de carpetas
const Product_1 = require("./entities/Product"); // Ajusta la ruta según tu estructura de carpetas
const PromotionalProduct_1 = require("./entities/PromotionalProduct"); // Ajusta la ruta según tu estructura de carpetas
const Purchase_1 = require("./entities/Purchase"); // Ajusta la ruta según tu estructura de carpetas
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'mysql',
    host: '18.227.46.136',
    username: 'papu',
    password: 'papuman',
    database: 'farmacos',
    port: 3306,
    entities: [user_1.users, Product_1.products, PromotionalProduct_1.PromotionalProduct, Purchase_1.Purchase], // Agrega la entidad User aquí
    logging: true,
    synchronize: true,
});
