const PiranhaMessage = require('../../PiranhaMessage')
const LeaderboardMessage = require('../Server/LeaderboardMessage')

class GetLeaderboardMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 14403
    this.version = 0
  }

  decode () {
    this.isLocal = this.readBoolean()
    this.leaderboardType = this.readVInt()
    this.brawler = this.readDataReference()
  }

  process () {
    const payload = {
        isLocal: this.isLocal,
        leaderboardType: this.leaderboardType,
        brawler: this.brawler
    }
    new LeaderboardMessage(this.client, payload).send()
  }
}

module.exports = GetLeaderboardMessage
