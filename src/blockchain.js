// blockchain definition

var u = require('square-util')

// definition of the genesis block's header
var genesisHeader = {
  version: 1,
  prevHash: u.nullHash,
  merkleRoot: u.toHash('6340383f63a22962bc62325640d75b3b634c7bfdde046093cde93201dbd1fae8'),
  time: 1517756773,
  bits: 0x1e0ffff0,
  nonce: 6219155
}

// selected block headers for verifying initial sync
var checkpoints = [
  {
    height: 4000,
    header: {
      version: 536870913,
      prevHash: u.toHash('0000053e72ca3d4c9d1bcc64d6386c7a1b730d2482a59e740847f3ba1150850a'),
      merkleRoot: u.toHash('18463ba2b54bdb24301eea2ddf1fab035882c65257becc5c265949fc463a1fec'),
      time: 1522019103,
      bits: 0x1e06082d,
      nonce: 3984793
    }
  }
]

// settings passed to Blockchain objects
// (see https://github.com/mappum/blockchain-spv)
module.exports = {
  genesisHeader,
  checkpoints
}
