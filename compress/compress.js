const zlib = require('zlib')


function compress(inputStream, outputStream) {
  const zip = zlib.createDeflate()
  inputStream.pipe(zip).pipe(outputStream)
  return
}

function decompress(inputStream, outputStream) {
  const zip = zlib.createInflate()
  inputStream.pipe(zip).pipe(outputStream)
  return
}

module.exports = { compress, decompress }
