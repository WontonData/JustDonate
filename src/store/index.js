import portal from "network/conflux-portal";
import contract from "network/conflux-contract";
import {contractDonateFactory} from "@/network/conflux";
import Vue from "vue";
import Vuex from "vuex";
import {util} from "js-conflux-sdk";

Vue.use(Vuex);

//const users = require("./public.json");

export default new Vuex.Store({
  state: {
    conflux: null, //portal.conflux
    contractVote: null, //portal.contract
    contractDonateFactory: null, //portal.contract
    contractDemandFactory: null, //portal.contract
    contractCharityFactory: null, //portal.contract
    account: null, //portal.getAccount()
    balance: null, //portal.getAccount()
    walletDialog: false, //portal.getAccount()
    // balance: null, //portal.getAccount()
    currentUser: {
      name: ""
    }
  },
  mutations: {
    initContract(state) {
      state.contractVote = contract.contractVote;
      state.contractDonateFactory = contract.contractDonateFactory;
      state.contractDemandFactory = contract.contractDemandFactory;
      state.contractCharityFactory = contract.contractCharityFactory;
      // state.account = portal.getAccount();
      // state.balance = portal.refreshBalance();
    },
    initAccount(state) {
      state.walletDialog = false;
      state.conflux = portal.conflux;
      state.account = portal.getAccount();
    },
    hiddenWalletDialog(state) {
      state.walletDialog = false;
    },
    showWalletDialog(state) {
      state.walletDialog = true;
    },
    checkLogin(state) {
      if (!state.account) {
        state.conflux = portal.conflux;
        state.account = portal.getAccount();
      }
    }
  },
  actions: {
    init({commit}) {
      contract.init().then(() => {
        commit("initContract");
      }).catch(err => {
        console.error(err);
      });
    },
    getAccount({commit}) {
      portal.enable().then(() => {
        commit("initAccount");
      }).catch(err => {
        console.error(err);
      });
    }
  },
  modules: {}
});
