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
exports.deletePurchase = exports.updatePurchase = exports.createPurchase = exports.getPurchaseById = exports.getPurchases = void 0;
const db_1 = require("../db");
const Purchase_1 = require("../entities/Purchase");
function getPurchases(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const purchases = yield db_1.AppDataSource.manager.find(Purchase_1.Purchase);
            return res.json(purchases);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.getPurchases = getPurchases;
function getPurchaseById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const purchaseId = parseInt(id, 10);
            const purchase = yield db_1.AppDataSource.manager.findOne(Purchase_1.Purchase, { where: { id: purchaseId } });
            if (purchase) {
                return res.json(purchase);
            }
            else {
                return res.status(404).json({ message: 'Compra no encontrada.' });
            }
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.getPurchaseById = getPurchaseById;
function createPurchase(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newPurchase = yield db_1.AppDataSource.manager.save(Purchase_1.Purchase, req.body);
            return res.status(201).json(newPurchase);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.createPurchase = createPurchase;
function updatePurchase(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const purchaseId = parseInt(id, 10);
            const purchase = yield db_1.AppDataSource.manager.findOne(Purchase_1.Purchase, { where: { id: purchaseId } });
            if (!purchase) {
                return res.status(404).json({ message: 'Compra no encontrada.' });
            }
            const updatedPurchase = yield db_1.AppDataSource.manager.save(Purchase_1.Purchase, Object.assign(Object.assign({}, purchase), req.body));
            return res.status(200).json(updatedPurchase);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.updatePurchase = updatePurchase;
function deletePurchase(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: 'ID parameter is required.' });
        }
        try {
            const purchaseId = parseInt(id, 10);
            const purchase = yield db_1.AppDataSource.manager.findOne(Purchase_1.Purchase, { where: { id: purchaseId } });
            if (!purchase) {
                return res.status(404).json({ message: 'Compra no encontrada.' });
            }
            yield db_1.AppDataSource.manager.remove(Purchase_1.Purchase, purchase);
            return res.status(200).json({ message: 'Compra eliminada correctamente.' });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error });
        }
    });
}
exports.deletePurchase = deletePurchase;
