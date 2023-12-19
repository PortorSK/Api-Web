"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = require("../controllers/UserController");
const ProductController_1 = require("../controllers/ProductController");
const authController_1 = require("../controllers/authController");
const promotionalProductController_1 = require("../controllers/promotionalProductController");
const PurchaseController_1 = require("../controllers/PurchaseController");
const router = (0, express_1.Router)();
// Rutas de Usuarios
router.get('/users', UserController_1.userController.getUsers);
router.get('/users/:id', UserController_1.userController.getUserById);
router.post('/users', UserController_1.userController.createUser);
router.put('/users/:id', UserController_1.userController.updateUser);
router.delete('/users/:id', UserController_1.userController.deleteUser);
// Rutas para productos en promoción
router.get('/promotionalproducts', promotionalProductController_1.promotionalProductController.getPromotionalProducts);
router.get('/promotionalproducts/:id', promotionalProductController_1.promotionalProductController.getPromotionalProductById);
router.post('/promotionalproducts', promotionalProductController_1.promotionalProductController.createPromotionalProduct);
router.put('/promotionalproducts/:id', promotionalProductController_1.promotionalProductController.updatePromotionalProduct);
router.delete('/promotionalproducts/:id', promotionalProductController_1.promotionalProductController.deletePromotionalProduct);
// Rutas para compras
router.get('/purchases', PurchaseController_1.purchaseController.getPurchases);
router.get('/purchases/:id', PurchaseController_1.purchaseController.getPurchaseById);
router.post('/purchases', PurchaseController_1.purchaseController.createPurchase);
// Rutas de Productos
router.get('/products', ProductController_1.productController.getProducts);
router.get('/products/:id', ProductController_1.productController.getProductById);
router.post('/products', ProductController_1.productController.createProduct);
router.put('/products/:id', ProductController_1.productController.updateProduct);
router.delete('/products/:id', ProductController_1.productController.deleteProduct);
// Rutas de login
router.post('/login', authController_1.authController.login);
exports.default = router;
