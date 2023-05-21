const PiranhaMessage = require('../../PiranhaMessage')
const MilestonesArray = require("../../../Logic/MilestoneArray")
const Cards = require("../../../CSVParser/Cards")
const upgrades = Cards.getBrawlersUpgrades()
const unlocks = [ 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 56, 60, 64 ]

class OwnHomeDataMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24101
    this.client = client
    this.version = 1
  }

  encode () {
    this.writeVInt(2017189)
    this.writeVInt(60115)

    this.writeVInt(2000) // Total trophies
    this.writeVInt(2000) // High trophies
    this.writeVInt(666) // Expirience

    this.writeDataReference(28, 18) // Player Thumbnail

    this.writeVInt(4) // Played Gamemodes
    for(let i of [0, 2, 3, 6]){
      this.writeVInt(i)
    }

    this.writeVInt(0) // Selected Skins

    this.writeVInt(31) // Unlocked Skins
    for(let i = 0; i < 31; i++){
      this.writeDataReference(29, i)
    }

    this.writeBoolean(true)

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(1) // Contolling type (0 - Tap to Move, 1 - Joystick Mode, 2 - Double Joystick Mode)

    this.writeBoolean(false) // Battle hints
    
    this.writeVInt(1337) // Coin Doubler Remain
    this.writeVInt(666) // Coin Boost Purchased?

    this.writeBoolean(false)
    // DailyData ends.
    // ConfData began.

    this.writeVInt(2017189)

    this.writeVInt(1488) // Brawl Box Coins Cost
    this.writeVInt(228) // Brawl Box Gems Cost

    this.writeVInt(20) // Coin Boost Cost
    this.writeVInt(50) // Coin Boost Percent

    this.writeVInt(50) // Coin Doubler Cost
    this.writeVInt(1000) // Coin Doubler Amount

    this.writeVInt(7)

    this.writeVInt(1)

    this.writeVInt(2)
    for(let i of [10, 60]){
      this.writeVInt(i)
    }

    this.writeVInt(3)
    for(let i of [10, 60, 500]){
      this.writeVInt(i)
    }

    this.writeVInt(4)
    for(let i of [[1, 0], [2, 3], [3, 5], [4, 8]]){
      this.writeVInt(i[0])
      this.writeVInt(i[1])
    }

    this.writeVInt(3) // Events

    this.writeVInt(1) // SlotIndex
    this.writeVInt(1) // SlotID
    this.writeVInt(0)
    this.writeVInt(1488) // Timer
    this.writeVInt(8) // Coins
    this.writeVInt(0) // 1st mark
    this.writeVInt(60) // Max Coins
    this.writeVInt(0) // Marks (0 - nothing, 1 - coin, 2 - x2 exp, 3 - coin and x2 exp)
    this.writeDataReference(15, 1) // MapID
    this.writeVInt(0) // Collected Coins
    this.writeVInt(2) // EventState
    this.writeString() // TODO string
    this.writeBoolean(false) // All expirience collected.

    this.writeVInt(2) // SlotIndex
    this.writeVInt(2) // SlotID
    this.writeVInt(0)
    this.writeVInt(1337) // Timer
    this.writeVInt(16) // Coins
    this.writeVInt(0) // 1st mark
    this.writeVInt(40) // Max Coins
    this.writeVInt(0) // Marks (0 - nothing, 1 - coin, 2 - x2 exp, 3 - coin and x2 exp)
    this.writeDataReference(15, 2) // MapID
    this.writeVInt(0) // Collected Coins
    this.writeVInt(2) // EventState
    this.writeString() // TODO string
    this.writeBoolean(false) // All expirience collected.

    this.writeVInt(3) // SlotIndex
    this.writeVInt(3) // SlotID
    this.writeVInt(0)
    this.writeVInt(228) // Timer
    this.writeVInt(4) // Coins
    this.writeVInt(0) // 1st mark
    this.writeVInt(16) // Max Coins
    this.writeVInt(0) // Marks (0 - nothing, 1 - coin, 2 - x2 exp, 3 - coin and x2 exp)
    this.writeDataReference(15, 3) // MapID
    this.writeVInt(0) // Collected Coins
    this.writeVInt(2) // EventState
    this.writeString() // TODO string
    this.writeBoolean(false) // All expirience collected.

    this.writeVInt(4) // Coming up events

    this.writeVInt(1)
    this.writeVInt(1) // SlotID
    this.writeVInt(228) // Timer
    this.writeVInt(17) 
    this.writeVInt(8) // Coins
    this.writeVInt(0) // 1st mark
    this.writeVInt(60) // Max Coins
    this.writeVInt(0) // Marks (0 - nothing, 1 - coin, 2 - x2 exp, 3 - coin and x2 exp)
    this.writeDataReference(15, 9)
    this.writeVInt(0) // Collected Coins
    this.writeVInt(0) // EventState
    this.writeString() // TODO string
    this.writeBoolean(false) // All expirience collected.

    this.writeVInt(2)
    this.writeVInt(2) // SlotID
    this.writeVInt(228) // Timer
    this.writeVInt(12) 
    this.writeVInt(16) // Coins
    this.writeVInt(0) // 1st mark
    this.writeVInt(40) // Max Coins
    this.writeVInt(0) // Marks (0 - nothing, 1 - coin, 2 - x2 exp, 3 - coin and x2 exp)
    this.writeDataReference(15, 5)
    this.writeVInt(0) // Collected Coins
    this.writeVInt(0) // EventState
    this.writeString() // TODO string
    this.writeBoolean(false) // All expirience collected.

    this.writeVInt(3)
    this.writeVInt(3) // SlotID
    this.writeVInt(228) // Timer
    this.writeVInt(9) 
    this.writeVInt(4) // Coins
    this.writeVInt(0) // 1st mark
    this.writeVInt(16) // Max Coins
    this.writeVInt(0) // Marks (0 - nothing, 1 - coin, 2 - x2 exp, 3 - coin and x2 exp)
    this.writeDataReference(15, 14)
    this.writeVInt(0) // Collected Coins
    this.writeVInt(0) // EventState
    this.writeString() // TODO string
    this.writeBoolean(false) // All expirience collected.
    
    this.writeVInt(4)
    this.writeVInt(4) // SlotID
    this.writeVInt(228) // Timer
    this.writeVInt(0) 
    this.writeVInt(4) // Coins
    this.writeVInt(0) // 1st mark
    this.writeVInt(20) // Max Coins
    this.writeVInt(0) // Marks (0 - nothing, 1 - coin, 2 - x2 exp, 3 - coin and x2 exp)
    this.writeDataReference(15, 7) // Coming up MapID
    this.writeVInt(0) // Collected Coins
    this.writeVInt(0) // EventState
    this.writeString("TID_WEEKEND_EVENT") // TODO string
    this.writeBoolean(false) // All expirience collected.

    this.writeVInt(5)
    for(let i = 1; i < 6; i++){
      this.writeVInt(i)
    }

    let milestonesArray = new MilestonesArray(this)
    milestonesArray.load() // supercell moment

    this.writeLogicLong(0, 56625)
    this.writeLogicLong(0, 0)
    this.writeLogicLong(0, 0)
    this.writeString("OriginalBrawl.js") // Player name
    this.writeBoolean(true) // nick set

    this.writeInt(0)

    this.writeVInt(5) // Commodity

    this.writeVInt(unlocks.length + 3 + upgrades.length)
    
    for(let unlock of unlocks){
      this.writeDataReference(23, unlock)
      this.writeVInt(1)
    }

    for(let upgrade of upgrades){
      this.writeDataReference(23, upgrade) // Brawlers Abilities Upgrades
      this.writeVInt(5)
    }

    this.writeDataReference(5, 1) // Coins
    this.writeVInt(1337)
    this.writeDataReference(5, 5) // Chips
    this.writeVInt(228)
    this.writeDataReference(5, 6) // Elixir
    this.writeVInt(666)

    this.writeVInt(unlocks.length)
    for(let i = 0; i < unlocks.length; i++){
      this.writeDataReference(16, i) // Trophies
      this.writeVInt(2000)
    }

    this.writeVInt(unlocks.length)
    for(let i = 0; i < unlocks.length; i++){
      this.writeDataReference(16, i) // Trophies
      this.writeVInt(2000)
    }

    this.writeVInt(3)
    this.writeVInt(5)
    this.writeVInt(1)
    this.writeVInt(156)
    this.writeVInt(5)
    this.writeVInt(5)
    this.writeVInt(2)
    this.writeVInt(5)
    this.writeVInt(6)
    this.writeVInt(5)
    
    this.writeVInt(0)
    this.writeVInt(1488) // Gems
    this.writeVInt(1488) // Gems
    this.writeVInt(40)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(2) // TutorialState
    this.writeVInt(2017189)
  }
}

module.exports = OwnHomeDataMessage
