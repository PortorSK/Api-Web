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
exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProductById = exports.getProducts = void 0;
const db_1 = require("../db");
const Product_1 = require("../entities/Product");
function getProducts(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const Products = yield db_1.AppDataSource.manager.find(Product_1.products);
            return res.json(Products);
        }
        catch (error) {
            console.error('Error al obtener los productos:', error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.getProducts = getProducts;
function getProductById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const productId = parseInt(id, 10);
            const product = yield db_1.AppDataSource.manager.findOne(Product_1.products, { where: { id: productId } });
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado.' });
            }
            return res.json(product);
        }
        catch (error) {
            console.error('Error al obtener el producto:', error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.getProductById = getProductById;
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const newProduct = db_1.AppDataSource.manager.create(Product_1.products, req.body);
        try {
            const product = yield db_1.AppDataSource.manager.save(newProduct);
            return res.status(201).json({ message: 'Producto creado correctamente', product });
        }
        catch (error) {
            console.error('Error al crear el producto:', error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.createProduct = createProduct;
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const productId = parseInt(id, 10);
            const product = yield db_1.AppDataSource.manager.findOne(Product_1.products, { where: { id: productId } });
            if (!product) {
                return res.status(404).json({ message: 'Producto no encontrado.' });
            }
            db_1.AppDataSource.manager.merge(Product_1.products, product, req.body);
            const updatedProduct = yield db_1.AppDataSource.manager.save(product);
            return res.json({ message: 'Producto actualizado correctamente', product: updatedProduct });
        }
        catch (error) {
            console.error('Error al actualizar el producto:', error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.updateProduct = updateProduct;
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const productId = parseInt(id, 10);
            const deleteResult = yield db_1.AppDataSource.manager.delete(Product_1.products, productId);
            if (deleteResult.affected === 0) {
                return res.status(404).json({ message: 'Producto no encontrado.' });
            }
            return res.json({ message: 'Producto eliminado correctamente' });
        }
        catch (error) {
            console.error('Error al eliminar el producto:', error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.deleteProduct = deleteProduct;
