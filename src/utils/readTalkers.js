const fs = require('fs').promises;
const path = require('path');

const readTalkersData = async () => {
  try {
      const data = await fs.readFile(path.resolve(__dirname, '../talker.json'));
      const readData = JSON.parse(data);
      console.log(readData);
      return readData;
  } catch (error) {
      console.error([]);
  }
};

module.exports = {
  readTalkersData,

};
