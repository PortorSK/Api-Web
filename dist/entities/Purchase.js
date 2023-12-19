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
exports.Purchase = void 0;
// Purchase.ts
const typeorm_1 = require("typeorm");
let Purchase = class Purchase {
};
exports.Purchase = Purchase;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Purchase.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Purchase.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'nombreCliente', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Purchase.prototype, "nombreCliente", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'precioTotal', type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Purchase.prototype, "precioTotal", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'totalProductos', type: 'int' }),
    __metadata("design:type", Number)
], Purchase.prototype, "totalProductos", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'fechaCreacion', type: 'timestamp' }),
    __metadata("design:type", Date)
], Purchase.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuarioCreacion', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Purchase.prototype, "usuarioCreacion", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'fechaActualizacion', type: 'timestamp' }),
    __metadata("design:type", Date)
], Purchase.prototype, "fechaActualizacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'usuarioActualizacion', type: 'varchar', length: 255 }),
    __metadata("design:type", String)
], Purchase.prototype, "usuarioActualizacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'boolean' }),
    __metadata("design:type", Boolean)
], Purchase.prototype, "activo", void 0);
exports.Purchase = Purchase = __decorate([
    (0, typeorm_1.Entity)({ name: 'Purchases' })
], Purchase);
