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

    this.writeVInt(0)

    this.writeVInt(16) // Amount of Brawlers

    for(let i = 0; i < 16; i++){
        this.writeDataReference(16, i) // Brawler
        this.writeVInt(0) // Skin, i guess
        this.writeVInt(2000) // High Trophies
        this.writeVInt(2000) // Current Trophies
        this.writeVInt(15) // Upgrades amount
    }
   
    this.writeVInt(7)

    this.writeLogicLong(1, 666) // Victories
    this.writeLogicLong(2, 666) // Expirience
    this.writeLogicLong(3, 2000) // Trophies
    this.writeLogicLong(4, 2000) // Highest Trophies
    this.writeLogicLong(5, 16) // Brawlers amount
    this.writeLogicLong(7, 28000018) // Icon
    this.writeLogicLong(8, 1488) // Showdown Victories

    this.writeBoolean(false)

    this.writeVInt(0)

    /*this.writeString("OriginalBrawl.js")
    this.writeVInt(100)
    this.writeVInt(28000018)
    this.writeBoolean(false)*/
  }
}

module.exports = PlayerProfileMessage
