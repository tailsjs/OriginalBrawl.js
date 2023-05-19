const PiranhaMessage = require('../../PiranhaMessage')
const LoginOKMessage = require('../Server/LoginOKMessage')
const OwnHomeDataMessage = require('../Server/OwnHomeDataMessage')

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
    await new LoginOKMessage(this.client, this.lowID[1], this.token).send()
    await new OwnHomeDataMessage(this.client).send()
  }
}

module.exports = TitanLoginMessage
