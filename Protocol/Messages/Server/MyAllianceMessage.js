const PiranhaMessage = require('../../PiranhaMessage')

class MyAllianceMessage extends PiranhaMessage {
  constructor (client) {
    super()
    this.id = 24399
    this.client = client
    this.version = 0

    this.inClub = true
  }

  encode () {
    this.writeVInt(this.inClub ? 1 : 0) // Thanks Depresive Primo for structure!
    this.writeBoolean(this.inClub)

    if(this.inClub){
        this.writeDataReference(25, 2) // Role

        this.writeLong(0, 1) // ClubID
        this.writeString("OriginalBrawl.js Club") // Club Name
        this.writeDataReference(8, 19) // Club Thumbnail
        this.writeVInt(1) // Club Type
        this.writeVInt(1) // Players Count
        this.writeVInt(2000) // Club Trophies
        this.writeVInt(0) // Required Trophies
        
        this.writeDataReference(14, 249) // Region
    }
  }
}

module.exports = MyAllianceMessage
