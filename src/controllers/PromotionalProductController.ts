import { Request, Response } from 'express';
import { AppDataSource } from '../db';
import { PromotionalProduct } from '../entities/PromotionalProduct';

export async function getPromotionalProducts(req: Request, res: Response): Promise<Response> {
  try {
    const promotionalProductsList = await AppDataSource.manager.find(PromotionalProduct);
    return res.json(promotionalProductsList);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function getPromotionalProductById(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const promotionalProductId = parseInt(id, 10);
    const promotionalProduct = await AppDataSource.manager.findOne(PromotionalProduct, { where: { id: promotionalProductId } });

    if (promotionalProduct) {
      return res.json(promotionalProduct);
    } else {
      return res.status(404).json({ message: 'Producto en promoción no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function createPromotionalProduct(req: Request, res: Response): Promise<Response> {
  const promotionalProductData = req.body;

  try {
    const newPromotionalProduct = new PromotionalProduct();
    Object.assign(newPromotionalProduct, promotionalProductData);

    const promotionalProduct = await AppDataSource.manager.save(newPromotionalProduct);
    return res.status(201).json(promotionalProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function updatePromotionalProduct(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;
  const promotionalProductData = req.body;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const promotionalProductId = parseInt(id, 10);
    const promotionalProduct = await AppDataSource.manager.findOne(PromotionalProduct, { where: { id: promotionalProductId } });

    if (!promotionalProduct) {
      return res.status(404).json({ message: 'Producto en promoción no encontrado.' });
    }

    Object.assign(promotionalProduct, promotionalProductData);

    await AppDataSource.manager.save(promotionalProduct);
    return res.json(promotionalProduct);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function deletePromotionalProduct(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const promotionalProductId = parseInt(id, 10);
    const promotionalProduct = await AppDataSource.manager.findOne(PromotionalProduct, { where: { id: promotionalProductId } });

    if (!promotionalProduct) {
      return res.status(404).json({ message: 'Producto en promoción no encontrado.' });
    }

    await AppDataSource.manager.remove(promotionalProduct);
    return res.json({ message: 'Producto en promoción eliminado correctamente' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}
