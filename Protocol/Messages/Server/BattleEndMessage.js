const PiranhaMessage = require('../../PiranhaMessage')

class BattleEndMessage extends PiranhaMessage {
  constructor (client, payload) {
    super()
    this.id = 23456
    this.client = client
    this.version = 0

    this.payload = payload
  }

  encode () {
    this.writeVInt(this.payload.battleEndType) // For some reason crashes
    this.writeVInt(this.payload.battleResult)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(0)
    this.writeBoolean(false)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeDataReference(28, 9)
    this.writeBoolean(false)
    this.writeBoolean(false)
    
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)

    this.writeVInt(this.payload.playersList.length)
    
    for(let player of this.payload.playersList){
        this.writeString(player.name)
        this.writeBoolean(true)
        this.writeBoolean(false)
        this.writeBoolean(false)
        this.writeDataReference(16, player.brawler)
        player.isPlayer ? this.writeDataReference(29, player.skinID) : this.writeVInt(0)
        this.writeVInt(player.team)
    }

    this.writeVInt(0)
    //this.writeVInt(1250)
    //this.writeVInt(1250)
    
    this.writeVInt(0)

    this.writeVInt(0)

    this.writeBoolean(false)
  }
}

module.exports = BattleEndMessage
