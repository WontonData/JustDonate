class ConfluxContract {
  constructor() {
  }

  async init() {
    // const account = conflux.Account(accounts);
    // console.log(account)
    // this.accounts = await this.conflux.enable()

    //投票
    this.contractVote = window.confluxJS.Contract({
      // address: "cfxtest:type.contract:acb30f0zy83vaxew8tyraj2c1g92yfmpneunkdxmb5",
      address: "cfxtest:type.contract:acbuadnh48p86puwg29cht1w824zdshdf6f9h6n4sn",
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
    //慈善
    this.contractCharityFactory = window.confluxJS.Contract({
      address: "cfxtest:type.contract:acd5g4xhzzkgeey5bha8kpswxns0ac3kk63bauugkg",
      abi: require("network/abiCharityFactory.json")
    });
    //合约
    // this.contractCharity = window.confluxJS.Contract({
    //   address: ,
    //   abi: require("network/abiCharity.json")
    // });

    console.log("Conflux portal enable success!");
  }
}

export default new ConfluxContract();
