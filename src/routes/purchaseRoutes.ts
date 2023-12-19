import express from 'express';
import * as purchaseController from '../controllers/PurchaseController';

const router = express.Router();

router.get('/purchases', purchaseController.getPurchases);
router.get('/purchases/:id', purchaseController.getPurchaseById);
router.post('/purchases', purchaseController.createPurchase);

export default router;
