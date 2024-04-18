<template>
	<uni-popup ref="popup" type="bottom" :safeArea="false">
		<view class="wrap">
			<view class="item">{{phone}}</view>
			<view class="item call" @click="makeCall">{{t('common.call')}}</view>
			<view class="item cancel mgt10" :style="{paddingBottom:padb+'px'}" @click="close">{{t('common.cancel')}}</view>
		</view>
	</uni-popup>
</template>

<script setup>
import { ref } from "vue";
import {
		initVueI18n
	} from '@dcloudio/uni-i18n'
	import messages from './i18n/index.js'
	const {
		t
	} = initVueI18n(messages)

const props = defineProps({
	phone:{
		type:[Number,String],
		default:'1370003030'
	}
})

const popup = ref(null)
const padb = ref(0)
const show = () => {
	popup.value.open()
	const info = uni.getWindowInfo()
	const { screenHeight, safeArea } = info
	const { bottom } = safeArea
	padb.value = screenHeight - bottom
}
const close = () => {
	popup.value.close()
}
const makeCall = () => {
	console.log('props.phone',props.phone)
	uni.makePhoneCall({
		phoneNumber: props.phone
	})
	popup.value.close()
}
defineExpose({
	show,
	close,
	padb
})
</script>

<style lang="scss" scoped>
	.wrap{
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		overflow: hidden;
		background-color: #f5f5f5;
		text-align: center;
		.item{
			background-color: #fff;
			height: 100rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			color: #999;
			font-size: 30rpx;
			&.call{
				border-top: 1rpx solid #F3F4F5;
				font-size: 30rpx;
				color: #333;
			}
			&.call,&.cancel{
				font-size: 30rpx;
				color: #333;
			}
		}
	}
</style>