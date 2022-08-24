// src/app.js
const express = require('express');

const auth = require('./middlewares/auth');

const nameMiddleware = require('./middlewares/nameMiddleware');
const pricesMiddleware = require('./middlewares/pricesMiddleware');
const descriptionMiddleware = require('./middlewares/descriptionMiddleware');

const createdAtMiddleware = require('./middlewares/createdAtMiddleware');
const ratingMiddleware = require('./middlewares/ratingMiddleware');
const difficultyMiddleware = require('./middlewares/difficultyMiddleware');

const generateToken = require('./files/generateToken');

const app = express();

app.use(express.json());

app.post('/activities',
	auth,
	nameMiddleware,
	pricesMiddleware,
	descriptionMiddleware,
	createdAtMiddleware,
	ratingMiddleware,
	difficultyMiddleware,
	(req, res) => {
	return res.status(201).json({ "message": "Atividade cadastrada com sucesso!" })
});

app.post('/signup', (req, res) => {
	const { email, password, firstName, phone } = req.body;

  if ([email, password, firstName, phone].includes(undefined)) {
		return res.status(401).json({ message: 'Campos ausentes!' });
	}

	const token = generateToken();

	return res.status(200).json({ token });
});

module.exports = app;