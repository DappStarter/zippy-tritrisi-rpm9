require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'kidney entire bright venture struggle decrease place mixture harvest opera equal gift'; 
let testAccounts = [
"0x8a8478a76efeb31bb947482ca2285063c67df599bc1b6ea1a323144a6c1de73b",
"0x06c183e2461df5824ee69ce7b5e3d6584d0341619a0e7e09d9f701ef48c927af",
"0x929865c75bea6b04194c9e301078ef6260ffcc8cf1a6e4c6b6435644843d178e",
"0x1f5f9eb52ee338e40d6dc299032a9099b3571fb689fda11f939124305d992279",
"0xf9c5e995a79c32d3f282ac33f93bf239fd3b63a590346d6cded09912ce13944b",
"0x5cd5c276b345de8c735be0bdc1fd214e1049bd4aacc700064d6485b98427251a",
"0xba0d0e1dd0bd705205231d509da53732056e387c67d3a4dc5bf18d21726f9d31",
"0x83492ee9a7798bc7855706d01d77586e987d2bd8a64030153c5bdbc03b08db3f",
"0x8cb80d19a697fd040e6fdd11a2a8d676d2365fa0e60b38fa81eb50755c94ef6e",
"0xe82f5fe4b3bafbc0b7655c49cd3e5e553861cacbb439f796949f9bc18423b89e"
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

