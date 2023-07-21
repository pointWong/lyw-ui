<template>
	<uni-popup ref="paypopup" type="center" @change="change">
		<view>
			<view class="p-wrap c333 font24 t_center">
				<view class="p-title font32 fw500" style="margin-bottom: 2rpx;">汇款信息</view>
				<view class="p-item d_flex d_center d_column_center mgt30" v-for="(item,i) in paymentInfo" :key="i">
					<view class="p-item-label fw600 t_right">{{item.value}}：</view>
					<view class="p-item-value t_left oClamp">{{item.key}}</view>
					<view class="p-item-copy mgl10" @click="copyText(item.key)">复制</view>
				</view>
				<view class="p-item d_flex d_center d_column_center mgt30" v-if="!hideExtra">
					<view class="p-item-label fw600 t_right">汇款单号：</view>
					<view class="p-item-value t_left">
						<view class="oClamp">{{prepayId}}</view>
						<!-- <view class="p-item-tips mgt16 font20 c666">请将汇款单号填入银行转账附言</view> -->
					</view>
					<view class="p-item-copy mgl10" @click="copyText(prepayId)">复制</view>
				</view>
				<view class="p-btns d_flex d_center font26" style="margin-top: 102rpx;">
					<view class="p-btns-item d_flex d_center d_column_center white" @click="contact">联系我们</view>
				</view>
			</view>
			<view class="close d_flex d_column_center d_center" style="margin-top: 76rpx;">
				<image style="height: 66rpx;width: 66rpx;" src="./closeo.png" mode="widthFix" @click="close"></image>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref
	} from "vue"
	
	defineProps({
		hideExtra:Boolean
	})
	const paypopup = ref(null)
	const open = (id) => {
		prepayId.value = id
		paypopup.value.open()
	}
	const close = () => {
		paypopup.value.close()
	}
	const paymentInfo = ref([{
			value: '收款户名',
			key: '深圳市乐由我科技有限公司'
		},
		{
			value: '收款账号',
			key: '755957291910908'
		},
		{
			value: '收款银行',
			key: '招商银行'
		},
		{
			value: '支行',
			key: '深圳汉京中心支行'
		}
	])
	const prepayId = ref('0000')
	const copyText = (text) => {
		uni.setClipboardData({
			data: text,
			success: function() {
				uni.showToast({
					title:'复制成功',
				})
			}
		})
	}
	
	const emit = defineEmits(['on-change', 'on-confirm'])
	const change = (e) => {
		emit('on-change', e.show)
	}
	const contact = () => {
		emit('on-confirm')
	}
	defineExpose({
		open,
	})
</script>

<style lang="scss" scoped>
	.c333 {
		color: #333;
	}

	.c666 {
		color: #666;
	}

	.ce61673 {
		color: #e61673;
	}

	.white {
		color: #fff;
	}

	.font20 {
		font-size: 20rpx;
	}

	.font24 {
		font-size: 24rpx;
	}

	.font26 {
		font-size: 26rpx;
	}

	.font32 {
		font-size: 32rpx;
	}

	.t_center {
		text-align: center;
	}

	.t_right {
		text-align: right;
	}

	.t_left {
		text-align: left;
	}

	.fw500 {
		font-weight: 500;
	}

	.fw600 {
		font-weight: 600;
	}

	.d_flex {
		display: flex;
	}

	.d_center {
		justify-content: center;
	}

	.d_column_center {
		align-items: center;
	}

	.d_column_start {
		align-items: flex-start;
	}

	.mgl10 {
		margin-left: 10rpx;
	}

	.mgt16 {
		margin-top: 16rpx;
	}

	.mgt30 {
		margin-top: 30rpx;
	}

	.mgt66 {
		margin-top: 66rpx;
	}

	.oClamp {
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		overflow: hidden;
	}

	.p-wrap {
		width: 600rpx;
		background: #FFFFFF;
		border-radius: 25rpx;
		padding-top: 54rpx;
		padding-bottom: 50rpx;
		overflow: hidden;

		.p-item {
			&-label {
				width: 128rpx;
				flex-shrink: 0;
				flex-grow: 0;
			}

			&-value {
				width: 288rpx;
				flex-shrink: 0;
				flex-grow: 0;
			}

			&-tips {
				position: relative;
				padding: 5rpx 10rpx 5rpx;
				background: #E8E8E8;
				border-radius: 20rpx;
				margin-left: -20rpx;
				margin-right: -10rpx;
				text-align: center;

				&::before {
					content: '';
					display: block;
					height: 0;
					width: 0;
					position: absolute;
					top: -6rpx;
					left: 36rpx;
					border-top-color: transparent;
					border-left: 10rpx solid transparent;
					border-right: 10rpx solid transparent;
					border-bottom: 6rpx solid #E8E8E8;
				}
			}

			&-copy {
				width: 110rpx;
				height: 45rpx;
				background-color: #ffe6f1;
				border-radius: 23rpx;
				color: #e61673;
				display: flex;
				align-items: center;
				justify-content: center;
				line-height: 45rpx;
			}
		}
	}

	.p-btns {
		&-item {
			width: 540rpx;
			height: 70rpx;
			background: #E61673;
			border-radius: 35rpx;
		}

		&-cancel {
			background: white;
			border: 2rpx solid #999;
		}
	}
</style>
