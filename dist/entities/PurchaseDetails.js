"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseDetail = void 0;
// PurchaseDetail.ts
const typeorm_1 = require("typeorm");
const Purchase_1 = require("./Purchase");
const Product_1 = require("./Product");
class PurchaseDetail {
}
exports.PurchaseDetail = PurchaseDetail;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PurchaseDetail.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Product_1.products),
    (0, typeorm_1.JoinColumn)({ name: 'producto_id' }),
    __metadata("design:type", Product_1.products)
], PurchaseDetail.prototype, "producto", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], PurchaseDetail.prototype, "orden", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fechaCreacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PurchaseDetail.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuarioCreacion', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], PurchaseDetail.prototype, "usuarioCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fechaActualizacion', type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], PurchaseDetail.prototype, "fechaActualizacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Purchase_1.Purchase, (compra) => compra.detalles, { onDelete: 'CASCADE' }) // Corregir aquí
    ,
    (0, typeorm_1.JoinColumn)({ name: 'purchase_id' }),
    __metadata("design:type", Purchase_1.Purchase)
], PurchaseDetail.prototype, "compra", void 0);
