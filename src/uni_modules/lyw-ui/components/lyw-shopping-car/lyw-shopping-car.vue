<template>
	<!-- #ifdef APP-PLUS -->
	<view class="shoppingCar" @click="navTo">
		<image src="./shoppingCar.png" mode="widthFix"></image>
		<view v-if="params.show"></view>
	</view>
	<!-- #endif -->
	<!-- #ifdef MP-WEIXIN | H5 -->
	<view class="shoppingcar_minip" @click="navTo">
		<image v-if="!params.show" style="width: 108rpx;height: 108rpx;" src="./shopping_car_d.png" mode="aspectFill"></image>
		<image v-else style="width: 108rpx;height: 108rpx;" src="./shopping_car.png" mode="aspectFill"></image>
	</view>
	<!-- #endif -->
</template>

<script>
	import { reactive } from 'vue'
	
	export default {
		props: {
			url: String,
			show: Boolean,
		},
		watch: {
			url(v) {
				this.params.url = v;
			},
			show(v) {
				this.params.show = v;
			},
		},
		setup(props, { emit }) {
			const params = reactive({})
			for(let key in props){
				params[key] = props[key]
			}
			
			const navTo = () => {
				if (params.url) {
					uni.navigateTo({
						url:params.url
					})
				}
			}
			
			return {
				params,
				navTo
			}
		}
	}
</script>

<style scoped>
	/* #ifdef MP-WEIXIN */
	.shoppingcar_minip{
		position: fixed;
		bottom: 150rpx;
		right: 20rpx;
		z-index: 999;
	}
	/* #endif */
	/* #ifdef APP-PLUS */
	.shoppingCar{
		position: absolute; 
		right: 44rpx;
		z-index: 999;
		top: calc((44px - 40rpx) / 2);
	}
	.shoppingCar image{
		width: 32rpx; height: 30rpx;
	}
	.shoppingCar view{
		width: 8rpx; 
		height: 8rpx; 
		background: #ff5050; 
		border-radius: 50%;
		position: absolute; 
		right: -10rpx; 
		top: 0;
	}
	/* #endif */
</style>
