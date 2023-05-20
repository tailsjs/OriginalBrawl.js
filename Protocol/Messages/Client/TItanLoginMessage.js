const PiranhaMessage = require('../../PiranhaMessage')
const LoginOKMessage = require('../Server/LoginOKMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')
const MyAllianceMessage = require('../Server/MyAllianceMessage')
const AllianceStreamMessage = require("../Server/AllianceStreamMessage")

class TitanLoginMessage extends PiranhaMessage {
  constructor (client, bytes) {
    super(bytes)
    this.client = client
    this.id = 10101
    this.version = 0
  }

  decode () {
    this.lowID = this.readLong()
    this.token = this.readString()

    this.major = this.readVInt()
    this.build = this.readVInt()
    this.minor = this.readVInt()

    this.fingerprint = this.readString()
  }

  async process () {
    if(!this.token){
      this.lowID = [0, 1]
      this.token = "OriginalBS.js"
    }

    this.client.lowID = this.lowID[1]

    await new LoginOKMessage(this.client, this.lowID[1], this.token).send()
    await new OwnHomeDataMessage(this.client).send()
    await new MyAllianceMessage(this.client).send()
    await new AllianceStreamMessage(this.client, "OriginalBrawl.js", "You can download sources of OriginalBrawl.js here: https://github.com/tailsjs/OriginalBrawl.js").send()
  }
}

module.exports = TitanLoginMessage
