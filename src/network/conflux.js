import { Conflux, util } from 'js-conflux-sdk'

// const util = require('js-conflux-sdk/src/util');
// const format = require('js-conflux-sdk/src/util');

//是 js-conflux-sdk 的封装。
// js-conflux-sdk 是由 Conflux 提供的 JavaScript SDK，
// 本前端项目使用 SDK 来连接 Conflux 网络，和合约进行交互以及构造合约中的实例。
export const conflux = new Conflux({
  // url: "http://test.confluxrpc.org",
  // url: "https://testnet-rpc.conflux-chain.org.cng",
  // url: "https://test.confluxrpc.org/v2",
  url: "https://main.confluxrpc.com",
  defaultGasPrice: 90000000, // The default gas price of your following transactions
  defaultGas: 90000000, // The default gas of your following transactions
  logger: console,
  networkId: 1029
})

export const DonateFactory = conflux.Contract({
  abi: require("network/abiDonateFactory.json"),
  address: "cfxtest:type.contract:acfwg4sduktcdgrh19x53fh49rfrwerp86u2tr2xh8",
});
export const DemandFactory = conflux.Contract({
  abi: require("network/abiDemandFactory.json"),
  address: "cfxtest:type.contract:acdarabvxm7berpv3f3ch284jng1pypkujukem1eut",
});

// console.log(DemandFactory.index().toString());

// export const contractDonateFactory = {
//   name: 'contractDonateFactory',
//   abi: require("network/abiDonateFactory.json"),
//   contract: conflux.Contract({
//     abi: require("network/abiDonateFactory.json"),
//     address: "cfxtest:type.contract:acfwg4sduktcdgrh19x53fh49rfrwerp86u2tr2xh8",
//   }),
// }

// this.contractDonateFactory = window.confluxJS.Contract({
//   address: "cfxtest:type.contract:acfwg4sduktcdgrh19x53fh49rfrwerp86u2tr2xh8",
//   abi: require("network/abiDonateFactory.json")
// });

// await conflux.getTransactionByHash();
// await conflux.updateNetworkId();
// util.format.hexAddress('cfx:aak2rra2njvd77ezwjvx04kkds9fzagfe6ku8scz91');
// console.log(format.hexAddress(1))
// export const account = util.format.hexAddress('cfxtest:aasb661u2r60uzn5h0c4h63hj76wtgf552r9ghu7a4').then(res => {
//   console.log(res)
// });

export default conflux