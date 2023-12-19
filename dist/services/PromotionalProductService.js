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
exports.promotionalProductService = void 0;
// promotionalProductService.ts
const typeorm_1 = require("typeorm");
const PromotionalProduct_1 = require("../entities/PromotionalProduct");
class PromotionalProductService {
    getAllPromotionalProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const promotionalProductRepository = (0, typeorm_1.getRepository)(PromotionalProduct_1.PromotionalProduct);
            return yield promotionalProductRepository.find();
        });
    }
    getPromotionalProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotionalProductRepository = (0, typeorm_1.getRepository)(PromotionalProduct_1.PromotionalProduct);
            return (yield promotionalProductRepository.findOne({ where: { id } })) || null;
        });
    }
    createPromotionalProduct(promotionalProductData) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotionalProductRepository = (0, typeorm_1.getRepository)(PromotionalProduct_1.PromotionalProduct);
            const newPromotionalProduct = promotionalProductRepository.create(promotionalProductData);
            return yield promotionalProductRepository.save(newPromotionalProduct);
        });
    }
    updatePromotionalProduct(id, promotionalProductData) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotionalProductRepository = (0, typeorm_1.getRepository)(PromotionalProduct_1.PromotionalProduct);
            const promotionalProduct = yield promotionalProductRepository.findOne({ where: { id } });
            if (!promotionalProduct) {
                return null;
            }
            promotionalProductRepository.merge(promotionalProduct, promotionalProductData);
            return yield promotionalProductRepository.save(promotionalProduct);
        });
    }
    deletePromotionalProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const promotionalProductRepository = (0, typeorm_1.getRepository)(PromotionalProduct_1.PromotionalProduct);
            const promotionalProduct = yield promotionalProductRepository.findOne({ where: { id } });
            if (!promotionalProduct) {
                return false;
            }
            yield promotionalProductRepository.remove(promotionalProduct);
            return true;
        });
    }
}
exports.promotionalProductService = new PromotionalProductService();
