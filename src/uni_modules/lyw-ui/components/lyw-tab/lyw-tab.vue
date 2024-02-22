<template>
  <view class="wrap">
    <view class="item" :class="{ 'current': modelValue == i, 'showline': showline }" :style="`color:${color}`" v-for="(item, i) in list" :key="i"
      @click="clickItem(item, i)">
      {{
        item.label }}</view>
  </view>
</template>
<script setup>
defineProps({
  list: {
    type: Array,
    default () {
      return []
    }
  },
  color:{
    type:String,
    default:"#333"
  },
  modelValue: {
    type: Number,
    default: 0
  },
  showline: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['update:modelValue', 'change'])

const clickItem = (item, i) => {
  // this.value = i
  emit('update:modelValue', item.value)
  emit('change', item.value)
}
</script>
<style lang="scss" scoped>
.wrap {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: PingFangSC-Regular, PingFang SC;
  padding: 30rpx 0 18rpx;
  border-bottom: 1rpx solid #ccc;

  .item {
    font-size: 30rpx;
    font-weight: 500;
    color: #999;
    text-align: center;

    &.current {
      color: #E61673 !important;
      font-weight: 600;
      font-family: PingFangSC-Regular, PingFang SC;
    }

    &.showline {
      &::after {
        content: '';
        display: block;
        height: 6rpx;
        background: transparent;
        border-radius: 3rpx;
        margin-top: 10rpx;
      }

      &.current {
        color: #333;
        font-family: PingFangSC-Regular, PingFang SC;

        &::after {
          background: #E61673;

        }
      }
    }



  }
}</style>