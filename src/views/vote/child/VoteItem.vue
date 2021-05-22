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
            question: '本站将于2021年5月27日12:00进行全面整改，预计于4月1日11:59结束，整改期间无法查看本站，由此给您带来很大的麻烦，请您谅解。',
            answers: [
              { value: 1, text: '同意', votes: 0 },
              { value: 2, text: '反对', votes: 0 },
              // { value: 3, text: 'Angular', votes: 30 },
              // { value: 4, text: 'Other', votes: 10 }
            ]
          },
          {
            customId:2,
            question: '2. What\'s your favourite <strong>JS</strong> framework?',
            answers: [
              { value: 1, text: 'Vue', votes: 0 },
              { value: 2, text: 'React', votes: 0 },
              { value: 3, text: 'Angular', votes: 0 },
              { value: 4, text: 'Other', votes: 0 }
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