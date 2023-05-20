const PiranhaMessage = require('../../PiranhaMessage')
const BattleEndMessage = require('../Server/BattleEndMessage')
const ServerHelloMessage = require('../Server/ServerHelloMessage')

class AskForBattleEndMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14110
    this.version = 0
  }

  decode () {
    this.battleResult = this.readVInt()
    this.readVInt()
    this.rank = this.readVInt()
    this.slotID = this.readVInt()
    this.readVInt()

    this.players = this.readVInt() // players amount
    this.playersList = []

    for(let i = 0; i < this.players; i++){
        let brawlerID = this.readDataReference()[1]
        let skinID = this.readDataReference()[1]
        let team = this.readVInt()
        let isPlayer = this.readBoolean()
        let name = this.readString()

        this.playersList.push({
            brawlerID, skinID, team, isPlayer, name
        })
    }
  }

  process () {
    let payload = {
        battleResult: this.battleResult,
        rank: this.rank,
        playersList: this.playersList,
        battleEndType: this.rank != 0 ? 5 : 1
    }

    new BattleEndMessage(this.client, payload).send()
  }
}

module.exports = AskForBattleEndMessage
