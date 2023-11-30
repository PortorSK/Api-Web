import { Router } from 'express';
import { userController } from '../controllers/UserController';
import { productController } from '../controllers/ProductController';
import { authController } from '../controllers/authController';

const router = Router();

// Rutas de Usuarios
router.get('/users', userController.getUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// Rutas de Productos
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.post('/products', productController.createProduct);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);
// Rutas de login
router.post('/login', authController.login);

export default router;
