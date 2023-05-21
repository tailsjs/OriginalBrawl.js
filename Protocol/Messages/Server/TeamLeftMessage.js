const PiranhaMessage = require('../../PiranhaMessage')

class TeamLeftMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24125
    this.client = client
    this.version = 0
  }

  encode () {
    this.writeInt(0)
  }
}

module.exports = TeamLeftMessage
