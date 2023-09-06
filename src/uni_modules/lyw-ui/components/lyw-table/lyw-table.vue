<template>
  <div class="wrap">
    <div class="biaoge">
      <div class="col" :class="{ 'flex1': !item.width }"
        :style="`text-align:${item.align};width:${item.width};min-width:${item.minWidth || 'auto'}`"
        v-for="(item, i) in columns" :key="i">
        <div class="head">{{ item.title }}</div>
        <div class="td" v-for="(tr, j) in data" :key="j">
          <div>{{ item.type == 'index' ? j + 1 : (!tr[item.key] && tr[item.key] !== 0) ? '--' : tr[item.key] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  columns: {
    type: Array,
    default () {
      return []
    }
  },
  data: {
    type: Array,
    default () {
      return []
    }
  }
})
</script>
<style lang="scss" scoped>
.wrap {
  overflow: auto;
  padding-top: 4rpx;
  background-color: white;
}

.biaoge {
  display: flex;
  line-height: 40rpx;
  font-size: 28rpx;
  color: #333;

  .col {
    .head,
    .td {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 20rpx 40rpx;
      border-bottom: .5rpx solid #ccc;
      &:nth-child(odd) {
        background-color: #e8e8e8;
      }
    }
    
    .head {
      border-top: .5rpx solid #ccc;
      background-color: #e8e8e8;
      font-size: 32rpx;
      font-weight: 600;
    }

    &.flex1 {
      flex-grow: 1;
    }
  }
}
</style>