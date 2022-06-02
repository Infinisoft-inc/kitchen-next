const crypto = require('crypto');
const fs = require('fs');

const checksum = () => {
  const fileBuffer = fs.readFileSync('myfile.js');
  const hashSum = crypto.createHash('sha256');
  hashSum.update(fileBuffer);

  const hex = hashSum.digest('hex');

  console.log(hex);
};

module.exports = {
  checksum
};
