<template>
	<view class="wrap d_flex" :style="styles">
		<view :class="['item', item.value == current ? 'active' : '',i==0?'first':'',i==list.length-1?'last':'']" v-for="(item,i) in list" :key="i" @click.stop="selectItem(item)">{{item.name}}</view>
	</view>
</template>

<script>
	export default {
		props: {
			styles:{
				type:Object,
				default(){
					return {
						height:'50rpx',
						'font-size':'26rpx',
						color:'#999'
					}
				}
			},
			current:{
				type:[String,Number],
				default:0
			},
			list:{
				type:Array,
				default(){
					return [
						{
							name:'项目一',
							value:0
						},
						{
							name:'项目二',
							value:1
						}
					]
				}
			}
		},
		setup(props,context){
			const selectItem = (item) => {
				context.emit('update:current', item.value)
				context.emit('change', item)
			}
			return {
				...props,
				selectItem
			}
		}
	}
</script>

<style scoped>
	.wrap{
	}
	.d_flex{
		display: flex;
	}
	.item{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-grow: 1;
		background-color: #fff;
		border-top: 1rpx solid #999;
		border-bottom: 1rpx solid #999;
	}
	.item + .item{
		border-left: 1rpx solid #999;
	}
	.item.first {
		border-left:1rpx solid #999;
		border-top-left-radius: 5rpx;
		border-bottom-left-radius: 5rpx;
	}
	.item.last {
		border-right:1rpx solid #999;
		border-top-right-radius: 5rpx;
		border-bottom-right-radius: 5rpx;
	}
	.item.active{
		background-color: #E61673;
		color: #fff;
		border:1rpx solid #E61673;
	}
</style>