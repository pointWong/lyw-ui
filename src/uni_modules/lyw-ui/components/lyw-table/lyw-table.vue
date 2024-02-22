<template>
  <view class="wrap" :style="`height:${height};overflow-x:${overflowX}`">
    <scroll-view v-if="data.length" scroll-y="true" class="biaoge content" :style="`height:${height};width:${width || 'auto'}`" @scrolltolower="scrolltolower">
      <view class="dflex">
        <view
          :class="{ col: true, vis: true }"
          :style="`flex-grow:${!item.width ? '1' : '0'};flex-shrink:${!item.width ? '1' : '0'};text-align:${item.align || 'center'};width:${item.width || 'auto'};min-width:${item.minWidth || 'auto'}`"
          v-for="(item, i) in columns"
          :key="i"
        >
          <view class="head hide" :style="{ ...headStyle }">
            <template v-if="!item.sort">{{ item.title }}</template>
            <lyw-sort
              v-else
              :text="item.title"
              :styles="{ display: 'inline-flex', opacity: 0 }"
              @on-change="
                (order) => {
                  sortChange(order, item.key)
                }
              "
            ></lyw-sort>
          </view>
          <view class="td" :class="{ nostrike: noStrike }" :style="{ ...tdStyle }" v-for="(tr, j) in data" :key="j" @click.stop="rowClick(tr)">
            <template v-if="item.type == 'index'">
              <template v-if="isRank && rankNames[j]">
                <image style="height: 40rpx; width: 40rpx" :src="rankNames[j]" mode="widthFix"></image>
              </template>
              <template v-else>{{ j + 1 }}</template>
            </template>
            <template v-else-if="'slot' in item">
              <slot :row="tr" :index="j" :column="item"></slot>
            </template>
            <template v-else>{{ !tr[item.key] && tr[item.key] !== 0 ? '--' : tr[item.key] }}</template>
          </view>
        </view>
      </view>
      <view style="width: 100vw" v-if="showLoarMore">
        <uni-load-more :status="status" />
      </view>
    </scroll-view>
    <view v-else class="w100">
      <!-- 没有查到相关数据哦 -->
      <view v-if="status == 'loading'" :style="`height:${height};display:flex;align-items:center;justify-content:center`">
        <uni-load-more :status="status" />
      </view>
      <lyw-no-data v-else-if="showNodt" :url="noDataUrl" :marginTop="noDataMarginTop" :width="noDataStyle.width" :height="noDataStyle.height" :text="noDataText" />
    </view>
    <view class="biaoge dflex header" :style="`width:${width || 'auto'}`">
      <view
        :class="{ col: true }"
        :style="{
          'flex-grow': !item.width ? '1' : '0',
          'flex-shrink': !item.width ? '1' : '0',
          'text-align': item.align || 'center',
          width: computedCalw(item, i),
          'min-width': item.minWidth || 'auto'
        }"
        v-for="(item, i) in columns"
        :key="i"
      >
        <view class="head" :style="{ ...headStyle }">
          <template v-if="!item.sort">{{ item.title }}</template>
          <lyw-sort
            v-else
            :text="item.title"
            :styles="{ display: 'inline-flex' }"
            @on-change="
              (order) => {
                sortChange(order, item.key)
              }
            "
          ></lyw-sort>
        </view>
      </view>
    </view>
  </view>
</template>
<script setup>
/**
 * 表格组件
 *
 * @template
 * @component
 * @description 一个包含表格和滚动功能的组件
 *
 * @prop {Array} columns - 表格列的配置数组
 * @prop {String} status - 加载更多的状态
 * @prop {String} height - 组件的高度
 * @prop {Array} data - 表格数据数组
 *
 * @event scrolltolower - 滚动到底部时触发的事件
 *
 */
import rank1 from './images/rank1.png'
import rank2 from './images/rank2.png'
import rank3 from './images/rank3.png'
import rank4 from './images/rank4.png'
import rank5 from './images/rank5.png'
import { ref, getCurrentInstance, nextTick, watch } from 'vue'

const queryElBySelect = (selector, instance) => {
  return new Promise((resolve, reject) => {
    uni
      .createSelectorQuery()
      .in(instance)
      .selectAll(selector)
      .fields(
        {
          rect: true,
          scrollOffset: true,
          size: true
        },
        (data) => {
          resolve(data)
        }
      )
      .exec()
  })
}

