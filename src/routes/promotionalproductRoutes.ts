// productsRoutes.ts
import express from 'express';
import * as PromotionalProductController from '../controllers/PromotionalProductController';

const router = express.Router();

router.get('/promotionalProducts', PromotionalProductController.getPromotionalProducts);
router.get('/promotionalProducts/:id', PromotionalProductController.getPromotionalProductById);
router.post('/promotionalProducts', PromotionalProductController.createPromotionalProduct);
router.put('/promotionalProducts/:id', PromotionalProductController.updatePromotionalProduct);
router.delete('/promotionalProducts/:id', PromotionalProductController.deletePromotionalProduct);



export default router;