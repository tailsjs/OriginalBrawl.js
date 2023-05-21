const PiranhaMessage = require('../../PiranhaMessage')

class TeamMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24124
    this.client = client
    this.version = 0
  }

  encode () {
    this.writeVInt(0) // Unknown
    this.writeBoolean(true) // Practice against bots
    this.writeVInt(3) // Max amount of players

    this.writeLong(0, 1) // RoomId
    this.writeVInt(0) // Unknown
    this.writeVInt(0) // Unknown
    this.writeVInt(0) // Unknown
    this.writeDataReference(15, 1) // Map

    this.writeVInt(1) // Players Array

    this.writeLong(0, this.client.lowID) // Player ID
    this.writeString("OriginalBrawl.js") // Player Nick
    this.writeVInt(1) // unknown
    this.writeDataReference(16, 0) // Brawler
    this.writeDataReference(29, 0) // Skin
    this.writeVInt(2000) // Trophies
    this.writeVInt(2000) // High Trophies
    this.writeVInt(15) // Upgrades
    this.writeVInt(3) // Status
    this.writeVInt(0) // Unknown
    this.writeBoolean(false) // Ready
    this.writeVInt(1) // Unknown
  }
}

module.exports = TeamMessage
