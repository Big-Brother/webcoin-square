module.exports = {
  messagePrefix: '\x18DarkCoin Signed Message:\n',
  bip32: {
    public: 0x02fe52f8,
    private: 0x02fe52cc
  },
  pubKeyHash: 0x4c,
  scriptHash: 0x10,
  wif: 0x80,
  dustThreshold: 5460 // https://Big-Brother:566e87145f7d24cf2ede7e308370070332b25882@github.com/Big-Brother/bitcore-lib-square/blob/master/lib/transaction/transaction.js#L66
}
