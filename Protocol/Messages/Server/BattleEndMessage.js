const PiranhaMessage = require('../../PiranhaMessage')
const MilestonesArray = require("../../../Logic/MilestoneArray")

class BattleEndMessage extends PiranhaMessage {
  constructor (client, payload) {
    super() // Thanks Depresive Primo for help!
    this.id = 23456
    this.client = client
    this.version = 0

    this.payload = payload
  }

  encode () {
    this.writeVInt(this.payload.battleEndType) // BattleEndType
    this.writeVInt(0) // Unknown
    this.writeVInt(0) // Coins Gained
    this.writeVInt(0) // "All Coins collected" if 0 
    this.writeVInt(0) // First win Coins
    this.writeBoolean(false) // All event experience collected
    this.writeVInt(this.payload.battleResult) // Battle Result
    this.writeVInt(0) // Trophies
    this.writeDataReference(28, 18) // Player Thumbnail
    this.writeBoolean(false) // TrainingMode
    this.writeBoolean(true) // No trophies from matches against Bots
    this.writeVInt(0) // Coin Booster %
    this.writeVInt(0) // Coin Booster Coins Gained
    this.writeVInt(0) // Coin Doubler Coins Gained
     // Players Array
    this.writeVInt(this.payload.playersList.length)
    
    for(let player of this.payload.playersList){
        this.writeString(player.name) // Player Name
        this.writeBoolean(player.isPlayer) // isPlayer
        this.writeBoolean(player.team != this.payload.playersList[0].team) // Team
        this.writeBoolean(player.isPlayer) // Star Player
        this.writeDataReference(16, player.brawlerID)
        player.skinID != 0 ? this.writeDataReference(29, player.skinID) : this.writeVInt(0)
        this.writeVInt(2000) // trophies
    }

    // Experience Array
    this.writeVInt(1)
    this.writeLogicLong(0, 10) // Experience gained

    // Rank Up and Level Up Bonus Array
    this.writeVInt(0)

    // Milestone Bars Array
    this.writeVInt(2)
    this.writeVInt(1)
    this.writeLogicLong(2000, 2000) // Brawler Trophies/High Brawler Trophies
    this.writeVInt(5)
    this.writeLogicLong(666, 666) // Player Experience/Player Experience for Level

    this.writeBoolean(true)
    let milestonesArray = new MilestonesArray(this)
    milestonesArray.load() // supercell moment

    this.writeBoolean(false)
  }
}

module.exports = BattleEndMessage
