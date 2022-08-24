// src/app.js
const express = require('express');
const nameMiddleware = require('./middlewares/nameMiddleware');
const pricesMiddleware = require('./middlewares/pricesMiddleware');
const descriptionMiddleware = require('./middlewares/descriptionMiddleware');

const createdAtMiddleware = require('./middlewares/createdAtMiddleware');
const ratingMiddleware = require('./middlewares/ratingMiddleware');
const difficultyMiddleware = require('./middlewares/difficultyMiddleware');

const app = express();

app.use(express.json());

app.post('/activities',
	nameMiddleware,
	pricesMiddleware,
	descriptionMiddleware,
	createdAtMiddleware,
	ratingMiddleware,
	difficultyMiddleware,
	(req, res) => {
	return res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

module.exports = app;