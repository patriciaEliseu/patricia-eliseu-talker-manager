const crypto = require('crypto');

const generationToken = () => crypto.randomBytes(8).toString('hex');

module.exports = { generationToken };