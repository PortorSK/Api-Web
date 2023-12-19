"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = require("./db");
const app_1 = __importDefault(require("./app"));
app_1.default.use(express_1.default.json());
db_1.AppDataSource.initialize()
    .then(() => {
    console.log('Data Source has been initialized');
    console.log('aisjdoajs');
    app_1.default.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
    .catch((err) => {
    console.error('Error during Data Source initialization:', err);
});
