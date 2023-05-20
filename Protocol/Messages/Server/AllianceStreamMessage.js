const PiranhaMessage = require('../../PiranhaMessage')
let messageTicks = 0

class AllianceStreamMessage extends PiranhaMessage {
  constructor (client, playerName, message) {
    super() // Thanks Depresive Primo for HEX!
    this.id = 24311
    this.client = client
    this.version = 0
    this.playerName = playerName
    this.message = message
  }

  encode () {
    this.writeVInt(1) // Message List

    this.writeVInt(2) // Stream Type
    this.writeVInt(0)
    this.writeVInt(messageTicks)
    this.writeVInt(0)
    this.writeVInt(this.client.lowID) // Player ID
    this.writeString(this.playerName) // Player Nick
    this.writeVInt(2) // Role
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeString(this.message) // Message

    messageTicks++
  }
}

module.exports = AllianceStreamMessage
