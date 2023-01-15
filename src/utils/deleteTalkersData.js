const fs = require('fs').promises;
const path = require('path');
const { readTalkersData } = require('./readTalkers');

const deleteTalkersData = async (id) => {
    const oldUpdateTalkers = await readTalkersData();
    const updateTalker = oldUpdateTalkers
    .filter((currentTalker) => currentTalker.id !== Number(id));
    const allTalkers = JSON.stringify([updateTalker]);
    try {
      await fs.writeFile(path.resolve(__dirname, '../talker.json'), allTalkers);
    } catch (error) {
      console.error(error.message);
    }
};

module.exports = {
  deleteTalkersData,
};