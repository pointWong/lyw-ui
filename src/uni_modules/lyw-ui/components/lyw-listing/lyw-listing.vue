<template>
	<view class="listing c333 font26 d_flex d_start">
		<text class="listing-item" v-for="(cate,i) in params.list" :key="i" :class="{listing_actived:cate.cateCode === current}" @click="selectItem(cate)">{{cate.cateName}}</text>
	</view>
</template>

<script>
	import { reactive } from 'vue'
	
	export default {
		props: {
			list:{
				type:Array,
				default:[]
			},
			current:{
				type:Number,
				default:0
			}
		},
		watch: {
			
		},
		setup(props, { emit }) {
			const params = reactive({})
			for(let key in props){
				params[key] = props[key]
			}
			
			const selectItem = (cate) => {
				// current.value = cate.cateCode
				emit('onChange',cate)
			}
			
			return {
				params,
				selectItem
			}
		}
	}
</script>

<style lang="scss" scoped>
	.listing{
		// padding: 0 32rpx;
		padding-right: 32rpx;
		width: 100%;
		box-sizing: border-box; 
		overflow: auto;
	}
	.listing .listing-item{
		margin-right: 64rpx; 
		flex-shrink: 0;
		flex-grow: 0;
		/* #ifdef MP-WEIXIN */
		padding: 20rpx 0 10rpx;
		/* #endif */
	}
	.listing .listing-item:last-child{
		margin-right: 0;
	}
	.listing_actived{
		color: #e61673 !important; 
		font-weight: bold;
		&::after{
			content: '';
			display: block;
			height: 6rpx;
			width: 100%;
			background-color: #e61673;
			margin-top: 8rpx;
			border-radius: 3rpx;
		}	
	}
</style>
