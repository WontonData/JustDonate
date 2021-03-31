import portal from "network/conflux-portal";
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
    account: null, //portal.getAccount()
    balance: null, //portal.getAccount()
    // balance: null, //portal.getAccount()
    currentUser: {
      name: ""
    }
  },
  mutations: {
    initState(state) {
      state.conflux = portal.conflux;
      state.contractVote = portal.contractVote;
      // state.contractDonateFactory = contractDonateFactory;
      state.contractDonateFactory = portal.contractDonateFactory;
      state.contractDemandFactory = portal.contractDemandFactory;
      state.account = portal.getAccount();
      // state.balance = portal.refreshBalance();
    },
    initAccount(state) {
      state.account = portal.getAccount();
    }
  },
  actions: {
    init({commit}) {
      portal.init().then(() => {
        commit("initState");
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
