<template>
	<view :class="['switch-wrap',ischecked ? 'checked' : '']" :style="`height:${size}rpx;width:${size * 1.7}rpx;padding:${size * 0.1}rpx;border-radius:${size * 0.5}rpx;background-color:${ischecked ? color : '#fff'};border-color:${ischecked ? color : '#ccc'}`" @click="sclick">
		<view class="dot round" :style="`height:${size * 0.8}rpx;width:${size * 0.8}rpx;`"></view>
	</view>
</template>

<script setup>
import { ref, watch } from "vue";
	const props = defineProps({
		color:{
			type:String,
			default:'#E61673'
		},
		checked:Boolean,
		size:{
			type:Number,
			default:40
		}
	})
	
	const emit = defineEmits(['change'])
	
	const ischecked = ref(false)
	watch(()=>props.checked,() => {
		ischecked.value = props.checked
	},{immediate:true})
	
	const sclick = () => {
		ischecked.value = !ischecked.value
		emit('change',{detail:{value:ischecked.value}})
	}
</script>

<style lang="scss" scoped>
	.switch-wrap{
		display:flex;
		border:1rpx solid #ccc;
		background-color: #fff;
		position: relative;
		box-sizing: border-box;
		align-items: center;
		transition: all .15s linear;
		font-size: 0;
		.dot{
			background-color: #ccc;
			
		}
		&.checked{
			justify-content: flex-end;
			.dot{
				background-color: #fff;
			}
		}
	}
	.round{
		border-radius: 50%;
	}
</style>