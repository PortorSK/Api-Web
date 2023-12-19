"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
(0, typeorm_1.createConnection)().then(() => {
    console.log('Conexión a la base de datos exitosa');
}).catch(error => console.log('Error al conectar a la base de datos:', error));
