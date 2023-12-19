// purchaseController.ts
import { Request, Response } from 'express';
import { AppDataSource } from '../db';
import { Purchase } from '../entities/Purchase';

export async function getPurchases(req: Request, res: Response): Promise<Response> {
  try {
    const purchases = await AppDataSource.manager.find(Purchase);
    return res.json(purchases);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function getPurchaseById(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const purchaseId = parseInt(id, 10);
    const purchase = await AppDataSource.manager.findOne(Purchase, { where: { id: purchaseId } });

    if (purchase) {
      return res.json(purchase);
    } else {
      return res.status(404).json({ message: 'Compra no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function createPurchase(req: Request, res: Response): Promise<Response> {
  try {
    const newPurchase = await AppDataSource.manager.save(Purchase, req.body);
    return res.status(201).json(newPurchase);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function updatePurchase(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const purchaseId = parseInt(id, 10);
    const purchase = await AppDataSource.manager.findOne(Purchase, { where: { id: purchaseId } });

    if (!purchase) {
      return res.status(404).json({ message: 'Compra no encontrada.' });
    }

    const updatedPurchase = await AppDataSource.manager.save(Purchase, { ...purchase, ...req.body });
    return res.status(200).json(updatedPurchase);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function deletePurchase(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const purchaseId = parseInt(id, 10);
    const purchase = await AppDataSource.manager.findOne(Purchase, { where: { id: purchaseId } });

    if (!purchase) {
      return res.status(404).json({ message: 'Compra no encontrada.' });
    }

    await AppDataSource.manager.remove(Purchase, purchase);
    return res.status(200).json({ message: 'Compra eliminada correctamente.' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}
