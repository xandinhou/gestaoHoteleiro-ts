import express from 'express';
import routes from './routes';

const app = express();

app.use(routes);

app.listen(3333, () => {
  console.log('🚀 O servidor iniciou corretamente na pora 3333. 🚀');
});
