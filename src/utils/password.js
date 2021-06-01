const bcrypt = require('bcrypt');

async function crypto(pwd) {
  const salt = await bcrypt.genSalt();

  const pwdCrypto = await bcrypt.hash(pwd, salt);

  return pwdCrypto;
}
module.exports = {
  crypto,
};
