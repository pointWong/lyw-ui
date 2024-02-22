<template>
  <view class="lpgwrap" :style="styles">
    <view class="content">
      <view class="slh"></view>
      <view class="item-wrap" :class="{ last: i == processList.length - 1, former: i < current, current: i == current }" v-for="(item, i) in processList" :key="i">
        <view class="item">
          <view class="circle">
            <image v-if="i < current" style="height: 16rpx; width: 18rpx" src="./images/red_sl.png" mode="widthFix"></image>
            <view v-else class="cicon">{{ i + 1 }}</view>
          </view>
          <view class="name">{{ item.name }}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { watch, ref } from 'vue'

const props = defineProps({
  styles: {
    type: Object,
    default() {
      return {
        height: '170rpx'
      }
    }
  },
  list: {
    type: Array,
    default() {
      return []
    }
  },
  current: {
    type: Number,
    default: 1
  }
})
const processList = ref([])
watch(
  () => props.list,
  (val) => {
    if (val.length) {
      processList.value = val
    }
  },
  {
    immediate: true
  }
)
</script>

<style lang="scss" scoped>
.lpgwrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 100rpx;
  font-size: 24rpx;
  color: #999;
  .content {
    position: relative;
    display: flex;
    justify-content: space-between;
    width: 100%;
    .slh {
      position: absolute;
      left: 0;
      top: 18rpx;
      width: 100%;
      border-top: 1px dashed #ccc;
    }
  }
  .item-wrap {
    display: flex;
    .item {
      position: relative;
      .circle {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 36rpx;
        width: 36rpx;
				background-color: white;
        border: 2rpx solid #ccc;
        border-radius: 50%;
				box-shadow: 0rpx 0rpx 10rpx 10rpx #fff;
      }
      .name {
        white-space: nowrap;
        position: absolute;
        transform: translate3d(-50%, 0, 0);
        margin-left: 18rpx;
        margin-top: 14rpx;
      }
    }

    &.former {
      .item {
        .circle {
          border-color: #e61673;
        }
      }
    }
    &.current {
      .item {
        .circle {
          background-color: #e61673;
          border-color: #e61673;
          color: white;
        }
        .name {
          color: #e61673;
        }
      }
    }
  }
}
</style>
