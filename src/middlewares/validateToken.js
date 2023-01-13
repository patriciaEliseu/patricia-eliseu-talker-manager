module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  console.log(authorization);
  if ([authorization].includes(undefined)) {
    return res.status(401).json({ message: 'Token não encontrado' });
  }
    if (authorization.length < 16) {
    // const pass = password.some((item) => item >= 6)
    return res.status(401).json({ message: 'Token inválido' });
  }
  
    return next();
};