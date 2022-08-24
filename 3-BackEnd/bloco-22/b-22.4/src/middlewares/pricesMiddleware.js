const pricesMiddleware = (req, res, next) => {
	const prices = req.body.price;

	if (!prices) {
		return res.status(400).json({ "message": "O campo price é obrigatório" });
	}

  if (typeof prices !== 'number' || prices.length >= 0) {
		return res.status(400).json({ "message": "O campo price deve ser um número maior ou igual a zero" });
	}

	next();
}

module.exports = pricesMiddleware;