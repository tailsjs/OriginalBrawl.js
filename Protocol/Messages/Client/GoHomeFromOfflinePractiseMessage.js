const PiranhaMessage = require('../../PiranhaMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

class GoHomeFromOfflinePractiseMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14109
    this.version = 0
  }

  decode () {

  }

  async process () {
    await new OwnHomeDataMessage(this.client).send()
  }
}

module.exports = GoHomeFromOfflinePractiseMessage
