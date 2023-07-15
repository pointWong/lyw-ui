<template>
	<view class="wrap" @click.stop="selectItem" :style="`margin-right:${mgr}rpx`">
		<div class="disabled" v-if="disabled" :style="`width:${size}rpx;height:${size}rpx;`"></div>
		<image v-else-if="!isSelected" :style="`height:${size}rpx;width:${size}rpx;display:block`" src="./image/detault.png" mode="widthFix"></image>
		<image v-else :style="`height:${size}rpx;width:${size}rpx;display:block`" src="./image/active.png" mode="widthFix"></image>
	</view>
</template>

<script setup>
	import { ref, watch } from "vue";
	const props = defineProps({
		select: Boolean,
		size:{
			type:Number,
			default:32
		},
		mgr:{
			type:[String,Number],
			default:0
		},
		disabled:{
			type:Boolean,
			default:false
		}
	})
	const isSelected = ref(false)
	watch(()=>props.select,(newVal)=>{
		isSelected.value = newVal
	},{immediate:true})
	const emit = defineEmits(['click'])
	const selectItem = () => {
		if(props.disabled)return
		isSelected.value = !isSelected.value
		emit('click',isSelected.value)
	}
</script>

<style scoped lang="scss">
	.disabled{
		box-sizing: border-box;
		background-color: #e8e8e8;
		border: 1rpx solid #ccc;
		border-radius: 50%;
	}
	
</style>
