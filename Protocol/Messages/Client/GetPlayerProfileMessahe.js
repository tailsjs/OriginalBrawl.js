const PiranhaMessage = require('../../PiranhaMessage')
const PlayerProfileMessage = require("../Server/PlayerProfileMessage")

class GetPlayerProfileMessahe extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14113
    this.version = 0
  }

  decode () {
    this.lowID = this.readLong()
  }

  process () {
    new PlayerProfileMessage(this.client, this.lowID).send()
  }
}

module.exports = GetPlayerProfileMessahe
