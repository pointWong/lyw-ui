<template>
	<view class="mask" v-if="show" @click="clickMask">
		<view @click.stop>
			<slot>
			<view class="singing">
				<text>{{text||'加载中'}}</text>
				<view class="" style="width: 35rpx;" v-if="showDots">
					<view class="dots">...</view>
				</view>
			</view>
		</slot>
		</view>
	</view>
</template>

<script setup>

	const props = defineProps({
		show:Boolean,
		text:String,
		showDots:{
			type:Boolean,
			default:true
		},
		clickClose:Boolean
	})
	const emit = defineEmits(['on-close'])
	
	const clickMask = () => {
		emit('on-close')
	}
</script>

<style lang="scss" scoped>
	@keyframes doting {
		0% {
			width: 0;
		}
	
		100% {
			width: 35rpx;
		}
	}
	.mask {
		height: 100vh;
		width: 100vw;
		position: fixed;
		left: 0;
		top: 0;
		background-color: rgba(0, 0, 0, .5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 999;
		.singing {
			color: #eee;
			// transform: rotate(90deg);
			display: flex;
	
			.dots {
				width: 0%;
				overflow: hidden;
				animation: doting 1s linear infinite;
			}
		}
	}
</style>