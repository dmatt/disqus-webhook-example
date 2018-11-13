const crypto = require('crypto')

module.exports = {
  getHash: (data) => {
    return crypto.createHmac('sha512', process.env.WEBHOOKS_SECRET)
      .update(data)
      .digest('hex');
  }
}