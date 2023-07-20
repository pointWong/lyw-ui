<template>
	<view class="search-input-wrap" :style="{backgroundColor:bgColor,height:height+'rpx',borderRadius:height/2+'rpx'}">
		<image style="height: 26rpx;width: 26rpx;" class="search-icon" src="./image/search.png" mode="widthFix"></image>
		<!-- #ifdef MP-ALIPAY -->
		<input class="input" style="background-color: transparent;font-size: 28rpx;" type="text" v-model="value" :placeholder="placeholder" :placeholder-style="placeholderStyle">
		<!-- #endif -->
		<!-- #ifndef MP-ALIPAY -->
		<input class="input" style="background-color: transparent;font-size: 28rpx;" type="text" v-model="value" :placeholder="placeholder" :placeholder-style="placeholderStyle">
		<!-- #endif -->
		<view class="clear-icon" @click="clearInputValue" v-if="value">
			<image class="clear-img" style="height: 26rpx;width: 26rpx;"  src="./image/clear.png" mode="aspectFill"></image>
		</view>
		<view class="btn" @click="search">搜索</view>
	</view>
</template>

<script setup>
	import {
		computed
	} from "vue";
	const props = defineProps({
		bgColor: String,
		height: {
			type: Number,
			default: 64
		},
		modelValue: String,
		placeholder: {
			type: String,
			default: '请输入'
		},
		placeholderStyle:{
			type:String,
			default:''
		}
	})
	const emit = defineEmits(['update:modelValue', 'on-search'])
	const value = computed({
		get() {
			return props.modelValue
		},
		set(value) {
			emit('update:modelValue', value)
		}
	})
	const clearInputValue = () => {
		value.value = ''
	}
	const search = () => {
		emit('on-search')
	}
</script>

<style lang="scss" scoped>
	.search-input-wrap {
		display: flex;
		align-items: center;
		background-color: #fff;
		padding: 0 10rpx;
		padding-left: 20rpx;
		border: 1rpx solid #eee;
		.input {
			flex-grow: 1;
			flex-shrink: 1;
			color: #333;
			margin-left: 10rpx;
		}
		.clear-icon{
			height: 50rpx;
			width: 50rpx;
			flex-shrink: 0;
			margin-left: 10rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			.clear-img{
				display: block;
			}
		}
		.btn {
			width: 105rpx;
			height: 50rpx;
			margin-left: 10rpx;
			background: #E61673;
			border-radius: 25rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			line-height: 50rpx;
			color: #FFFFFF;
			display: flex;
			align-items: center;
			justify-content: center;
		}
	}
</style>
