// userRoutes.ts
import express from 'express';
import * as userController from '../controllers/UserController';

const router = express.Router();

// Rutas para el CRUD de usuarios
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

export default router;
