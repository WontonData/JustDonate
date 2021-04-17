<template>
  <ul class="card__list">
    <el-col :span="5" v-for="(item, index) in dataCard" :key="index">
      <el-card class="card__item card__item--blue"
               :class="'card__item--' + item.style"
               shadow="hover" :body-style="{ borderRadius: '10px' }">
        <li>
          <div class="card__info">
            <div class="info-player">
              <el-image
                  class="info-player__num"
                  :src="item.src"
                  :fit="fits"></el-image>
              <p class="info-player__name">
                <small>{{ item.title }}</small>
                <br>{{ item.num }}
              </p>
            </div>
            <div class="info-place">
              {{ item.change }}
              <sup>{{ item.fuhao }}</sup>
            </div>
          </div>
        </li>
      </el-card>
    </el-col>
  </ul>
</template>

<script>
import demand from '@/assets/img/data/demand.svg'
import donate from '@/assets/img/data/donate.svg'

export default {
  name: "DataCard",
  data() {
    return {
      fits: 'fill'
    }
  },
  props: {
    dataCard: {
      type: Array,
      default() {
        return [
          // {
          //   style: 'blue',
          //   src: donate,
          //   title: '爱心捐赠数',
          //   num: 0,
          //   change: 0,
          //   fuhao: '+'
          // },
          // {
          //   style: 'pink',
          //   src: demand,
          //   title: '捐赠需求数',
          //   num: 0,
          //   change: 0,
          //   fuhao: '-'
          // },
        ]
      }
    }
  }

}
</script>

<style scoped>

ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

.card__item {
  /*margin: 0.45rem 0 0.45rem;*/
  /*border-top: 5px solid #404040;*/
  cursor: pointer;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.card__item--blue {
  background: #e7ecff;
}

.card__item--blue p.info-player__num {
  background: #5171C3;
}

.card__item--blue:hover .info-player__name,
.card__item--blue:hover .info-place {
  color: #5171C3;
}

.card__item--pink {
  background: #ffe4ee;
}

.card__item--pink p.info-player__num {
  background: #ff82a9;
}

.card__item--pink:hover .info-player__name,
.card__item--pink:hover .info-place {
  color: #ff82a9;
}

.card__item:hover .info-player__num {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.card__info {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
}

.card__info .info-player {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
}

.card__info .info-player__num {
  width: 35px;
  height: 35px;
  line-height: 25px;
  padding: 0.55rem;
  margin: 0 0.55rem 0 0;
  text-align: center;
  overflow: hidden;
  -webkit-transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.card__info .info-player__name {
  font-weight: 600;
  line-height: 1.25;
  font-size: 24px;
  margin: 0;
}

.card__info .info-player__name small {
  font-weight: 500;
  font-size: 16px;
}

.card__info .info-place {
  margin: 0 0.25rem 0 0;
  font-size: 22px;
}

</style>
