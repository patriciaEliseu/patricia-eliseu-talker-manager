const fs = require('fs').promises;
const path = require('path');
const { readTalkersData } = require('./readTalkers');

const writeNewTalkers = async (newTalkers) => {
  try {
  const oldTalkers = await readTalkersData();
  const newTalkerWithId = { id: oldTalkers.length + 1, ...newTalkers };
  const allTalkers = JSON.stringify([...oldTalkers, newTalkerWithId]);
  await fs.writeFile(path.resolve(__dirname, '../talker.json'), allTalkers);
  return newTalkerWithId;
    } catch (error) {
    console.error(error.message);
  }
    
      // return allData();
};

module.exports = {
  writeNewTalkers,

};
