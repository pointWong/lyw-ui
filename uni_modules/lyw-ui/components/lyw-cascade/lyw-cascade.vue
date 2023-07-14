<template>
	<view :class="['lyw-dropdown',disabled?'disabled':'']" @click.stop="openPopup" :style="styles">
		<text class="selected current" v-if="setSelected().text && !locate">{{ setSelected().text || current}}</text>
		<text class="selected current" v-else-if="locate && current">{{ current}}</text>
		<text class="selected placeholder" v-else>{{placeHolder}}</text>
		<uni-icons type="bottom" size="24rpx" v-if="!locate"></uni-icons>
		<image style="height: 30rpx;width:23rpx" v-else src="/static/common/location.png" mode="widthFix"></image>
	</view>
	<uni-popup ref="popup" type="bottom" @change="closePop" :safeArea="false">
		<view class="picker-view-wrap">
			<picker-view :immediate-change="true" indicator-style="height: 50px;" :value="pickViewValues"
				@change="change" class="picker-view">
				<picker-view-column v-for="(c,j) in wrapList" :key="j">
					<view class="picker-view-item" v-for="(item,i) in c" :key="i">{{item.name}}</view>
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
		nextTick
	} from "vue"

	const props = defineProps({
		split:{
			type:String,
			default:''
		},
		locate: {
			type: Boolean,
			default: false
		},
		level: {
			type: Number,
			default: 3
		},
		placeHolder: {
			type: String,
			default: '请选择省、市、区'
		},
		current: {
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
		disabled: Boolean,
		list: {
			type: Array,
			default () {
				return [{
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
	
	const emit = defineEmits(['update:current','change','on-locate'])

	const pickViewValues = ref([])
	watch(() => props.current, async () => {
		console.log(props.current)
		// #ifdef APP-PLUS
		await nextTick()
		setPickViewValues(props.list)
		// pickViewValue.value = props.list.findIndex(item => item.value == props.current)
		// #endif
		// #ifdef MP-WEIXIN
		wx.nextTick(() => {
			setPickViewValues(props.list)
			// pickViewValue.value = props.list.findIndex(item => item.value == props.current)
		})
		// #endif
	}, {
		immediate: true
	})

	const setPickViewValues = (list, index = 0) => {
		const {
			current
		} = props
		if(!current)return
		for (let i = 0; i < list.length; i++) {
			let item = list[i]
			let noNewItemName = item.name.replace('新区', '')
			let noNewCurrent = current.replace('新区', '')
			if (current.indexOf(item.name) != -1 || noNewCurrent.indexOf(noNewItemName) != -1) {
				pickViewValues.value[index] = i
				if (item.child && item.child.length) {
					wx.nextTick(() => {
						setPickViewValues(item.child, index + 1)
					})
				}
				break
			}
		}
	}

	const change = async (e) => {
		pickViewValues.value = e.detail.value
		// #ifdef APP-PLUS
		await nextTick()
		emit('update:current', setSelected().text)
		emit('change', setSelected().items)
		// #endif
		// #ifdef MP-WEIXIN
		wx.nextTick(() => {
			emit('update:current', setSelected().text)
			emit('change', setSelected().items)
		})
		// #endif

	}
	const popup = ref(null)
	const openPopup = () => {
		if(props.locate){
			onLocate()
			return
		}
		if (!props.list.length || props.disabled) return
		popup.value.open()
	}
	const closePop = async (e) => {
		let len = pickViewValues.value.length
		if (!e.show && len < props.level) {
			// if(!setSelected().text){

			// }
			pickViewValues.value = pickViewValues.value.concat(new Array(props.level - len).fill(0))
			// #ifdef APP-PLUS
			await nextTick()
			emit('update:current', setSelected().text)
			emit('change', setSelected().items)
			// #endif
			// #ifdef MP-WEIXIN
			wx.nextTick(() => {
				emit('update:current', setSelected().text)
				emit('change', setSelected().items)
			})
			// #endif
		}
	}

	const setSelected = () => {
		let list = props.list
		const objArr = []
		const ss = pickViewValues.value.map((_index,i) => {
			if(!list[_index]){
				pickViewValues.value[i] = 0
			}
			let dd = list && list.length && list[_index] || list[0] || {}
			list = dd.child
			objArr.push(dd)
			return dd ? dd.name : ''
		}).join(props.split)
		return {
			text: ss,
			items: objArr
		}
	}

	const wrapList = computed(() => {
		let len = pickViewValues.value.length
		let arr = len ? (len > 2 ? pickViewValues.value : pickViewValues.value.concat(new Array(props.level - len)
			.fill(0))) : new Array(props.level).fill(0)
		let list = props.list || []
		return arr.map(_index => {
			const item = list[_index] || list[0]
			const copyList = JSON.parse((JSON.stringify(list)))
			list = item && item.child ? item.child : []
			return copyList
		})
	})

	const onLocate = () => {
		emit('on-locate')
	}
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
		background-color: #ededed;
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
