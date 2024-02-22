<template>
  <view class="wrap">
    <view class="item d_flex d_column_start" v-for="(item, index) in options" :key="index">
      <view>
        <view :class="[active == index ? 'mgt6' : 'mgt10']">
          <view v-if="active == index">
            <image style="width: 15px; height: 15px; display: block" src="./img/logis_check.png" mode="widthFix"></image>
          </view>
          <view v-else class="dot_normal"></view>
        </view>
        <view class="line" :style="`height:${distance[index]}px`"></view>
      </view>
      <view class="content font28" :class="[active == index ? 'ce61673' : 'c999']" :style="{ marginLeft: index == active ? '32rpx' : '40rpx' }">
        <view class="title">{{ item.title }}</view>
        <view class="desc font24">{{ item.desc }}</view>
      </view>
    </view>
  </view>
</template>
<script setup>
import { getCurrentInstance, nextTick, onMounted, ref } from 'vue'
import { queryElBySelect } from './utils/dom'

const props = defineProps({
  active: {
    type: Number,
    default: 0
  },
  options: {
    type: Array,
    default() {
      return []
    }
  }
})

const getItemDistance = (list) => {
  const arr = []
  for (let i = 0; i < list.length - 1; i++) {
    let distance = list[i + 1].top - list[i].top
    if (i == 0) {
      distance -= uni.upx2px(24)
    } else {
      distance -= uni.upx2px(18)
    }
    arr.push(distance)
  }
  return arr
}

const distance = ref([])

const instance = getCurrentInstance()
onMounted(async () => {
  await nextTick()
  const res = await queryElBySelect('.content', instance)
  distance.value = getItemDistance(res)
  console.log("🚀 ~ file: lyw-steps.vue:59 ~ onMounted ~ distance.value:", distance.value)
})
</script>
<style lang="scss" scoped>
.item {
  .content {
    padding-bottom: 30rpx;
    .title {
      line-height: 42rpx;
    }
    .desc {
      line-height: 33rpx;
    }
  }
  .dot_normal {
    width: 11px;
    height: 11px;
    background-color: #ccc;
    border-radius: 50%;
    margin-left: 2px;
  }
  .line {
    width: 1px;
    background-color: #ccc;
    height: 0;
    margin-left: 7px;
    margin-bottom: -10rpx;
  }
}
.mgt6 {
  margin-top: 6rpx;
}
.mgt10 {
  margin-top: 10rpx;
}
.ce61673 {
  color: #e61673;
}
.c999 {
  color: #999;
}
.font28 {
  font-size: 28rpx;
}
.font24 {
  font-size: 24rpx;
}
</style>
