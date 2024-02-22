<template>
	<uni-popup ref="popup" type="bottom" @change="change" :safeArea="false">
		<view class="wrap">
			<image class="close" src="./close.png" mode="widthFix" @click="closePop"></image>
			<view class="title">{{title}}</view>
			<view class="time-gap">
				<view class="weekday"></view>
				<view class="time-gap-wrap">
					<view class="time-gap-item" v-for="(item,i) in (ctimeOpts[0]?ctimeOpts[0].hourRangeList:[])"
						:key="i">{{item.hourRange}}</view>
				</view>
			</view>
			<view class="wrap-opts">
				<view class="orow" v-for="(item,i) in ctimeOpts" :key="i">
					<view class="weekday">
						<view>{{item.d}}</view>
						<view class="bold">{{item.week}}</view>
					</view>
					<view class="wrap-opts-item" v-for="(op,j) in item.hourRangeList" :key="j"
						:class="{avail:op.enough,selected:op.isSelect}" @click="selectItem(op,item)">
						<text v-if="op.enough && !op.isSelect">{{itemLabel}}</text>
						<image style="height: 30rpx;width: 36rpx;" v-if="op.isSelect" src="./selected.png"
							mode="widthFix"></image>
					</view>
				</view>
			</view>
			<view class="btn-wrap">
				<lyw-btn width="710rpx" height="90rpx" radius="45rpx" size="32rpx" title="确定" @click="confirm">
				</lyw-btn>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref,
		watch
	} from "vue";

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

	const props = defineProps({
		title: {
			type: String,
			default: '选择配送时间'
		},
		itemLabel: {
			type: String,
			default: '可预约'
		},
		type: {
			type: Number,
			default: 1
		},
		timeOpts: {
			type: Array,
			default () {
				return []
			}
		},
		selected: {
			type: Object,
			default () {
				return {}
			}
		}
	})

	const isOverNow = (date, start, end) => {
		let isOver = false
		const st = start.split(':')[0]
		const ed = end.split(':')[0]
		const now = new Date()
		let datetime = new Date(`${date.replace(/-/g, '/')} ${end}:00`).getTime()
		if (st > ed) {
			// 跨天
			datetime = datetime + (24 * 60 * 60 * 1000)
		}
		if (now.getTime() + (2 * 60 * 60 * 1000) > datetime) {
			isOver = true
		}
		return isOver
	}

	const filterTimeOpts = (list, type) => {
		if (list.length) {
			return list.map((item) => {
				item.hourRangeList = item.hourRangeList.map(sitem => {
					sitem.isSelect = false
					const {
						date
					} = item
					const {
						hourEnd,
						hourStart
					} = sitem
					// 如果是自提
					if (type == 2) {
						sitem.enough = true
					}
					if (isOverNow(date, hourStart, hourEnd)) {
						sitem.enough = false
					}
					return sitem
				})
				return item
			})
		}
		return []
	}

	

	const popup = ref(null)
	const open = async (title) => {
		// setSelectedOpt()
		// await lywNextTick()
		popup.value.open()

	}

	const setSelectedOpt = () => {
		ctimeOpts.value.forEach(ii => {
			if (ii.date == props.selected.date) {
				ii.hourRangeList.forEach(jj => {
					jj.isSelect = false
					if (jj.hourRange == props.selected.hourRange) {
						const {
							date
						} = ii
						const {
							hourEnd,
							hourStart
						} = jj
						if (isOverNow(date, hourStart, hourEnd) || !jj.enough) {
							selected.value = {}
						} else {
							jj.isSelect = true
						}
					}
				})
			}
		})
	}

	const closePop = () => {
		popup.value.close()
	}
	const emit = defineEmits(['on-confirm', 'on-change'])
	const confirm = () => {
		const {
			date,
			hourEnd,
			hourStart
		} = selected.value
		if (date && hourEnd && isOverNow(date, hourStart, hourEnd)) {
			uni.showToast({
				title:'当前时间已经超过所选时间段，请选择其他时间',
				type:'none'
			})
			return
		}
		emit('on-confirm', selected.value)
		closePop()
	}
	const change = (e) => {
		emit('on-change', e.show)
	}
	const selected = ref({})
	const selectItem = (item, p) => {
		if (item.enough) {
			const {
				date
			} = p
			const {
				hourEnd,
				hourStart
			} = item
			if (isOverNow(date, hourStart, hourEnd)) {
				uni.showToast({
					title:'当前时间已经超过所选时间段，请选择其他时间',
					type:'none'
				})
				p.enough = false
				return
			}
			ctimeOpts.value.forEach(ii => {
				ii.hourRangeList.forEach(jj => {
					jj.isSelect = false
				})
			})
			item.isSelect = true
			selected.value = Object.assign(item, p)
		}
	}
	const ctimeOpts = ref([])
	watch(() => props.timeOpts, (newOpts) => {
		console.log("🚀 ~ file: lyw-delivery-time.vue:134 ~ watch ~ newOpts:", newOpts)
		ctimeOpts.value = filterTimeOpts(newOpts,props.type)
		setSelectedOpt()
	},{immediate:true})

	watch([() => props.selected, () => props.type], () => {
		if (ctimeOpts.value.length) {
			ctimeOpts.value = filterTimeOpts(ctimeOpts.value,props.type)
			setSelectedOpt()
		}
	})
	defineExpose({
		open
	})
</script>

<style lang="scss" scoped>
	.wrap {
		background-color: #fff;
		border-top-left-radius: 15rpx;
		border-top-right-radius: 15rpx;
		text-align: center;
		position: relative;
		font-size: 26rpx;

		.close {
			width: 40rpx;
			height: 40rpx;
			position: absolute;
			right: 28rpx;
			top: 28rpx;
		}

		.title {
			padding: 40rpx 0 46rpx;
			font-size: 32rpx;
			font-weight: 500;
			font-family: PingFangSc-Medium;
		}

		.time-gap {
			display: flex;
			justify-content: stretch;
			padding: 0 32rpx;
			margin-bottom: 15rpx;
			height: 80rpx;

			.time-gap-wrap {
				flex-grow: 1;
				background-color: #f5f5f5;
				display: flex;
				align-items: center;
				border-radius: 15rpx;

				.time-gap-item {
					flex-grow: 1;
					flex-basis: 192rpx;
					flex-shrink: 1;
					@extend .center;

					&+.time-gap-item {
						border-left: 1rpx solid #ccc;
					}
				}
			}
		}

		.weekday {
			width: 75rpx;
			flex-shrink: 0;
			font-size: 24rpx;
			color: #999;
			margin-right: 20rpx;

			.bold {
				font-family: PingFangSc-Medium;
				font-weight: 500;
				color: #333;
			}
		}
	}

	.btn-wrap {
		display: flex;
		justify-content: center;
		padding-top: 20rpx;
		height: 150rpx;
		border-top: 1rpx solid #e8e8e8;
	}

	.center {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.wrap-opts {
		max-height: 700rpx;
		padding: 0 32rpx;
		overflow: auto;

		.orow {
			display: flex;
			margin-bottom: 15rpx;

			.wrap-opts-item {
				flex-grow: 0;
				flex-basis: 192rpx;
				flex-shrink: 1;
				height: 80rpx;
				background-color: #f5f5f5;
				border-radius: 10rpx;
				color: #fff;
				@extend .center;

				&.avail {
					background-color: #fd9655;
				}

				&.selected {
					background-color: #e61673;
				}

				&+.wrap-opts-item {
					margin-left: 15rpx;
				}
			}
		}
	}
</style>
