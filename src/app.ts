import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/Routes'; // Importa las rutas directamente

import './utils/database'; // Importa la conexión a la base de datos

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Usa las rutas directamente
app.use(routes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
