import express from 'express';

import login from './route/login.js';

const app = express();

app.get('/login', login);

export default app;
