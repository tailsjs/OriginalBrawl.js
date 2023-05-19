const PiranhaMessage = require('../../PiranhaMessage')
const ServerHelloMessage = require('../Server/ServerHelloMessage')

class EndClientTurnMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14102
    this.version = 0
  }

  decode () {
    this.readBoolean()
    this.readVInt()
    this.readVInt()
    this.readVInt()
    
    this.readVInt()

    this.readLogicLong()
    this.readLogicLong()
  }

  process () {
  }
}

module.exports = EndClientTurnMessage
