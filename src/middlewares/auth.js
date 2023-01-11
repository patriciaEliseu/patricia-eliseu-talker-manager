// module.exports = (req, res, next) => {
//   const { autorization } = req.headers;
//   if (!autorization || autorization.length !== 16) {
//     return res.status(400).json({ message: 'token inválido' });
//   }
//     next();
// };