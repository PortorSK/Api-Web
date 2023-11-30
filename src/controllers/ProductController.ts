import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Product } from '../entities/Product';

class ProductController {
  async getProducts(req: Request, res: Response) {
    const productRepository = getRepository(Product);
    const products = await productRepository.find();
    res.json(products);
  }

  async getProductById(req: Request, res: Response) {
    const { id } = req.params;
    const productRepository = getRepository(Product);
  
    try {
      const productId = parseInt(id, 10); // Asegurarse de que id sea un número
      const product = await productRepository.findOne({
        where: { id: productId },
      });
  
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      res.json(product);
    } catch (error) {
      console.error('Error al buscar el producto:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }

  async createProduct(req: Request, res: Response) {
    const productRepository = getRepository(Product);
    const newProduct = productRepository.create(req.body);
    await productRepository.save(newProduct);

    res.status(201).json(newProduct);
  }

  async updateProduct(req: Request, res: Response) {
    const { id } = req.params;
    const productRepository = getRepository(Product);
  
    try {
      const productId = parseInt(id, 10); // Asegurarse de que id sea un número
      const product = await productRepository.findOne({
        where: { id: productId },
      });
  
      if (!product) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      productRepository.merge(product, req.body);
      await productRepository.save(product);
  
      res.json(product);
    } catch (error) {
      console.error('Error al actualizar el producto:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
  
  async deleteProduct(req: Request, res: Response) {
    const { id } = req.params;
    const productRepository = getRepository(Product);
  
    try {
      const productId = parseInt(id, 10); // Asegurarse de que id sea un número
      const deleteResult = await productRepository.delete(productId);
  
      if (deleteResult.affected === 0) {
        return res.status(404).json({ message: 'Producto no encontrado' });
      }
  
      res.json({ message: 'Producto eliminado correctamente' });
    } catch (error) {
      console.error('Error al eliminar el producto:', error);
      res.status(500).json({ message: 'Error interno del servidor' });
    }
  }
}

export const productController = new ProductController();
