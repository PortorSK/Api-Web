import { DataSource } from 'typeorm';
import { users } from './entities/user'; // Ajusta la ruta según tu estructura de carpetas
import { products } from './entities/Product'; // Ajusta la ruta según tu estructura de carpetas
import { PromotionalProduct } from './entities/PromotionalProduct'; // Ajusta la ruta según tu estructura de carpetas
import { Purchase } from './entities/Purchase'; // Ajusta la ruta según tu estructura de carpetas

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  username: 'root',
  password: '12345',
  database: 'farmacos',
  port: 3306,
  entities: [users, products, PromotionalProduct, Purchase], // Agrega la entidad User aquí
  logging: true,
  synchronize: false,
});

