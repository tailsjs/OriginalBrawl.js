const PiranhaMessage = require('../../PiranhaMessage')
const TeamLeftMessage = require('../Server/TeamLeftMessage')

class TeamLeaveMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14353
    this.version = 0
  }

  decode () { }

  process () {
    new TeamLeftMessage(this.client).send()
  }
}

module.exports = TeamLeaveMessage
