const auth = (req, res, next) => {
  const { authorization } = req.body.headers;

  if (!authorization) {
    return res.status(400).json({ message: 'Token inválido!' });
  }
  next();
};

module.exports = auth;