const rankNames = [rank1, rank2, rank3, rank4, rank5]

const props = defineProps({
  columns: {
    type: Array,
    default() {
      return []
    }
  },
  noDataMarginTop: {
    type: String,
    default: '140rpx'
  },
  status: {
    type: String,
    default: ''
  },
  height: {
    type: String,
    default: '100vh'
  },
  width: {
    type: String,
    default: 'auto'
  },
  data: {
    type: Array,
    default() {
      return []
    }
  },
  showLoarMore: {
    type: Boolean,
    default: true
  },
  overflowX: {
    type: String,
    default: 'auto'
  },
  headStyle: {
    type: Object,
    default() {
      return {}
    }
  },
  tdStyle: {
    type: Object,
    default() {
      return {}
    }
  },
  noStrike: {
    type: Boolean
  },
  isRank: {
    type: Boolean
  },
  showNodt: {
    type: Boolean,
    default: true
  },
  noDataUrl: {
    type: String,
    default: 'https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/10/18/ae9c75ce06bb4bf3a3aaa1bd8e879838.png'
  },
  noDataText: {
    type: String,
    default: '暂时查询不到相关数据~'
  },
  noDataStyle: {
    type: Object,
    default() {
      return {
        width: '100rpx',
        height: '100rpx'
      }
    }
  }
})
const emit = defineEmits(['scrolltolower', 'on-row-click', 'on-sort'])
const scrolltolower = (e) => {
  emit('scrolltolower')
}

let nttimer
const lywNextTick = async () => {
  // #ifdef MP-WEIXIN
  return new Promise((resolve) => {
    wx.nextTick(() => {
      resolve()
    })
  })
  // #endif
  // #ifdef MP-ALIPAY
  return new Promise((resolve) => {
    clearTimeout(nttimer)
    nttimer = setTimeout(() => {
      resolve()
    }, 0)
  })
  // #endif
  // #ifdef APP-PLUS | H5
  await nextTick()
  // #endif
}
const instance = getCurrentInstance()
const calw = ref([])
watch(
  () => props.data,
  async () => {
    await lywNextTick()
    setTimeout(async () => {
      const d = await queryElBySelect('.col.vis', instance)
      if (d) {
        calw.value = d
      }
    }, 0)
  },
  { deep: true, immediate: true }
)
const computedCalw = (item, index) => {
  if (!item.width) {
    if (calw.value[index]) {
      return calw.value[index].width + 'px'
    }
    return 'auto'
  } else {
    return item.width
  }
}

const rowClick = (row) => {
  emit('on-row-click', row)
}

const sortChange = (order, key) => {
  emit('on-sort', order, key)
}
</script>
<style lang="scss" scoped>
.dflex {
  display: flex;
}
.space-between {
  justify-content: space-between;
}
.align-center {
  align-items: center;
}
.wrap {
  padding-top: 4rpx;
  background-color: white;
  position: relative;
  overflow-x: auto;
}

.biaoge {
  // display: table-row;
  line-height: 40rpx;
  font-size: 28rpx;
  color: #333;
  min-width: 100%;
  &.content {
    position: absolute;
    left: 0;
    top: 0;
    // overflow: auto;
  }
  .col {
    // display: table-cell;
    overflow: hidden;
    .head,
    .td {
      box-sizing: border-box;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding: 20rpx 40rpx;
      border-bottom: 0.5rpx solid #ccc;
      &:nth-child(odd) {
        background-color: #e8e8e8;
      }
      &.nostrike {
        border-bottom: 0 !important;
        background-color: transparent !important;
      }
    }

    .head {
      border-top: 0.5rpx solid #ccc;
      background-color: #e8e8e8;
      font-size: 32rpx;
      font-weight: 500;
      &.hide {
        border-top: 0;
        color: transparent;
        background-color: transparent;
      }
    }

    &.flex1 {
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
  &.header {
    position: absolute;
    top: 0;
    left: 0;
    .col {
      .td {
        height: 0 !important;
        overflow: hidden;
        padding: 0rpx 40rpx;
        padding-top: 0 !important;
        padding-bottom: 0 !important;
        border-bottom: 0;
      }
    }
  }
}
</style>
