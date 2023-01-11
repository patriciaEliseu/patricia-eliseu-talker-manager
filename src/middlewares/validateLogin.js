module.exports = (req, res, next) => {
  const { email, password } = req.body;
  console.log(email, password);
  if ([email].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "email" é obrigatório' });
  }
  if ([password].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "password" é obrigatório' });
  }
  if (!/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/ig.test(email)) {
    return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
  }  
  if (password.length < 6) {
    // const pass = password.some((item) => item >= 6)
    return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
  }
  
    return next();
};