<template>
	<view :class="['lyw-dropdown', disabled ? 'disabled' : '']" @click.stop="openPopup" :style="styles">
		<text class="selected current" v-if="setSelected">{{ setSelected }}</text>
		<text class="selected placeholder" v-else>{{ placeHolder }}</text>
	</view>
	<uni-popup ref="popup" type="bottom" @change="closePop" :safeArea="false">
		<view class="picker-view-wrap">
			<picker-view :immediate-change="true" indicator-style="height: 50px;" :value="pickViewValues" @change="change"
				class="picker-view">
				<picker-view-column>
					<view class="picker-view-item" v-for="(item, i) in years" :key="i">{{ item }}年</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-view-item" v-for="(item, i) in months" :key="i">{{ item }}月</view>
				</picker-view-column>
				<picker-view-column>
					<view class="picker-view-item" v-for="(item, i) in days" :key="i">{{ item }}日</view>
				</picker-view-column>
			</picker-view>
		</view>
	</uni-popup>
</template>

<script setup>
import {
	computed,
	ref,
	watch,
	nextTick,
	onMounted
} from "vue"

const props = defineProps({
	placeHolder: {
		type: String,
		default: ''
	},
	modelValue: {
		type: [String, Number],
		default: ''
	},
	styles: {
		type: Object,
		default () {
			return {
				height: '50rpx',
				fontSize: '26rpx'
			}
		}
	},
	beginToday: Boolean,
	years: {
		type: Number,
		default: 50
	},
	disabled: Boolean,

})

const emit = defineEmits(['update:modelValue', 'change'])

const years = ref([])
const months = ref([])
const days = ref([])
const setYears = (year) => {
	years.value = []
	let lastyears = year - (props.beginToday ? 0 : Math.floor(props.years / 2))
	let laterYear = Math.ceil(props.years / 2)
	for (let i = lastyears; i < year + laterYear; i++) {
		years.value.push(`${i}`)
	}
}

const setMonths = () => {
	months.value = []
	for (let i = 1; i <= 12; i++) {
		if (i < 10) {
			months.value.push(`0${i}`)
		} else {
			months.value.push(`${i}`)
		}
	}
}

const setDay = (mi) => {
	days.value = []
	const year = years.value[pickViewValues.value[0]]
	const month = months.value[mi || pickViewValues.value[1]] || 1
	let len = 30
	const dd = ['01', '03', '05', '07', '08', '10', '12']
	if (month == 2) {
		len = 28
		if (year % 4 == 0) {
			len = 29
		}
	}
	if (dd.indexOf(month) != -1) {
		len = 31
	}
	for (let i = 1; i <= len; i++) {
		if (i < 10) {
			days.value.push(`0${i}`)
		} else {
			days.value.push(`${i}`)
		}
	}
}

const setYmdList = (currentDay) => {
	if (days.value.length) return
	const date = currentDay ? new Date(currentDay) : new Date()
	const year = date.getFullYear()
	const month = date.getMonth()
	setYears(year)
	setMonths()
	setDay(month)
}

const pickViewValues = ref([])
watch(() => props.modelValue, async () => {
	if (props.modelValue) {
		setYmdList(props.modelValue)
	}
	// #ifdef APP-PLUS
	await nextTick()
	setPickViewValues()
	// #endif
	// #ifdef MP-WEIXIN
	wx.nextTick(() => {
		setPickViewValues()
	})
	// #endif
}, {
	immediate: true
})

onMounted(() => {
	setYmdList()
})

const setPickViewValues = () => {
	if (props.modelValue && props.modelValue != '') {
		let ymd = props.modelValue.split(/[-\/]/)
		const year = ymd[0]
		const month = ymd[1]
		const day = ymd[2]
		if (year) {
			pickViewValues.value[0] = years.value.findIndex(y => y == year)
		}
		if (month) {
			pickViewValues.value[1] = months.value.findIndex(m => m == month)
		}
		if (day) {
			pickViewValues.value[2] = days.value.findIndex(d => d == day)
		}
	}
}

const change = async (e) => {
	pickViewValues.value = e.detail.value
	if (pickViewValues.value[1]) {
		setDay(pickViewValues.value[1])
	}
	// #ifdef APP-PLUS
	await nextTick()
	emit('update:modelValue', setSelected.value)
	// #endif
	// #ifdef MP-WEIXIN
	wx.nextTick(() => {
		emit('update:modelValue', setSelected.value)
	})
	// #endif
}
const popup = ref(null)
const openPopup = () => {
	if (props.disabled) return
	popup.value.open()
}
const closePop = async (e) => {
	let len = pickViewValues.value.length
	if (!e.show && len < 3) {
		pickViewValues.value = pickViewValues.value.concat(new Array(3 - len).fill(0))
		// #ifdef APP-PLUS
		await nextTick()
		emit('update:modelValue', setSelected.value)
		// #endif
		// #ifdef MP-WEIXIN
		wx.nextTick(() => {
			emit('update:modelValue', setSelected.value)
		})
		// #endif
	}
	emit('change')
}

const setSelected = computed(() => {
	const year = years.value[pickViewValues.value[0]]
	const month = months.value[pickViewValues.value[1]]
	const day = days.value[pickViewValues.value[2]]
	if (year && month && day) {
		return `${year || ''}-${month || ''}-${day || ''}`
	}
	return props.modelValue
})
</script>
<style lang="scss">
.lyw-dropdown {
	box-sizing: border-box;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1rpx solid #999;
	background-color: #fff;
	border-radius: 5rpx;
	padding: 0 10rpx;
	/* #ifdef MP-ALIPAY */
	padding: 0 15rpx;
	/* #endif */
	color: #333;
}

.lyw-dropdown.disabled {
	background-color: #f5f5f5;
}

.selected {
	white-space: nowrap;
	overflow: hidden;
	text-overflow: hidden;
	// text-overflow: ellipsis;

	&.current {
		color: #333;
		// font-weight: 500;
	}

	&.placeholder {
		color: #999;
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
