import express from 'express';

const app = express();

app.get('/', async (_, res) => {
    res.send('Hello World!');
});

app.listen(3000);