# GAMACRYPT USAGE:

### Encrypting text:
When encrypting text using the gamacrypt library, simply import the encryptAES function and use as shown below: 

```
const gamacrypt = require('gamacrypt')

const encryptedText = gamacrypt.encryptAES('Enter Text to encrypt', encryption_key)

console.log(encryptedText)

```

or

```

const {encryptAES} = require('gamacrypt')

const encryptedText = encryptAES('Enter Text to encrypt', encryption_key)

console.log(encryptedText)

```


### Decrypting text:
When decrypting text using the gamacrypt library, simply import the decryptAES function and use as shown below: 

```
const gamacrypt = require('gamacrypt')

const decryptedText = gamacrypt.decryptAES('Enter cipher text', encryption_key)

console.log(decryptedText)

```

or

```

const {decryptAES} = require('gamacrypt')

const decryptedText = decryptAES('Enter cipher text', encryption_key)

console.log(decryptedText)

```

### Compressing and Decompressing Data Streams

In order to compress or decompress data streams use the compress and decompress functions.

```

const { compress, decompress } = require('gamacrypt/compress/compress')

const read = createReadStream(source)
const write = createWriteStream(destination)

compress(read, write)

// OR

decompress(read, write)

```

It can also be used in various situations like http streams in servers. Example: 


```

const { compress, decompress } = require('gamacrypt/compress/compress')

app.get('/', (req, res) => {
    const read = createReadStream(source)

    compress(read, res)

    // OR

    decompress(read, res)
})

```

### Encrypting and Decrypting Data Streams

In order to encrypt or decrypt data streams. use the initialize an object from the AES class and use the encryptStream and decryptStream  methods. Example: 

```

const AES = require('gamacrypt/encryptions/AES/AES')

const cryptObj = new AES(encryption_key)

const read = createReadStream(source)
const write = createWriteStream(destination)

read.pipe(cryptObj.encryptStream()).pipe(write)

// OR

read.pipe(cryptObj.decryptStream()).pipe(write)


```

Same as above, It can also be used in various situations like http streams in servers. Example: 

```

const AES = require('gamacrypt/encryptions/AES/AES')
const cryptObj = new AES(encryption_key)

app.get('/', (req, res) => {
    const read = createReadStream(source)

    read.pipe(cryptObj.encryptStream()).pipe(res)

    // OR

    read.pipe(cryptObj.decryptStream()).pipe(res)

})


```


### Encrypting , Decrypyting, Compressing and Decompressing at the same time

In order to encrypt and compress a data stream or to decrypt and decompress a data stream use the 
gamacryptAES and degamacryptAES functions respectively 

```

const  {gamacryptAES, degamacryptAES} = require('gamacrypt')

const read = createReadStream(source)
const write = createWriteStream(destination)

gamacryptAES(read, write)

// OR

degamacryptAES(read, write)

```

Same as above, It can also be used in various situations like http streams in servers. Example: 


```

const { gamacryptAES, degamacryptAES } = require('gamacrypt')

app.get('/', (req, res) => {
    const read = createReadStream(source)

    gamacryptAES(read, res)

    // OR

    degamacryptAES(read, res)
})

```


### New features will be added later