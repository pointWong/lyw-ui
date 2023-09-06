<template>
	<view class="line-wrap" :style="{...styles}">
		<view class="line-valid" :style="innerStyles"></view>
	</view>
</template>

<script setup>
	const props = defineProps({
		styles:{
			type:Object,
			default(){
				return {}
			}
		},
		innerStyles:{
			type:Object,
			default(){
				return {}
			}
		}
	})
</script>

<style lang="scss" scoped>
	.line-wrap{
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		.line-valid{
			flex-grow: 1;
			background-color: #ededed;
			height: 1rpx;
		}
	}
</style>