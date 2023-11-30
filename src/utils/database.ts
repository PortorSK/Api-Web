import { createConnection } from 'typeorm';

createConnection().then(() => {
  console.log('Conexión a la base de datos exitosa');
}).catch(error => console.log('Error al conectar a la base de datos:', error));
