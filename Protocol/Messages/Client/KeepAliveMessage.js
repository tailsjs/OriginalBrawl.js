const PiranhaMessage = require('../../PiranhaMessage')
const KeepAliveOKMessage = require('../Server/KeepAliveOKMessage')

class KeepAliveMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 10108
    this.version = 0
  }

  decode () { }

  process () {
    new KeepAliveOKMessage(this.client).send()
  }
}

module.exports = KeepAliveMessage
