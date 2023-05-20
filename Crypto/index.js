const RC4 = require('simple-rc4');

class CryptoRc4 {
  constructor() {
      this.key = Buffer.from('fhsd6f86f67rt8fw78fw789we78r9789wer6re');
      this.nonce = Buffer.from('nonce');
      this.RC4_Stream = new RC4(Buffer.concat([this.key, this.nonce]));
      this.RC4_Stream.update(Buffer.concat([this.key, this.nonce]));
      this.RC4_Stream2 =  new RC4(Buffer.concat([this.key, this.nonce]));
      this.RC4_Stream2.update(Buffer.concat([this.key, this.nonce]));
  }

  decrypt(data) {
      const decryptedData = this.RC4_Stream.update(data);
      return decryptedData;
  }

  encrypt(data) {
      const encryptedData = this.RC4_Stream2.update(data);
      return encryptedData;
  }
}

module.exports = CryptoRc4