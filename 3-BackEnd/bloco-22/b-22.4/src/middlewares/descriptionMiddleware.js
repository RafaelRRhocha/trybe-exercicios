const descriptionMiddleware = (req, res, next) => {
	const description = req.body.description;

  const requiredFields = ['rating', 'difficulty', 'createdAt'];
	const hasProperties = requiredFields.every((property) => property in description);

  for (let i = 0; i < requiredFields.length; i += 1) {
    const element = requiredFields[i];

    if (!description ) {
      return res.status(400).json({ "message": `O campo description é obrigatório` });
    }

    if (!hasProperties) {
      return res.status(400).json({ "message": `O campo ${element} é obrigatório` });
    }
  }
	next();
}

module.exports = descriptionMiddleware;