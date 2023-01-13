module.exports = (req, res, next) => {
  const { watchedAt } = req.body.talk;
    
  if ([watchedAt].includes(undefined)) {
    return res.status(400).json({ message: 'O campo "watchedAt" é obrigatório' });
  }
  const validationData = /^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$/i;  
  if (!validationData.test(watchedAt)) {
    return res.status(400).json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
  }
  
    return next();
};
