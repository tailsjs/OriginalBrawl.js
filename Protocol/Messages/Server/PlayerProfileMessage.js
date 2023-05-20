const PiranhaMessage = require('../../PiranhaMessage')

class PlayerProfileMessage extends PiranhaMessage {
  constructor (client, lowID) {
    super()
    this.id = 24113
    this.client = client
    this.version = 0
    this.lowID = lowID
  }

  encode () {
    this.writeLogicLong(this.lowID[0], this.lowID[1])
    this.writeString("OriginalBrawl.js") // Player Name

    this.writeVInt(0) // Unknown

    this.writeVInt(16) // Amount of Brawlers

    for(let i = 0; i < 16; i++){
        this.writeDataReference(16, i) // Brawler
        this.writeVInt(0) // Skin, i guess
        this.writeVInt(2000) // High Trophies
        this.writeVInt(2000) // Current Trophies
        this.writeVInt(15) // Upgrades amount
    }
   
    this.writeVInt(7) // IntArray

    this.writeLogicLong(1, 666) // Victories
    this.writeLogicLong(2, 666) // Expirience
    this.writeLogicLong(3, 2000) // Trophies
    this.writeLogicLong(4, 2000) // Highest Trophies
    this.writeLogicLong(5, 16) // Brawlers amount
    this.writeLogicLong(7, 28000018) // Player Thumbnail
    this.writeLogicLong(8, 1488) // Showdown Victories

    this.writeBoolean(true) // in Club?
    this.writeLong(0, 1) // ClubID
    this.writeString("OriginalBrawl.js Club") // Club Name
    this.writeDataReference(8, 19) // Club Thumbnail
    this.writeVInt(1) // Club Type
    this.writeVInt(1) // Players Count
    this.writeVInt(2000) // Club Trophies
    this.writeVInt(0) // Required Trophies

    this.writeDataReference(14, 249) // Region

    this.writeDataReference(25, 2) // Club Role
  }
}

module.exports = PlayerProfileMessage
