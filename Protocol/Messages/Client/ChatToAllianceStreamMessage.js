const PiranhaMessage = require('../../PiranhaMessage')
const AllianceStreamMessage = require('../Server/AllianceStreamMessage')

class ChatToAllianceStreamMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14315
    this.version = 0
  }

  decode () {
    this.msg = this.readString()
  }

  process () {
    new AllianceStreamMessage(this.client, "OriginalBrawl.js", this.msg).send()
  }
}

module.exports = ChatToAllianceStreamMessage
