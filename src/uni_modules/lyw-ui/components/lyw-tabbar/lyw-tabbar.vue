<template>
  <view class="wrap" :style="{ ...styles }">
    <view :class="{ item: true, current: current == item.index }" v-for="(item, index) in listData" :key="index" @click="redirectTo(`/${item.pagePath}`)">
      <view class="d_flex_column d_column_center">
        <image v-if="current == item.index" style="height: 66rpx; width: 66rpx" :src="item.selectedIconPath"></image>
        <image v-else style="height: 66rpx; width: 66rpx" :src="item.iconPath"></image>
        <view>{{ item.text }}</view>
      </view>
    </view>
  </view>
</template>
<script>
import { initVueI18n } from '@dcloudio/uni-i18n'
import messages from './i18n/index.js'
const { t } = initVueI18n(messages)
import home from './images/home.png'
import homeAt from './images/home_at.png'
import mycustomer from './images/myclients.png'
import mycustomerAt from './images/myclients_at.png'
import resources from './images/clieatrs.png'
import resourcesAt from './images/clientrs_at.png'
import mine from './images/mine.png'
import mineAt from './images/mine_at.png'
const img = {
  home,
  homeAt,
  mycustomer,
  mycustomerAt,
  resources,
  resourcesAt,
  mine,
  mineAt
}
</script>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  preKey: {
    type: String,
    default: ''
  },
  current: {
    typpe: Number,
    default: undefined
  },
  styles: {
    type: Object,
    default() {
      return {}
    }
  },
  list: {
    type: Array,
    default() {
      return [
        {
          pagePath: 'pages/home/index',
          iconPath: img.home,
          selectedIconPath: img.homeAt,
          // "text": "首页"
          index: 1,
          operatorType: [2],
          text: t('app.home')
        },
        {
          pagePath: 'pages/mycustomer/index',
          iconPath: img.mycustomer,
          selectedIconPath: img.mycustomerAt,
          index: 2,
          operatorType: [1, 2],
          // "text": "我的客户"
          text: t('app.wdkh')
        },
        {
          pagePath: 'pages/resources/index',
          iconPath: img.resources,
          selectedIconPath: img.resourcesAt,
          index: 3,
          operatorType: [1],
          // "text": "客户资源池",
          text: t('app.khzyc')
        },
        {
          pagePath: 'pages/mine/index',
          iconPath: img.mine,
          selectedIconPath: img.mineAt,
          operatorType: [1, 2],
          index: 4,
          // "text": "我的"
          text: t('app.wd')
        }
      ]
    }
  }
})
const listData = ref([])
const userInfo = uni.getStorageSync(props.preKey + 'userInfo')
let { operatorType } = userInfo || {}
operatorType = operatorType || 2
listData.value = props.list.filter((item) => item.operatorType.includes(operatorType))

const redirectTo = (url) => {
  uni.redirectTo({
    url
  })
}
</script>
<style lang="scss">
.wrap {
  position: fixed;
  width: 100vw;
  left: 0;
  bottom: 0;
  background: #fff;
  height: 98rpx;
  padding-bottom: 60rpx;
  padding-top: 10rpx;
  border-top: 1px solid #dfdfdf;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 22rpx;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #999;
  transition: all 0.3s linear;

  .item.current {
    color: #e61673;
  }
}
</style>
