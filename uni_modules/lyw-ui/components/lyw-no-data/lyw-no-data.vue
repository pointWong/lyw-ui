<template>
	<view class="wrap">
		<image v-if="imgShow" :style="{ width: width,height:height, marginTop: marginTop }" :lazy-load="true" mode="widthFix" :src="url"
			@error="imgloadError"></image>
		<text class="text">{{ text }}</text>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from "vue";
	defineProps({
		text: {
			type: String,
			default: '没有查询到相关数据哦~'
		},
		url: {
			type: String,
			default: 'https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/10/18/ae9c75ce06bb4bf3a3aaa1bd8e879838.png'
		},
		width: {
			type: String,
			default: '270rpx'
		},
		height: {
			type: String,
			default: 'auto'
		},
		marginTop: {
			type: String,
			default: '90rpx'
		}
	})
	const imgShow = ref(false)
	onMounted(()=>{
		setTimeout(()=>{
			imgShow.value = true
		},50)
	})
	const imgloadError = () => {
		imgShow.value = false
		setTimeout(()=>{
			imgShow.value = true
		}, 500);
	}
</script>

<style scoped>
	.wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.noDate {
		/* width: 100rpx; margin-top: 90rpx; */
		/* width: 200rpx; margin-top: 90rpx; */
	}

	.text {
		/* font24 c999 mgt50 */
		font-size: 24rpx;
		color: #999;
		margin-top: 50rpx;
	}
</style>
