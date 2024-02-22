<template>
  <view class="divDate_status d_flex d_between">
    <view class="d_flex d_column_center">
      <lyw-datepicker v-model="params.startDate" :placeHolder="`开始日期`"
        :styles="{ height: '50rpx', fontSize: '24rpx', padding: '0 6rpx', minWidth: '150rpx', textAlign: 'center' }"
        @change="dateChange"></lyw-datepicker>
      <view class="shot-line"></view>
      <lyw-datepicker v-model="params.endDate" :placeHolder="`结束日期`"
        :styles="{ height: '50rpx', fontSize: '24rpx', padding: '0 6rpx', minWidth: '150rpx', textAlign: 'center' }"
        @change="dateChange"></lyw-datepicker>
    </view>
    <view class="day-gaps d_flex d_column_center">
      <view class="item d_flex d_column_center d_center" :class="{ active: current == item.value }"
        v-for="(item, index) in dateGaps" :key="index" @click="clickDayGapItem(item)">{{ item.name }}</view>
    </view>
  </view>
</template>

<script setup>
import { ref, reactive, watch } from 'vue'
import { formatDate } from '../../utils/common'

const ONEDAYMILISECONDS = 24 * 60 * 60 * 1000
// emit('getChange', [start,end])
const props = defineProps({
  time: {
    type: Array,
    default() {
      return []
    }
  },
  dateGaps: {
    type: Array,
    default() {
      return [
        {
          name: '今日',
          value: 0
        },
        {
          name: '昨日',
          value: -1
        },
        {
          name: '近7天',
          value: 6
        },
        {
          name: '近30天',
          value: 29
        }
      ]
    }
  }
})
const params = reactive({
  startDate: undefined,
  endDate: undefined
})

const setCurrentDayGapValue = () => {
  const today = formatDate(new Date().getTime(), 'yyyy-MM-dd')
  if (today == params.endDate) {
    current.value = Math.floor((new Date(today).getTime() - new Date(params.startDate).getTime()) / ONEDAYMILISECONDS)
  } else {
    const yesterDay = formatDate(new Date(new Date(today).getTime() - 1 * ONEDAYMILISECONDS), 'yyyy-MM-dd')
    if (params.startDate == yesterDay && params.endDate == yesterDay) {
      current.value = -1
    } else {
      current.value = undefined
    }
  }
  }

const emit = defineEmits(['getChange'])
const dateChange = () => {
  emit('getChange', [params.startDate, params.endDate])
  setCurrentDayGapValue()
}

const current = ref(0)
const clickDayGapItem = (gap) => {
  if(current.value == gap.value){
    params.startDate = undefined
    params.endDate = undefined
    emit('getChange', [undefined, undefined])
    return
  }
  current.value = gap.value
  if (current.value == -1) {
    params.startDate = formatDate(new Date(new Date().getTime() - 1 * ONEDAYMILISECONDS), 'yyyy-MM-dd')
    params.endDate = formatDate(new Date(new Date().getTime() - 1 * ONEDAYMILISECONDS), 'yyyy-MM-dd')
  } else {
    params.startDate = formatDate(new Date(new Date().getTime() - current.value * ONEDAYMILISECONDS), 'yyyy-MM-dd')
    params.endDate = formatDate(new Date(), 'yyyy-MM-dd')
  }
  emit('getChange', [params.startDate, params.endDate])
}

watch(
  () => props.time,
  (newTime) => {
    params.startDate = newTime[0]
    params.endDate = newTime[1]
        setCurrentDayGapValue()
  },
  { immediate: true, deep: true }
)
</script>

<style lang="scss" scoped>
.divDate_status {
  box-sizing: border-box;
  width: 100%;
  height: 40rpx;
  background: #fff;
  // border-bottom: 1rpx solid #ccc;
  /* #ifdef MP-WEIXIN */
  padding: 10rpx;
  /* #endif */
}

.day-gaps {
  .item {
    box-sizing: border-box;
    height: 50rpx;
    border-radius: 5rpx;
    padding: 0 6rpx;
    min-width: 75rpx;
    border: 1rpx solid #999;
    color: #999;
    font-size: 24rpx;

    &.active {
      background-color: #e61673;
      border-color: #e61673;
      color: white;
      font-size: 26rpx;
      font-weight: 600;
    }
  }

  .item+.item {
    margin-left: 10rpx;
  }
}

.shot-line {
  width: 10rpx;
  border-bottom: 1px solid #333;
  margin: 0 10rpx;
}
.d_flex{
  display: flex;
}
.d_between{
  justify-content: space-between;
}

.d_column_center{
  align-items: center;
}
</style>
