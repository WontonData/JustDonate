//是 Conflux Portal 的封装，本前端项目通过调用浏览器插件来完成交易的签名。
// 调用 Conflux Portal 提供的 enable 方法可以启动项目和 Conflux Portal 的连接
// （需要提前检查浏览器是否正确安装插件，在 constructor 中通过检查 window.conflux 是否为空来判断）。
// conflux-portal.js 提供了获取账户 getAccount 和发送交易 sendTransaction 两个主要的方法。
import {util} from "js-conflux-sdk";
// const util = require('js-conflux-sdk/src/util');
import {conflux} from "@/network/conflux";

class ConfluxPortal {
  constructor(conflux) {
    if (typeof conflux === "undefined") {
      throw new Error("No Conflux detected");
    }
    if (!conflux.isConfluxPortal) {
      console.debug("Unknown Conflux.");
    }
    this.conflux = conflux;
  }

  //启动项目和 Conflux Portal 的连接
  // （需要提前检查浏览器是否正确安装插件，
  // 在 constructor 中通过检查 window.conflux 是否为空来判断）
  async init() {
    // const account = conflux.Account(accounts);
    // console.log(account)
    this.accounts = await this.conflux.enable()

    //投票
    this.contractVote = window.confluxJS.Contract({
      address: "0x8dfe9ec6A9dAE871Cd73E0f00110Fa392D5B740A",
      abi: require("network/abiVote.json")
    });
    //捐赠
    this.contractDonateFactory = window.confluxJS.Contract({
      address: "cfxtest:type.contract:acfwg4sduktcdgrh19x53fh49rfrwerp86u2tr2xh8",
      abi: require("network/abiDonateFactory.json")
    });
    //需求
    this.contractDemandFactory = window.confluxJS.Contract({
      address: "cfxtest:type.contract:acdarabvxm7berpv3f3ch284jng1pypkujukem1eut",
      abi: require("network/abiDemandFactory.json")
    });

    console.log(this.contractVote);

    console.log("Conflux portal enable success!");
  }

  async enable () {
    this.accounts = await this.conflux.enable()
    console.log(this.accounts);

  }

  //获取账户
  getAccount() {

    if (!this.accounts) {
      // return null;
      throw new Error("Please enable Conflux Portal first");
    }
    return this.accounts[0];
  }

  //调用 Conflux SDK 的 getBalance 方法来更新账户余额信息
  async refreshBalance() {
    if (!this.accounts) {
      return
    }
    const balance = await conflux.getBalance(this.getAccount())
    console.log(util.unit.fromDripToCFX(balance))
    return util.unit.fromDripToCFX(balance)
    // this.setState({ balance: util.unit.fromDripToCFX(balance) })
  }

  //发送交易
  // async sendTransaction (params) {
  //   return new Promise((resolve, reject) => {
  //     this.conflux.sendAsync({
  //       method: 'cfx_sendTransaction',
  //       params: [params],
  //       from: params.from,
  //       gasPrice: '0x09184e72a000', // 在ConfluxPortal确认期间由用户自定义。
  //       gas: '0x2710',  // customizable by user during ConfluxPortal confirmation.
  //       value: '0x00',
  //     }, (err, data) => {
  //       if (err) {
  //         reject(err)
  //       } else {
  //         resolve(data)
  //       }
  //     })
  //   })
  // }

}

export default new ConfluxPortal(window.conflux);
