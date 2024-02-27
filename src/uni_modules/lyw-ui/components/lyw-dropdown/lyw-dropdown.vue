<template>
	<view :class="['lyw-select', disabled ? 'disabled' : '']" @click.stop="openPopup" :style="{ width: cwidth }">
		<view class="lyw-select-selected" :style="{ ...styles }">
			<template v-if="search && showList">
				<input v-model="inputKey" :auto-focus="true" :placeholder="placeHolder || '请选择'" :disabled="disabled"
					placeholder-style="color:#999" @click.stop @input="inputChange" />
				<view v-if="inputKey"
					:style="`height:${styles.height};width:${styles.height};display:flex;align-item:center;justify-content:flex-end`"
					@click.stop="inputChange({ detail: { value: '' } })">
					<uni-icons type="closeempty" size="24rpx"></uni-icons>
				</view>
				<uni-icons v-else type="bottom" size="24rpx"></uni-icons>
			</template>
			<template v-else>
				<text class="selected current" v-if="selected">{{ selected.name }}</text>
				<text class="selected" style="color: #999;" v-else>{{ placeHolder || '请选择' }}</text>
				<uni-icons type="bottom" size="24rpx"></uni-icons>
			</template>
		</view>
		<view :class="['list', { show: showList && listData.length }]" :style="{ width: cwidth }">
			<view class="list-item" v-for="(item, i) in listData" :key="i"
				:style="`height:${styles.height};line-height:${styles.height}`" @click.stop="selectItem(item)">{{ item.name }}
			</view>
		</view>
	</view>
</template>

<script setup>
import { ref, watch } from "vue"
import { onShow, onHide } from '@dcloudio/uni-app'
import { nextTick } from "vue";
const props = defineProps({
	placeHolder: String,
	modelValue: {
		type: [String, Number],
		default: 0
	},
	search: Boolean,
	styles: {
		type: Object,
		default () {
			return {
				height: '60rpx',
				fontSize: '26rpx'
			}
		}
	},
	disabled: Boolean,
	list: {
		type: Array,
		default () {
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

const emit = defineEmits(['update:modelValue', 'onChange'])
const selected = ref(null)
const listData = ref([])
watch([() => props.modelValue, () => props.list], async () => {
	listData.value = props.list
	if (!props.modelValue) {
		selected.value = null
		return
	}
	await nextTick()
	selected.value = props.list.filter(item => item.value == props.modelValue)[0]
	if (!selected.value) {
		emit('update:modelValue', undefined)
	}
}, { immediate: true })

const inputKey = ref('')
const inputChange = (e) => {
	inputKey.value = e.detail.value
	if (selected.value && e.detail.value == selected.value.name) return
	if (!e.detail.value) {
		listData.value = props.list
		return
	}
	listData.value = props.list.filter(({ name }) => name.indexOf(e.detail.value) != -1)
}

const showList = ref(false)
const randomNum = Math.floor(Math.random() * 1000000)
const openPopup = () => {
	if (props.disabled) return
	inputKey.value = selected.value && selected.value.name
	uni.$emit('select-toggle', randomNum)
	showList.value = true
}

const closePopup = (num) => {
	if (randomNum != num) {
		showList.value = false
	}
}

const selectItem = (item) => {
	selected.value = item
	closePopup()
	emit('update:modelValue', item.value)
	emit('onChange', item)
}

const cwidth = ref('auto')
const calcWidth = () => {
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
	uni.$on('select-toggle', closePopup)
})
onHide(() => {
	uni.$off('select-toggle', closePopup)
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
		transition: all .25s cubic-bezier(0.645, 0.045, 0.355, 1);

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
			transition: all .15s ease;

			&:active {
				background-color: #eee;
			}
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
}</style>