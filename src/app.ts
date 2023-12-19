import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import userRoutes from './routes/userRoutes'; // Asegúrate de tener la ruta correcta
import productRoutes from './routes/productsRoutes'; // Asegúrate de tener la ruta correcta
import authRoutes from './routes/authRoutes'; // Importa las rutas de Auth
import promotionalproductsRoutes from './routes/promotionalproductRoutes'; // Importa las rutas de Auth
import purchaseRoutes from './routes/purchaseRoutes'; // Importa las rutas de Auth


const app = express();

// Configuración de CORS
const corsOptions = {
  origin: '*', // Esto permitirá el acceso desde cualquier dominio
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  preflightContinue: false,
  optionsSuccessStatus: 204,
};

app.use(morgan('dev'));
app.use(cors(corsOptions));
app.use(express.json());

// Usa las rutas específicas para los usuarios
app.use(userRoutes);
app.use(productRoutes);
app.use(authRoutes);
app.use(promotionalproductsRoutes);
app.use(purchaseRoutes);

export default app;
