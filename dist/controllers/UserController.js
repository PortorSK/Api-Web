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
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUserById = exports.getUsers = void 0;
const db_1 = require("../db");
const user_1 = require("../entities/user");
function getUsers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const Users = yield db_1.AppDataSource.manager.find(user_1.users);
            return res.json(Users);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Hubo un problema al obtener los usuarios pendejo.", error: error });
        }
    });
}
exports.getUsers = getUsers;
function getUserById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID parameter is required." });
        }
        try {
            const userId = parseInt(id, 10);
            const user = yield db_1.AppDataSource.manager.findOne(user_1.users, { where: { id: userId } });
            if (user) {
                return res.json(user);
            }
            else {
                return res.status(404).json({ message: "Usuario no encontrado." });
            }
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Hubo un problema al obtener el usuario.", error: error });
        }
    });
}
exports.getUserById = getUserById;
function createUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { nombre, correoElectronico, contrasena, usuarioCreacion, usuarioActualizacion, estadocivil, edad } = req.body;
        if (!nombre || !correoElectronico || !contrasena) {
            return res.status(400).json({ message: "Nombre, correo electrónico y contraseña son requeridos." });
        }
        try {
            const newUser = new user_1.users();
            newUser.nombre = nombre;
            newUser.correoElectronico = correoElectronico;
            newUser.contrasena = contrasena;
            newUser.usuarioCreacion = usuarioCreacion;
            newUser.usuarioActualizacion = usuarioActualizacion;
            newUser.activo = true;
            newUser.estadocivil = estadocivil;
            newUser.edad = edad;
            const user = yield db_1.AppDataSource.manager.save(newUser);
            return res.status(201).json({ message: "Usuario creado correctamente", user });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Hubo un problema al crear el usuario.", error: error });
        }
    });
}
exports.createUser = createUser;
function updateUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        const { nombre, correoElectronico, contrasena, usuarioCreacion, usuarioActualizacion, estadocivil, edad } = req.body;
        if (!id || !nombre || !correoElectronico || !contrasena) {
            return res.status(400).json({ message: "ID, nombre, correo electrónico y contraseña son requeridos." });
        }
        try {
            const userId = parseInt(id, 10);
            const user = yield db_1.AppDataSource.manager.findOne(user_1.users, { where: { id: userId } });
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado." });
            }
            user.nombre = nombre;
            user.correoElectronico = correoElectronico;
            user.contrasena = contrasena;
            user.usuarioCreacion = usuarioCreacion;
            user.usuarioActualizacion = usuarioActualizacion;
            user.activo = true;
            user.estadocivil = estadocivil;
            user.edad = edad;
            yield db_1.AppDataSource.manager.save(user);
            return res.status(200).json({ message: "Usuario actualizado correctamente", user });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Hubo un problema al actualizar el usuario.", error: error });
        }
    });
}
exports.updateUser = updateUser;
function deleteUser(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { id } = req.params;
        if (!id) {
            return res.status(400).json({ message: "ID parameter is required." });
        }
        try {
            const userId = parseInt(id, 10);
            const user = yield db_1.AppDataSource.manager.findOne(user_1.users, { where: { id: userId } });
            if (!user) {
                return res.status(404).json({ message: "Usuario no encontrado." });
            }
            yield db_1.AppDataSource.manager.remove(user);
            return res.status(200).json({ message: "Usuario eliminado correctamente" });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ message: "Hubo un problema al eliminar el usuario.", error: error });
        }
    });
}
exports.deleteUser = deleteUser;
