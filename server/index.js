import express from 'express';
import cors from 'cors';

import { LoginController } from './src/Controllers/LoginController.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/login', (req, res) => {
  const loginController = new LoginController();
  loginController.login(req, res);
});

app.get('/', async (_, res) => {
    res.send('Hello World!');
});

app.listen(3000);