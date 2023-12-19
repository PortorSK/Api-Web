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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const db_1 = require("../db");
const user_1 = require("../entities/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function login(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { correoElectronico, contrasena } = req.body;
        try {
            // Obtén el usuario por su correo electrónico
            const user = yield db_1.AppDataSource.manager.findOne(user_1.users, { where: { correoElectronico } });
            if (!user) {
                return res.status(404).json({ message: 'Usuario no encontrado' });
            }
            var passwordMatch = true;
            // Verifica la contraseña
            if (contrasena == user.contrasena) {
                passwordMatch = true;
            }
            else {
                passwordMatch = false;
            }
            if (passwordMatch == false) {
                return res.status(401).json({ message: contrasena + " " + user.contrasena });
            }
            // Genera el token JWT
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, 'tu_secreto', { expiresIn: '1h' });
            // Devuelve el token como respuesta
            return res.json({ token });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error interno del servidor', error: error });
        }
    });
}
exports.login = login;
