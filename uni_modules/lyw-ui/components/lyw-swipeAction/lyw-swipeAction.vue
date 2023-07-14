<template>
	<view class="swipeleft" :style="styles">
		<view class="swipeleft-wrap" :style="{marginRight:`-${actionStyle.width}`,transform: `translate3d(${showRight?'-140rpx':'0'},0,0)`}" @mousedown="onMouseDown" @mousemove="onMouseMove" @touchstart="onTouchStart" @touchend="onTouchEnd">
			<slot></slot>
			<view class="right-wrap" :style="{width:actionStyle.width,backgroundColor:actionStyle.bgColor,opacity:renderRight?1:0}" @click="actionEvent">
				<slot name="right">
					<view>
						<image style="height: 34rpx;width: 32rpx;" src="./delete.png" mode="aspectFill"></image>
						<view>删除</view>
					</view>
				</slot>
			</view>
		</view>
	</view>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
	defineProps({
		actionStyle:{
			type:Object,
			default(){
				return {
					width:'140rpx',
					bgColor:'#E61673'
				}
			}
		},
		styles:{
			type:Object,
			default(){
				return {}
			}
		}
	})
	const showRight = ref(false)
	let clientXStart = undefined
	// let clientYStart = undefined
	const onTouchStart = (e)=>{
		const touch = e.changedTouches[0]
		clientXStart = touch.clientX 
		// clientYStart = touch.clientY
	}
	const onTouchEnd = (e)=>{
		const touch = e.changedTouches[0]
		const {clientX,clientY} = touch
		if(clientXStart - clientX > 100){
			showRight.value = true
		}
		if(clientX - clientXStart > 50){
			showRight.value = false
		}
	}
	const emit = defineEmits(['on-action'])
	const actionEvent = () => {
		emit('on-action')
	}
	const renderRight = ref(false)
	onMounted(async ()=>{
		setTimeout(()=>{
			renderRight.value = true
		},10)
	})
</script>

<style lang="scss" scoped>
	.swipeleft{
		overflow: hidden;
	}
	.swipeleft-wrap{
		display: flex;
		transition: all .15s linear;
	}
	.right-wrap{
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 26rpx;
		color: #fff;
		text-align: center;
	}
</style>