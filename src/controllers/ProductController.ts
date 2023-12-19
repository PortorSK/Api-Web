import { Request, Response } from 'express';
import { AppDataSource } from '../db';
import { products } from '../entities/Product';

export async function getProducts(req: Request, res: Response): Promise<Response> {
  try {
    const Products = await AppDataSource.manager.find(products);
    return res.json(Products);
  } catch (error) {
    console.error('Error al obtener los productos:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function getProductById(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const productId = parseInt(id, 10);
    const product = await AppDataSource.manager.findOne(products, { where: { id: productId } });

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado.' });
    }

    return res.json(product);
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function createProduct(req: Request, res: Response): Promise<Response> {
  const newProduct = AppDataSource.manager.create(products, req.body);

  try {
    const product = await AppDataSource.manager.save(newProduct);
    return res.status(201).json({ message: 'Producto creado correctamente', product });
  } catch (error) {
    console.error('Error al crear el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function updateProduct(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const productId = parseInt(id, 10);
    const product = await AppDataSource.manager.findOne(products, { where: { id: productId } });

    if (!product) {
      return res.status(404).json({ message: 'Producto no encontrado.' });
    }

    AppDataSource.manager.merge(products, product, req.body);
    const updatedProduct = await AppDataSource.manager.save(product);

    return res.json({ message: 'Producto actualizado correctamente', product: updatedProduct });
  } catch (error) {
    console.error('Error al actualizar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}

export async function deleteProduct(req: Request, res: Response): Promise<Response> {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: 'ID parameter is required.' });
  }

  try {
    const productId = parseInt(id, 10);
    const deleteResult = await AppDataSource.manager.delete(products, productId);

    if (deleteResult.affected === 0) {
      return res.status(404).json({ message: 'Producto no encontrado.' });
    }

    return res.json({ message: 'Producto eliminado correctamente' });
  } catch (error) {
    console.error('Error al eliminar el producto:', error);
    return res.status(500).json({ message: 'Error interno del servidor', error });
  }
}
