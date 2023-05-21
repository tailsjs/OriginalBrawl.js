const PiranhaMessage = require('../../PiranhaMessage')

class LeaderboardMessage extends PiranhaMessage { 
  constructor (client, payload) {
    super() // Thanks Depresive Primo for structure!
    this.id = 24403
    this.client = client
    this.version = 0

    this.isLocal = payload.isLocal
    this.leaderboardType = payload.leaderboardType
    this.brawler = payload.brawler
  }

  encode () {
    this.writeVInt(this.leaderboardType) // Leaderboard Type
    this.writeDataReference(this.brawler[0], this.brawler[1]) // Brawlers Leaderboard
    this.writeString(this.isLocal ? "OG" : "") // Local leaderboard
    
    if(this.leaderboardType == 0 || this.leaderboardType == 1){
        this.encodePlayerLeaderboard()
    }else if(this.leaderboardType == 2){
        this.encodeClubLeaderboard()
    }

    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeVInt(0)
    this.writeString("OG")
  }

  encodePlayerLeaderboard(){
    this.writeVInt(1) // Players count

    this.writeLogicLong(0, this.client.lowID) // Player IDs
    this.writeLogicLong(1, 2000) // Trophies
    this.writeBoolean(true) // Have any data about player?

    this.writeString("OriginalBrawl.js") // Player Name
    this.writeString("OriginalBrawl.js Club") // Club name
    this.writeVInt(666) // Player Level
    this.writeDataReference(28, 18) // Player Thumbnail
    this.writeVInt(0)
  }

  encodeClubLeaderboard(){
    this.writeVInt(1) // Clubs count

    this.writeLogicLong(0, this.client.lowID) // Player IDs
    this.writeLogicLong(1, 2000) // Trophies
    this.writeVInt(2)
    this.writeString("OriginalBrawl.js Club")
    this.writeVInt(1) // Club members count
    this.writeDataReference(8, 19) // Club Thumbnail
  }
}

module.exports = LeaderboardMessage
