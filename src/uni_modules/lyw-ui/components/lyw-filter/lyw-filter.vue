<template>
	<view class="wrap" :style="styles" @click="showPop" >
		<slot name="tips">
			<text :style="`color:${pitchOn?'#e61673':''}`">{{text}}</text>
			<view class="img-wrap">
				<image class="img" v-if="!pitchOn"  src="./images/filter.png" mode="widthFix"></image>
				<image  class="img" v-else src="./images/filter_red.png" mode="widthFix"></image>
			</view>
		</slot>
	</view>
	<uni-popup type="bottom" ref="fpopup" @change="change" :safeArea="false">
		<view class="p-wrap">
			<slot name="title"><view class="title">{{filterTitle}}</view></slot>
			<view class="close" @click="close">
				<image style="height: 40rpx;width: 40rpx;" src="./images/close.png" mode="widthFix"></image>
			</view>
			<view class="content" :style="`height:${contentHeight}`">
				<slot></slot>
			</view>
			<slot name="extra"></slot>
			<view class="btns" v-if="!noClear || hasLeftBtn">
				<view class="btn clear" @click="reset">{{leftbtnText}}</view>
				<view class="btn ok" @click="confirm">{{rightbtnText}}</view>
			</view>
			<view class="btns" v-else>
				<view class="btn ok" style="width: 710rpx;border-radius: 45rpx;" @click="confirm">确认</view>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
import { ref } from "vue";
	defineProps({
		pitchOn:{
			type:Boolean,
			default:false
		},
		filterTitle:{
			type:String,
			default:'筛选'
		},
		text:{
			type:String,
			default:'筛选'
		},
		leftbtnText:{
			type:String,
			default:'清空'
		},
		rightbtnText:{
			type:String,
			default:'确定'
		},
		styles:{
			type:Object,
			default(){
				return {}
			}
		},
		contentHeight:{
			type:String,
			default:'500rpx'
		},
		noClear:{
			type:Boolean,
			default:false
		},
		hasLeftBtn:{
			type:Boolean,
			default:false
		}
		
	})
	const emit = defineEmits(['on-reset','on-ok','open','on-close','on-leftbtnclick'])
	const fpopup = ref(null)
	const change = (e) =>{
		if(!e.show){
			emit('on-close')
		}
	}
	const showPop = () => {
		fpopup.value.open()
		emit('open')
	}
	const close = () => {
		fpopup.value.close()
	}
	
	const reset = () => {
		emit('on-reset')
		emit('on-leftbtnclick')
		// close()
	}
	const confirm = () => {
		emit('on-ok')
		// close()
	}
	defineExpose({
		showPop,
		close
	})
</script>

<style lang="scss" scoped>
	.p-wrap{
		background-color: #fff;
		border-top-left-radius: 15rpx;
		border-top-right-radius: 15rpx;
		color: #333;
		position: relative;
		.title{
			text-align: center;
			padding-top: 35rpx;
			font-size: 30rpx;
			font-weight: 500;
		}
		.close{
			position: absolute;
			width: 80rpx;
			top: 25rpx;
			right: 0rpx;
			text-align: center;
		}
		.content{
			height: 500rpx;
			margin-top: 50rpx;
			overflow: auto;
		}
		.btns{
			display: flex;
			justify-content: center;
			padding-top: 19rpx;
			padding-bottom: 60rpx;
			border-top: 1rpx solid #e8e8e8;
			font-size: 32rpx;
			font-weight: 400;
			color: #fff;
			.btn{
				width: 365.5rpx;
				text-align: center;
				height: 90rpx;
				line-height: 90rpx;
				&.clear{
					background-color: #ffc349;
					border-top-left-radius: 45rpx;
					border-bottom-left-radius: 45rpx;
				}
				&.ok{
					background-color: #e61673;
					border-bottom-right-radius: 45rpx;
					border-top-right-radius: 45rpx;
				}
			}
		}
	}
	.wrap{
		display: flex;
		align-items: center;
		line-height: 1;
		color: #666;
		overflow: hidden;
		.img-wrap{
			// padding-top: 4rpx;
			width: 22rpx;
			flex-shrink: 0;
			margin-left: 8rpx;
		}
		.img{
			width: 22rpx;
			height: 23rpx;
			display: block;
		}
	}
</style>