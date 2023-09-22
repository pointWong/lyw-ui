<template>
	<view class="stars">
		<view class="item" v-for="(item,i) in 3" :key="item" >
			<image v-if="i < value" class="star" src="./star_red.png" mode="widthFix"></image>
			<image v-else class="star" src="./star.png" mode="widthFix"></image>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			value:{
				type:Number,
				default: 2
			}
		},
		setup(props){
			return {
				...props
			}
		}
	}
</script>

<style scoped>
	.stars{
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.star{
		width: 36rpx;
		height: 36rpx;
	}
	.item + .item{
		margin-left: 6rpx;
	}
</style>