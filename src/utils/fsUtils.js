const fs = require('fs').promises;
const path = require('path');
// const talker = require('../talker.json');

async function readTalkersData() {
  try {
      const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
      const readData = JSON.parse(data);
      return readData;
  } catch (error) {
      console.error([]);
  }
}

module.exports = {
  readTalkersData,
};
