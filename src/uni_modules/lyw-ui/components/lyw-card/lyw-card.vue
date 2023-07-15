<template>
	<view class="card-wrap" :style="{paddingTop:pdt,...styles}"  @click="$emit('click')">
		<slot></slot>
	</view>
</template>
<script>
	export default {
		props:{
			pdt:{
				type:String,
				default:'32rpx'
			},
			styles:{
				type:Object,
				default(){
					return {}
				}
			}
		}
	}
</script>
<style>
	::-webkit-scrollbar{
		display: none;
	}
</style>
<style lang="scss" scoped>
	.card-wrap{
		padding: 32rpx 27rpx 39rpx;
		background-color: #fff;
		border-radius: 15rpx;
		margin-bottom: 20rpx;
	}
	
</style>