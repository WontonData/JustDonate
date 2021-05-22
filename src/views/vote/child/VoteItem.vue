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

  export default {
    name: "VoteItem",
    data() {
      return {
        options: [
          {
            customId:200,
            question: '本站将于2021年5月27日12:00进行全面整改，预计于4月1日11:59结束，整改期间无法查看本站，由此给您带来很大的麻烦，请您谅解。',
            answers: [
              { value: 1, text: '同意', votes: 53 },
              { value: 2, text: '反对', votes: 35 },
              // { value: 3, text: 'Angular', votes: 30 },
              // { value: 4, text: 'Other', votes: 10 }
            ]
          },
          {
            customId:100,
            question: '2. What\'s your favourite <strong>JS</strong> framework?',
            answers: [
              { value: 1, text: 'Vue', votes: 53 },
              { value: 2, text: 'React', votes: 35 },
              { value: 3, text: 'Angular', votes: 30 },
              { value: 4, text: 'Other', votes: 10 }
            ]
          }
        ]
      };
    },
    components: {
      VuePoll
    },
    methods: {
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