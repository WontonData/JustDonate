<template>
  <div class="content">
    <el-row style="margin-top: 30px" v-for="(item,index) in options" :key="index">
      <el-col :span="18" style="margin-left: 12.5%">
        <el-card :body-style="{ background: 'rgba(127,149,209,0.2)' }">
          <vue-poll v-bind="options[index]" @addvote="addVote"/>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import VuePoll from 'vue-poll'
  import {mapState} from "vuex";

  export default {
    name: "VoteItem",
    computed: {
      ...mapState([ "contractVote"])
    },
    data() {
      return {
        options: [
          {
            customId:1,
            question: '平台将于2021年5月27日12:00进行V2版本升级，会涉及善款捐助手续费的调整，会将手续费调高至0.25%。',
            answers: [
              { value: 1, text: '同意/Agree', votes: 0 },
              { value: 2, text: '反对/Disagree', votes: 0 }
            ]
          },
          {
            customId:2,
            question: '平台将销毁2021年第一季度未发放的VoteToken',
            answers: [
              { value: 1, text: '同意/Agree', votes: 0 },
              { value: 2, text: '反对/Disagree', votes: 0 }
            ]
          }
        ]
      };
    },
    components: {
      VuePoll
    },
    created() {
      setTimeout(() => {
        this.init();
      }, 100)
    },
    methods: {
      init() {
        for (let i = 0; i < this.options.length; i++) {
          //获取赞同/反对数
          this.contractVote.getVotesCount(this.options[i].customId).then(res => {
            res[0][0] >= 0 ? this.options[i].answers[0].votes = res[0][0] : this.options[i].answers[0].votes = 0
            res[1][0] >= 0 ? this.options[i].answers[1].votes = res[1][0] : this.options[i].answers[1].votes = 0

          }).catch(err => {
            console.log(err)
          })
        }

      },
      addVote(obj){
        console.log(obj);
        console.log('You voted ' + obj.value + '!');
        this.$emit("voteValue",obj)
      }
    }
  }
</script>

<style>
  .question {
    font-size: 20px;
    padding: 3px;
  }
  .progress {
    margin: 10px;
  }
  .vue-poll .ans-cnt .ans-no-vote {
    text-align: center;
    border: 2px solid #aec0df;
    box-sizing: border-box;
    border-radius: 5px;
    cursor: pointer;
    padding: 5px 0;
    transition: background .2s ease-in-out;
    -webkit-transition: background .2s ease-in-out;
    -moz-transition: background .2s ease-in-out;
    background-color: #aec0df;
  }
  .vue-poll .ans-cnt .ans-no-vote .txt {
    color: #474747;
    transition: color .2s ease-in-out;
    -webkit-transition: color .2s ease-in-out;
    -moz-transition: color .2s ease-in-out;
  }
  .vue-poll .ans-cnt .ans .bg {
    position: absolute;
    width: 0;
    top: 0;
    left: 0;
    bottom: 0;
    z-index: 0;
    background-color: #aec0df;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
    transition: all .3s cubic-bezier(.5,1.2,.5,1.2);
    -webkit-transition: all .3s cubic-bezier(.5,1.2,.5,1.2);
    -moz-transition: all .3s cubic-bezier(.5,1.2,.5,1.2);
  }
  .content {
    margin-bottom: 60px;
  }
</style>