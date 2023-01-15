const express = require('express');
// const readLine = require('readline-sync');
const { readTalkersData } = require('./utils/readTalkers');
const { getById } = require('./utils/getById');
const { generationToken } = require('./utils/generationToken');
const validateLogin = require('./middlewares/validateLogin');
const { writeNewTalkers } = require('./utils/writeNewTalkers');
const validateToken = require('./middlewares/validateToken');
const validateNewTalker = require('./middlewares/validateNewTalker');
const validateTalk = require('./middlewares/validateTalk');
const validateRate = require('./middlewares/validateRate');
const validateWatchedAt = require('./middlewares/validateWatchedAt');
const { writeUpdateTalkers } = require('./utils/writeUpdateTalkers');
const { deleteTalkersData } = require('./utils/deleteTalkersData');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Req 01
app.get('/talker', async (_req, res) => {
  const talkers = await readTalkersData();
  if (!talkers) {
    return res.status(200).json([]);      
  }
    return res.status(200).json(talkers);
});

// Req 02
app.get('/talker/:id', async (req, res) => {  
  const { id } = req.params;
  const talkerInfo = await getById(id);
  if (!talkerInfo) {
    res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
  }
  res.status(200).json(talkerInfo);
});

// Req 03 e 04
app.post('/login', validateLogin, /* validateFormat, */ /*  auth, */ (req, res) => {
  const token = generationToken();
  return res.status(200).json({ token });
});

// Req 05
app.post('/talker', validateToken, validateNewTalker, validateTalk, validateWatchedAt, validateRate,
   async (req, res) => {
  const newT = await writeNewTalkers(req.body);
  // const writeLista = newT;
   return res.status(201).json(newT);
  // console.log(newTalker); 
 });

//  Req 06
app.put('/talker/:id', 
validateToken,
validateNewTalker,
validateTalk,
validateWatchedAt,
validateRate,
  async (req, res) => {
  const { id } = req.params;
  const writeUpdatedTalker = req.body;
  const updateTalker = await writeUpdateTalkers(Number(id), writeUpdatedTalker);
  return res.status(200).json(updateTalker);
});

// Req 07
app.delete('/talker/:id', validateToken, async (req, res) => {
  const { id } = req.params;
  await deleteTalkersData(Number(id));
    return res.status(204).end();
});
 
app.listen(PORT, () => {
  console.log('Online');
});

module.exports = {
  app,
  
};
