const PiranhaMessage = require('../../PiranhaMessage')

class LoginOKMessage extends PiranhaMessage {
  constructor (client, lowID, token) {
    super()
    this.id = 20104
    this.client = client
    this.version = 1

    this.lowID = lowID
    this.token = token
  }

  encode () {
    this.writeLong(this.lowID[0], this.lowID[1])
    this.writeLong(this.lowID[0], this.lowID[1])
    
    this.writeString(this.token);
    this.writeString("0")
    this.writeString("G:325378671")
    
    this.writeInt(2)
    this.writeInt(57)
    this.writeInt(2)
    
    this.writeString("integration")
    
    this.writeInt(0)
    this.writeInt(0)
    this.writeInt(0)
    
    this.writeString()
    this.writeString()
    this.writeString()
    
    this.writeInt(0)
    
    this.writeString()
    this.writeString("EN")
    this.writeString()
    
    this.writeInt(1)
    
    this.writeString()
    this.writeString()
    this.writeString()
  }
}

module.exports = LoginOKMessage
