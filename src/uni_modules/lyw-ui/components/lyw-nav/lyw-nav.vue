<template>
  <!-- #ifdef MP-WEIXIN | APP-PLUS | H5 -->
  <view class="nav-fixed" :class="{'border':border}">
    <uni-nav-bar
      :backgroundColor="bgColor"
      :color="color"
      :leftIcon="leftIcon"
      statusBar="true"
      :border="false"
      @clickLeft="clickLeft"
    >
      <lyw-nav-title :style="{ width: '100%' }"
        ><text :style="`color:${color}`">{{ title }}</text></lyw-nav-title
      >
    </uni-nav-bar>
    <slot></slot>
  </view>
  <!-- #endif -->
  <!-- #ifdef MP-ALIPAY -->
  <view
    class="nav-fixed"
    :backgroundColor="bgColor"
    :style="`height: calc(${statusBarHeight}px + 44px)`"
  ></view>
  <!-- #endif -->
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "title",
    },
    leftIcon: {
      type: String,
      default: "-",
    },
    border: {
      type: Boolean,
      default: true,
    },
    bgColor: {
      type: String,
      default: "#fff",
    },
    color: String,
  },
  setup(props, { emit }) {
    const statusBarHeight = uni.getSystemInfoSync().statusBarHeight;
    const { leftIcon } = props;
    const clickLeft = async () => {
      if (leftIcon != "-") {
        try {
          uni.navigateBack();
        } catch (e) {
          //TODO handle the exception
          uni.switchTab({
            url: "/pages/home/index",
            fail() {
              emit("navigateTo");
            },
          });
        }
      }
    };
    return {
      clickLeft,
      statusBarHeight,
    };
  },
};
</script>

<style scoped>
.nav-fixed {
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  z-index: 3;
}
.nav-fixed.border{
  border-bottom: 1rpx solid #ededed;
}
</style>
