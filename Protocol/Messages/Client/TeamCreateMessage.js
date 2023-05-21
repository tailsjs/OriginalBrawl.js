const PiranhaMessage = require('../../PiranhaMessage')
const TeamMessage = require('../Server/TeamMessage')

class TeamCreateMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14350
    this.version = 0
  }

  decode () {
    this.slotIndex = this.readVInt()
    this.slotID = this.readVInt()
    this.roomType = this.readVInt()
  }

  process () {
    new TeamMessage(this.client).send()
  }
}

module.exports = TeamCreateMessage
