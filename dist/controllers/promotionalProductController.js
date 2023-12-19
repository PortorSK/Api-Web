"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePromotionalProduct = exports.updatePromotionalProduct = exports.createPromotionalProduct = exports.getPromotionalProductById = exports.getPromotionalProducts = void 0;
const db_1 = require("../db");
const PromotionalProduct_1 = require("../entities/PromotionalProduct");
function getPromotionalProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const promotionalProductsList = yield db_1.AppDataSource.manager.find(PromotionalProduct_1.PromotionalProduct);
            return res.json(promotionalProductsList);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.getPromotionalProducts = getPromotionalProducts;
function getPromotionalProductById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const promotionalProductId = parseInt(id, 10);
            const promotionalProduct = yield db_1.AppDataSource.manager.findOne(PromotionalProduct_1.PromotionalProduct, { where: { id: promotionalProductId } });
            if (promotionalProduct) {
                return res.json(promotionalProduct);
            }
            else {
                return res.status(404).json({ message: 'Producto en promoción no encontrado.' });
            }
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.getPromotionalProductById = getPromotionalProductById;
function createPromotionalProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const promotionalProductData = req.body;
        try {
            const newPromotionalProduct = new PromotionalProduct_1.PromotionalProduct();
            Object.assign(newPromotionalProduct, promotionalProductData);
            const promotionalProduct = yield db_1.AppDataSource.manager.save(newPromotionalProduct);
            return res.status(201).json(promotionalProduct);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.createPromotionalProduct = createPromotionalProduct;
function updatePromotionalProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const promotionalProductData = req.body;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const promotionalProductId = parseInt(id, 10);
            const promotionalProduct = yield db_1.AppDataSource.manager.findOne(PromotionalProduct_1.PromotionalProduct, { where: { id: promotionalProductId } });
            if (!promotionalProduct) {
                return res.status(404).json({ message: 'Producto en promoción no encontrado.' });
            }
            Object.assign(promotionalProduct, promotionalProductData);
            yield db_1.AppDataSource.manager.save(promotionalProduct);
            return res.json(promotionalProduct);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.updatePromotionalProduct = updatePromotionalProduct;
function deletePromotionalProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const promotionalProductId = parseInt(id, 10);
            const promotionalProduct = yield db_1.AppDataSource.manager.findOne(PromotionalProduct_1.PromotionalProduct, { where: { id: promotionalProductId } });
            if (!promotionalProduct) {
                return res.status(404).json({ message: 'Producto en promoción no encontrado.' });
            }
            yield db_1.AppDataSource.manager.remove(promotionalProduct);
            return res.json({ message: 'Producto en promoción eliminado correctamente' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.deletePromotionalProduct = deletePromotionalProduct;
