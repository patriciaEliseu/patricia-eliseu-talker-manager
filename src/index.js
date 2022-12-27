const express = require('express');
const talk = require('./talker.json');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', (req, res) => {
  console.log(talk);
  if (talk) return res.status(200).json(talk);
   return res.status(200).json([]); 
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
    console.log('Online');
});
