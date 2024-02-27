<template>
  <view :class="['lyw-select', disabled ? 'disabled' : '']" :style="{ width: cwidth }">
    <view class="lyw-select-selected" :style="{ ...styles }" @click.stop="openPopup">
      <template>
        <text class="selected current" v-if="selected">{{ selected.name }}</text>
        <text class="selected" style="color: #999" v-else>{{ placeHolder || '请选择' }}</text>
        <view v-if="selected" :style="`width:${styles.height};display:flex;align-item:center;justify-content:flex-end`" @click.stop="inputChange({ detail: { value: '' } })">
          <uni-icons type="closeempty" size="24rpx"></uni-icons>
        </view>
        <uni-icons v-else type="bottom" size="24rpx"></uni-icons>
      </template>
    </view>
    <!-- <view :class="['list', { show: showList && listData.length }]" :style="{ width: cwidth }">
      <view class="list-item" v-for="(item, i) in listData" :key="i" :style="`height:${styles.height};line-height:${styles.height}`" @click.stop="selectItem(item)">{{ item.name }}</view>
    </view> -->
    <uni-popup ref="popup" type="bottom" @change="closePop" :safeArea="false">
      <view class="picker-view-wrap">
        <view class="filter-input" v-if="search">
          <view class="filter-input-content">
            <input v-model="inputKey" :placeholder="`请输入关键字`" placeholder-style="color:#999" @input="inputChange" />
            <view v-if="inputKey" @click.stop="inputChange({ detail: { value: '' } })">
              <uni-icons type="closeempty" size="30rpx"></uni-icons>
            </view>
          </view>
        </view>
        <picker-view :immediate-change="true" indicator-style="height: 50px;" :value="pickViewValues" @change="change" class="picker-view">
          <picker-view-column>
            <view class="picker-view-item" v-for="(item, i) in listData" :key="i">{{ item.name }}</view>
          </picker-view-column>
        </picker-view>
      </view>
    </uni-popup>
  </view>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { onShow } from '@dcloudio/uni-app'
import { lywNextTick } from '../../utils/common'
const props = defineProps({
  placeHolder: String,
  modelValue: {
    type: [String, Number]
  },
  search: Boolean,
  styles: {
    type: Object,
    default() {
      return {
        height: '60rpx',
        fontSize: '26rpx'
      }
    }
  },
  disabled: Boolean,
  shouldCalcWidth: Boolean,
  list: {
    type: Array,
    default() {
      return [
        {
          name: '选项一',
          value: 1
        },
        {
          name: '选项二',
          value: 2
        },
        {
          name: '选项三',
          value: 3
        }
      ]
    }
  }
})

const pickViewValue = ref(undefined)

const emit = defineEmits(['update:modelValue', 'onChange', 'on-error'])
const selected = ref(null)
const listData = ref([])
watch(
  [() => props.modelValue, () => props.list],
  async ([newVal, newList], [oldVal, oldList]) => {
    if (newList != oldList) {
      listData.value = props.list
    }
    if (props.modelValue === undefined || props.modelValue === null || props.modelValue === '') {
      listData.value = props.list
      selected.value = null
      pickViewValue.value = undefined
      return
    }
    await lywNextTick()
    selected.value = listData.value.filter((item) => item.value == props.modelValue)[0]
    if (selected.value === undefined || selected.value === null) {
      selected.value = { value: props.modelValue, name: props.modelValue }
    } else {
      pickViewValue.value = listData.value.findIndex((item) => item.value == props.modelValue)
    }
  },
  { immediate: true }
)

const inputKey = ref('')
const inputChange = (e) => {
  inputKey.value = e.detail.value
  if (selected.value && e.detail.value == selected.value.name) return
  if (!e.detail.value) {
    listData.value = props.list
    emit('update:modelValue', undefined)
    emit('onChange', undefined)
    selected.value = null
    return
  }
  listData.value = props.list.filter(({ name }) => name.indexOf(e.detail.value) != -1)
}

const popup = ref(null)
const openPopup = () => {
  if (props.disabled) return
  if (!props.list.length) {
    emit('on-error')
    return
  }
  inputKey.value = selected.value && selected.value.name
  if (!props.search) {
    listData.value = props.list
  }
  popup.value.open()
}

const change = (e) => {
  pickViewValue.value = e.detail.value[0]
  const picked = listData.value[pickViewValue.value]
  selected.value = picked
  emit('update:modelValue', picked && picked.value)
  emit('onChange', picked)
}
const pickViewValues = computed(() => {
  if (!pickViewValue.value) return []
  return [pickViewValue.value]
})

const closePop = (e) => {
  if (!e.show && (!pickViewValue.value || pickViewValue.value < 0)) {
    const firstItem = listData.value[0]
    if (firstItem) {
      pickViewValue.value = 0
      selected.value = firstItem
      emit('update:modelValue', firstItem && firstItem.value)
      emit('onChange', firstItem)
    }
  }
}

const cwidth = ref('auto')
const calcWidth = () => {
  if (!props.shouldCalcWidth) {
    return
  }
  if (props.styles.width) {
    cwidth.value = props.styles.width
    return
  }
  if (selected.value && selected.value.name) {
    cwidth.value = selected.value.name.length + 3 + 'em'
  } else if (props.placeHolder) {
    cwidth.value = props.placeHolder.length + 3 + 'em'
  } else {
    cwidth.value = '100%'
  }
}
onShow(() => {
  calcWidth()
})
</script>
<style lang="scss" scoped>
.lyw-select {
  width: 100%;
  position: relative;
  &-selected {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1rpx solid #999;
    background-color: #fff;
    border-radius: 5rpx;
    padding: 0 10rpx;
    height: 42rpx;
    color: #333;
  }
  .list {
    box-sizing: border-box;
    border: 1rpx solid #999;
    border-radius: 5rpx;
    background-color: white;
    position: absolute;
    top: 140%;
    left: 0;
    z-index: 1;
    max-height: 0rpx;
    overflow: hidden;
    opacity: 0;
    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
    &.show {
      min-height: 100rpx;
      max-height: 500rpx;
      opacity: 1;
      overflow: auto;
    }
    &-item {
      padding: 10rpx;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      transition: all 0.15s ease;
      &:active {
        background-color: #eee;
      }
    }
  }
}

.filter-input {
  display: flex;
  justify-content: center;
  padding: 30rpx 30rpx 0;
  &-content {
    display: flex;
    flex-grow: 1;
    align-items: center;

    height: 60rpx;
    border-radius: 30rpx;
    justify-content: space-between;
    border: 1px solid #ccc;
    padding: 0 10rpx;
    input {
      flex-grow: 1;
      margin-right: 30rpx;
    }
  }
}

.lyw-select.disabled {
  background-color: #f5f5f5;
}

.selected {
  white-space: nowrap;
  overflow: hidden;
  /* text-overflow: hidden; */
  text-overflow: ellipsis;

  &.current {
    color: #333;
    // font-weight: 500;
  }
}
.picker-view-wrap {
  border-top-left-radius: 10rpx;
  border-top-right-radius: 10rpx;
  overflow: hidden;
  background-color: #fff;
}
.picker-view {
  width: 100vw;
  height: 520rpx;
}
.picker-view-item {
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 30rpx;
  color: #333;
}
</style>
