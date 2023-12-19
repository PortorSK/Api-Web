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
exports.productService = void 0;
// productService.ts
const typeorm_1 = require("typeorm");
const Product_1 = require("../entities/Product");
class ProductService {
    getAllProducts() {
        return __awaiter(this, void 0, void 0, function* () {
            const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
            return yield productRepository.find();
        });
    }
    getProductById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
            const product = yield productRepository.findOne({ where: { id } });
            return product || null;
        });
    }
    createProduct(productData) {
        return __awaiter(this, void 0, void 0, function* () {
            const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
            const newProduct = productRepository.create(productData);
            return yield productRepository.save(newProduct);
        });
    }
    updateProduct(id, productData) {
        return __awaiter(this, void 0, void 0, function* () {
            const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
            const product = yield productRepository.findOne({ where: { id } });
            if (!product) {
                return null;
            }
            productRepository.merge(product, productData);
            return yield productRepository.save(product);
        });
    }
    deleteProduct(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const productRepository = (0, typeorm_1.getRepository)(Product_1.Product);
            const product = yield productRepository.findOne({ where: { id } });
            if (!product) {
                return false;
            }
            yield productRepository.remove(product);
            return true;
        });
    }
}
exports.productService = new ProductService();
