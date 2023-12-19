"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// authRoutes.ts
const express_1 = __importDefault(require("express"));
const AuthController_1 = require("../controllers/AuthController");
const router = express_1.default.Router();
// Ruta para el inicio de sesión
router.post('/login', AuthController_1.login);
exports.default = router;
