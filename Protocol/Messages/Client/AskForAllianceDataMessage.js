const PiranhaMessage = require('../../PiranhaMessage')
const AllianceDataMessage = require('../Server/AllianceDataMessage')

class AskForAllianceDataMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14302
    this.version = 0
  }

  decode () {
    this.lowID = this.readLong()
  }

  process () {
    new AllianceDataMessage(this.client).send()
  }
}

module.exports = AskForAllianceDataMessage
