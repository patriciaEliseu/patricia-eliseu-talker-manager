const fs = require('fs').promises;
const path = require('path');
const { readTalkersData } = require('./readTalkers');

const writeUpdateTalkers = async (id, writeUpdateTalker) => {
    const oldUpdateTalkers = await readTalkersData();
    const updateTalker = { id, ...writeUpdateTalker };
    const updateData = oldUpdateTalkers.reduce((talkerList, currentTalker) => {
    if (currentTalker.id === updateTalker.id) return updateTalker;
    return [...talkerList, currentTalker];
  }, []);
    const allTalkers = JSON.stringify([updateData]);
    try {
      await fs.writeFile(path.resolve(__dirname, '../talker.json'), allTalkers);
      return updateTalker;
    } catch (error) {
      console.error(error.message);
    }
    };

module.exports = {
  writeUpdateTalkers,

};