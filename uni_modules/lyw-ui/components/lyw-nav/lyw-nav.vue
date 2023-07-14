<template>
	<!-- #ifdef MP-WEIXIN | H5 | APP-PLUS -->
	<view class="nav-fixed">
		<uni-nav-bar :backgroundColor="bgColor" :color="color" :leftIcon="leftIcon" statusBar="true" :border="border"
			@clickLeft="clickLeft">
			<lyw-nav-title :style="{width: '100%'}"><text :style="`color:${color};font-weight:${fw}`">{{title}}</text></lyw-nav-title>
		</uni-nav-bar>
	</view>
	<!-- #endif -->
	<!-- #ifdef MP-ALIPAY -->
	<view class="nav-fixed" :backgroundColor="bgColor" :style="`height: calc(${statusBarHeight}px + 44px)`"></view>
	<!-- #endif -->
</template>

<script>
	export default {
		props: {
			title: {
				type: String,
				default: '标题'
			},
			leftIcon: {
				type: String,
				default: '-'
			},
			border: {
				type: Boolean,
				default: true
			},
			bgColor: {
				type: String,
				default: '#fff'
			},
			color: String,
			isCustomBack:Boolean,
			fw:{
				type:Number,
				default:600
			},
			home:''
		},
		setup(props,{emit}) {
			const statusBarHeight = uni.getSystemInfoSync().statusBarHeight
			const {
				leftIcon
			} = props
			const clickLeft = async () => {
				if (leftIcon != '-') {
					try {
						if(props.isCustomBack){
							emit('on-back')
							return
						}
						uni.navigateBack()
					} catch (e) {
						//TODO handle the exception
						console.log(e)
						uni.switchTab({
							url:props.home
						})
					}
				}
			}
			return {
				clickLeft,
				statusBarHeight
			}
		}
	}
</script>

<style scoped>
	.nav-fixed {
		width: 100vw;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #fff;
		z-index: 3;
	}
</style>
