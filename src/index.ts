import express from 'express';
import mysql from 'mysql2';

const app = express();
const port = 3000;

// Configuración de la conexión a la base de datos
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'farmacos'
});

connection.connect((err) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión a la base de datos exitosa');
  }
});

// Ruta para obtener datos de la base de datos
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) {
      console.error('Error al ejecutar la consulta:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      res.json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
