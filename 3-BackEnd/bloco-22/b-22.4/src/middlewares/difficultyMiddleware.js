const difficultyMiddleware = (req, res, next) => {
  const { difficulty } = req.body.description;

  const arrDiff = ['Fácil', 'Médio', 'Difícil'];

  if (!arrDiff.includes(difficulty)) {
    return res.status(400).json({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" });
  }
	next();
}

module.exports = difficultyMiddleware;