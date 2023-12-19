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
exports.PurchaseService = void 0;
// PurchaseService.ts
const typeorm_1 = require("typeorm");
const Purchase_1 = require("../entities/Purchase");
class PurchaseService {
    constructor() {
        this.purchaseRepository = (0, typeorm_1.getRepository)(Purchase_1.Purchase);
    }
    getPurchaseById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const purchase = yield this.purchaseRepository.findOne({ where: { id } });
            return purchase || null;
        });
    }
    // Puedes agregar más funciones del servicio aquí según tus necesidades
    // Ejemplo de otra función para obtener todas las compras
    getAllPurchases() {
        return __awaiter(this, void 0, void 0, function* () {
            const purchases = yield this.purchaseRepository.find();
            return purchases;
        });
    }
    // Ejemplo de función para crear una compra
    createPurchase(newPurchaseData) {
        return __awaiter(this, void 0, void 0, function* () {
            const newPurchase = this.purchaseRepository.create(newPurchaseData);
            const savedPurchase = yield this.purchaseRepository.save(newPurchase);
            return savedPurchase;
        });
    }
}
exports.PurchaseService = PurchaseService;
