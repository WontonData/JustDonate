<template>
  <div>
    <wallet-item  :wallet-data="walletData" @connWallet="connWallet"/>
    <a href="https://portal.conflux-chain.org/" target="_blank"><p>了解Conflux钱包的更多信息</p></a>
  </div>
</template>

<script>
import conflux from "@/assets/img/wallet/conflux.png";
import WalletItem from "@/components/wallet/WalletItem";
export default {
  name: "ConnDialog",
  components: {WalletItem},
  data() {
    return {
      walletData: [
        {
          name: 'ConfluxPortal', img: conflux
        }
      ]
    }
  },
  methods: {
    connWallet(wallet) {
      this.$emit("connWallet", wallet)
    }
  }
}
</script>

<style scoped>
a {
  text-decoration:none;
}
p {
  text-align: center;
  color: #1e2947;
}
</style>