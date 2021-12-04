require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid process orient venture strong regret meadow upgrade hover end army gaze'; 
let testAccounts = [
"0xecb2d5d3d6287f5636c36a820290c6d828c1d701664d01254ba0a6502085230f",
"0x49d91ce02ee0b71845bac5f7ecd893cb5198c00a4c82a329c1a98a8996e732af",
"0x98f36a9dfbd9509decde1578fa9089fa287077cd788f3ec74e6c16f26d678106",
"0x6d7b55f36de4a9d14cc167d334425f9fe6f7ebb4041649d302415068be65a5a3",
"0xe8f9c1837fc3f96e970927b98a72ca41d13b787557175d81842901d7c57d8916",
"0x21732c8a2101a0edef6114812397e082aeb4d34675b5c0e7c8adca2b06f1bde7",
"0x1cb50b5aaf5cfcb7a4db0f5b2c2a42181b33ffc9841c7727a797e14d233b7f55",
"0x51c4402a86354c3167f005d0449e60a08832eb6fd333b52caaa900532c4416d5",
"0x7b4840c90051d1459ed611e1c20d78b7ba8e4bba42487df6dd72af07b6e563e0",
"0x181de9df456d82ea16539175b916a6d44a1cf8e27ddb3d8ee812b0609e5c584c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

