const { NotImplementedError } = require("../lib");

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(direct = true) {
    this._direct = direct;
    this._codeFirstChar = "A".charCodeAt();
    this._codeLastChar = "Z".charCodeAt();
    this._countInAlphabet = this._codeLastChar - this._codeFirstChar + 1;
  }

  encrypt(message, key) {
    if (message !== undefined && key !== undefined) {
      return this._crypt(message, key);
    } else {
      throw new Error("Incorrect arguments!");
    }
  }

  decrypt(encryptedMessage, key) {
    if (encryptedMessage !== undefined && key !== undefined) {
      return this._crypt(encryptedMessage, key, false);
    } else {
      throw new Error("Incorrect arguments!");
    }
  }

  _crypt(msg, key, isEncrypt = true) {
    const msgArr = msg.toUpperCase().split("");
    const keyArr = key.toUpperCase().split("");

    let encryptMsgArr = [];
    let msgIndex = 0;
    let keyIndex = 0;

    while (msgIndex < msgArr.length) {
      if (this._isInAlphabet(msgArr[msgIndex])) {
        encryptMsgArr.push(
          isEncrypt
            ? this._encryptChar(msgArr[msgIndex], keyArr[keyIndex])
            : this._decryptChar(msgArr[msgIndex], keyArr[keyIndex])
        );

        msgIndex += 1;
        keyIndex = keyIndex < keyArr.length - 1 ? keyIndex + 1 : 0;
      } else {
        encryptMsgArr.push(msgArr[msgIndex]);
        msgIndex += 1;
      }
    }

    return this._direct
      ? encryptMsgArr.join("")
      : encryptMsgArr.reverse().join("");
  }

  _isInAlphabet(char) {
    return char >= "A" && char <= "Z";
  }

  _encryptChar(char, key) {
    const shift =
      key.charCodeAt() -
      this._codeFirstChar +
      char.charCodeAt() -
      this._codeFirstChar;

    return String.fromCharCode(
      (shift >= this._countInAlphabet ? shift - this._countInAlphabet : shift) +
        this._codeFirstChar
    );
  }

  _decryptChar(char, key) {
    const shift = char.charCodeAt() - key.charCodeAt();

    return String.fromCharCode(
      (shift >= 0 ? shift : shift + this._countInAlphabet) + this._codeFirstChar
    );
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
