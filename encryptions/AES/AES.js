const crypto = require('crypto')


class AES{
    constructor(key){
        this.key = crypto.createHash('sha256').update(key).digest()
        this.iv = this.key.toString('hex').slice(0, 16)
    }

    encryptText(cipher){
        const key = this.key
        let cipherObj = crypto.createCipheriv('aes-256-cbc', key, this.iv)
        let ciphertext = cipherObj.update(cipher, 'utf8', 'hex')
        ciphertext += cipherObj.final('hex')
        return ciphertext
    }

    decryptText(ciphertext){
        const key = this.key
        let decipher = crypto.createDecipheriv('aes-256-cbc', key, this.iv)
        let plainText = decipher.update(ciphertext, 'hex', 'utf8')
        plainText += decipher.final('utf8')
        return plainText
    }

    encryptStream(){
        const key = this.key
        const iv = this.iv
        const crypter = crypto.createCipheriv('aes-256-cbc', key, iv)
        return crypter
    }

    decryptStream(){
        const key = this.key
        const iv = this.iv
        const decrpyter = crypto.createDecipheriv('aes-256-cbc', key, iv)
        return decrpyter
    }

}

module.exports = AES