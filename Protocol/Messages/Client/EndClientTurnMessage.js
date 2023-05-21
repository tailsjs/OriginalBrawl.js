const LogicGiveDeliveryItemsCommand = require('../../Commands/Server/LogicGiveDeliveryItemsCommand')
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
    this.readBoolean() // I'm lazy to do nice logic, sorry :)
    this.readVInt()
    this.readVInt()
    this.readVInt()
    
    this.cmdID = this.readVInt()

    this.readLogicLong()
    this.readLogicLong()
  }

  process () {

    if(this.cmdID == 500){
      return new LogicGiveDeliveryItemsCommand(this.client).send()
    }
  }
}

module.exports = EndClientTurnMessage
