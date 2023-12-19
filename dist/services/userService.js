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
exports.userService = void 0;
// userService.ts
const typeorm_1 = require("typeorm");
const user_1 = require("../entities/user");
class UserService {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getRepository)(user_1.User);
            return yield userRepository.find();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getRepository)(user_1.User);
            try {
                const user = yield userRepository.findOne({ where: { id } });
                if (!user) {
                    return null;
                }
                return user;
            }
            catch (error) {
                console.error('Error al obtener usuario por ID:', error);
                throw error; // Re-lanzar el error para que sea manejado por la capa superior
            }
        });
    }
    createUser(userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getRepository)(user_1.User);
            const newUser = userRepository.create(userData);
            return yield userRepository.save(newUser);
        });
    }
    updateUser(id, userData) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getRepository)(user_1.User);
            try {
                const user = yield userRepository.findOne({ where: { id } });
                if (!user) {
                    return null;
                }
                userRepository.merge(user, userData);
                return yield userRepository.save(user);
            }
            catch (error) {
                console.error('Error al actualizar usuario:', error);
                throw error; // Re-lanzar el error para que sea manejado por la capa superior
            }
        });
    }
    deleteUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const userRepository = (0, typeorm_1.getRepository)(user_1.User);
            try {
                const user = yield userRepository.findOne({ where: { id } });
                if (!user) {
                    return false;
                }
                yield userRepository.remove(user);
                return true;
            }
            catch (error) {
                console.error('Error al eliminar usuario:', error);
                throw error; // Re-lanzar el error para que sea manejado por la capa superior
            }
        });
    }
}
exports.userService = new UserService();
