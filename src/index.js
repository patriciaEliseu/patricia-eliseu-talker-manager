const express = require('express');
const { readTalkersData } = require('./utils/readTalkers');
const { getById } = require('./utils/getById');
const { generationToken } = require('./utils/generationToken');

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

// Req 03
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  if ([email, password].includes(undefined)) {
    return res.status(400).json({ message: 'Campos ausentes' });
  }

  const token = generationToken();
  return res.status(200).json({ token });
});

// Req 04

app.listen(PORT, () => {
  console.log('Online');
});

module.exports = {
  app,
  
};
