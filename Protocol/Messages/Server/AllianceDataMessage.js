const PiranhaMessage = require('../../PiranhaMessage')

class AllianceDataMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24301
    this.client = client
    this.version = 0
  }

  encode () {
    this.writeLong(0, 1) // ClubID
    this.writeString("OriginalBrawl.js Club") // Club Name
    this.writeDataReference(8, 19) // Club Thumbnail
    this.writeVInt(1) // Club Type
    this.writeVInt(1) // Players Count
    this.writeVInt(2000) // Club Trophies
    this.writeVInt(0) // Required Trophies

    this.writeDataReference(14, 269) // Region

    this.writeString("OriginalBrawl.js - First open-source Brawl Stars v2.57 JavaScript server.") // Club Description

    this.writeVInt(1) // Players Array

    this.writeLong(0, 1) // Player ID
    this.writeString("OriginalBrawl.js") // Name
    this.writeVInt(2) // Role
    this.writeVInt(666) // Level
    this.writeVInt(2000) // Trophies
    this.writeDataReference(28, 18) // Player Thumbnail
  }
}

module.exports = AllianceDataMessage
