const express = require('express');
const { readTalkersData } = require('./utils/fsUtils');

const app = express();
app.use(express.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

// app.get('/talker', (req, res) => {
//   // console.log(talk);
//   const { name } = req.params;
//   if (!name) return res.status(200).json([]);
// });

app.get('/talker', async (req, res) => {
  const talkers = await readTalkersData();
  if (talkers) {
 try {
    //  console.log(talkers);
    return res.status(200).json(talkers);
  } catch (error) { 
    return res.status(200).json([]);
  } 
}
});

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.listen(PORT, () => {
    console.log('Online');
});
