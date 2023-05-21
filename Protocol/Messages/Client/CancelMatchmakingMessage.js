const PiranhaMessage = require('../../PiranhaMessage')
const OutOfSyncMessage = require('../Server/OutOfSyncMessage')

class CancelMatchmakingMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14106
    this.version = 0
  }

  decode () { }

  process () {
    new OutOfSyncMessage(this.client).send()
  }
}

module.exports = CancelMatchmakingMessage
