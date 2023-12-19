// productsRoutes.ts
import express from 'express';
import * as ProductController from '../controllers/ProductController';

const router = express.Router();

router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);
router.post('/products', ProductController.createProduct);
router.put('/products/:id', ProductController.updateProduct);
router.delete('/products/:id', ProductController.deleteProduct);



export default router;
