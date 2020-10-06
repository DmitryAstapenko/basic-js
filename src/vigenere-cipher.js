const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor (type) {
    this.typeMachine = String(type) === 'undefined' || type ? true : false; 
  }  
  encrypt(message, key) {
    if (!message || !key) throw new Error();
    
    message = message.toUpperCase();
    let messageKey = this.getMessageKey(message, key).toUpperCase();
    let count = 0;
    let encryptArray = message.split('')      
      .map((value) => {
        let charCode = value.charCodeAt();
        if (charCode >= 65 &&  charCode <= 90) {
          return this.getEncryptChar(charCode, messageKey[count++].charCodeAt());          
        } else {
          return value;
        }   
      });

    return this.typeMachine ? encryptArray.join('') : encryptArray.reverse().join('');
  }    
  decrypt(encryptMessage, key) {
    if (!encryptMessage || !key) throw new Error();

    encryptMessage = encryptMessage.toUpperCase();
    let messageKey = this.getMessageKey(encryptMessage, key).toUpperCase();
    let count = 0;
    let decryptArray = encryptMessage.split('')      
      .map((value) => {
        let charCode = value.charCodeAt();
        if (charCode >= 65 &&  charCode <= 90) {
          return this.getDecryptChar(charCode, messageKey[count++].charCodeAt());          
        } else {
          return value;
        }   
      })

      return this.typeMachine ? decryptArray.join('') : decryptArray.reverse().join('');
  }
  getMessageKey (message, key) {
    return message.length > key.length 
      ? key.padEnd(message.length, key)
      : key.slice(0, message.length);
  }
  getEncryptChar (codeM, codeK) {    
    let codeC = codeM - 65 + codeK > 90 ? codeM - 65 + codeK - 26 : codeM - 65 + codeK;
    return String.fromCharCode(codeC);    
  }
  getDecryptChar (codeC, codeK) {
    let codeM = codeC - codeK < 0 ? codeC - codeK + 26 + 65 : codeC - codeK + 65;
    return String.fromCharCode(codeM);    
  }
}

module.exports = VigenereCipheringMachine;
