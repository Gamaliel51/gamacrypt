const AES = require('./encryptions/AES/AES')
const zlib = require('zlib')


function encryptAES(plainText, key){
    let cryptObj = new AES(key)
    return cryptObj.encryptText(plainText)
}


function decryptAES(cipher, key){
    let cryptObj = new AES(key)
    return cryptObj.decryptText(cipher)
}

function gamacryptAES(inputStream, outputStream, key) {
    const zip = zlib.createDeflate()
    const zip1 = zlib.createDeflate()
    const zip2 = zlib.createDeflate()
    const zip3 = zlib.createDeflate()
    const cryptObj = new AES('myEncryptionKey')
    inputStream.pipe(zip).pipe(cryptObj.encryptStream()).pipe(zip1).pipe(zip2).pipe(zip3).pipe(outputStream)
    return
}
  
function degamacryptAES(inputStream, outputStream, key){
    const zip = zlib.createInflate()
    const zip1 = zlib.createInflate()
    const zip2 = zlib.createInflate()
    const zip3 = zlib.createInflate()
    const cryptObj = new AES('myEncryptionKey')
    inputStream.pipe(zip).pipe(zip1).pipe(zip2).pipe(cryptObj.decryptStream()).pipe(zip3).pipe(outputStream)
    return
  
}

module.exports = { encryptAES, decryptAES, gamacryptAES, degamacryptAES }