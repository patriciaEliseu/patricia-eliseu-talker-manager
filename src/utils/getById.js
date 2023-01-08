const { readTalkersData } = require('./readTalkers');

const getById = async (id) => {
 const talkersData = await readTalkersData();
 const talkerInfo = talkersData.find((item) => item.id === Number(id));
 return talkerInfo;
};

module.exports = {
  getById,
};