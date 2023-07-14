<template>
	<uni-popup type="center" ref="lywimageswipepopup" :safeArea="false">
		<view class="image-swipe-wrap">
			<view class="close" @click="close">
				<image style="height: 24rpx;width: 24rpx;" src="./images/close_white.png" mode="widthFix"></image>
			</view>
			<view class="jfzj">{{current+1}}/{{list.length}}</view>
			<view class="lis-wrap" @click="close" v-if="showItems">
				<swiper class="swiper" circular :indicator-dots="false" :current="current"
					@change="(e) => current = e.detail.current">
					<swiper-item v-for="(img,i) in (list||[])" :key="i">
						<image class="priview" style="display: block;" :src="img" mode="aspectFit"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
	import {
		ref
	} from "vue";
	

	const props = defineProps({
		list: {
			type: [Array, String],
			default () {
				return []
			}
		},
	})
	const current = ref(0)
	const lywimageswipepopup = ref(null)
	const showItems = ref(false)
	const show = async (index) => {
		current.value = index
		lywimageswipepopup.value.open()
		showItems.value = false
		showItems.value = true
	}
	const close = () => {
		lywimageswipepopup.value.close()
	}
	defineExpose({
		show
	})
</script>

<style lang="scss" scoped>
	.swiper {
		width: 100vw;
		min-height: 100vw;
	}

	.priview {
		width: 100vw;
		min-height: 100vw;
	}

	.lis-wrap,
	.image-swipe-wrap {
		height: 100vh;
		width: 100vw;
		overflow: hidden;
	}

	.lis-wrap {
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.image-swipe-wrap {
		background-color: #000;
		position: relative;

		.close {
			position: absolute;
			height: 100rpx;
			width: 100rpx;
			top: 100rpx;
			left: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.jfzj {
			position: absolute;
			top: 130rpx;
			left: 50vw;
			margin-left: -1em;
			color: white;
			font-size: 28rpx;
		}
	}
</style>
