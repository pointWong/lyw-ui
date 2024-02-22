<template>
	<view class="wrap" @click.stop="selectItem" :style="`margin-right:${mgr}rpx`">
		<view class="round disabled" v-if="disabled" :style="`width:${size}rpx;height:${size}rpx;`"></view>
		<view class="round" v-else-if="!isSelected" :style="`width:${size}rpx;height:${size}rpx;border-color:${color}`"></view>
		<image v-else :style="`height:${size}rpx;width:${size}rpx;display:block`" src="./image/active.png" mode="widthFix"></image>
	</view>
</template>

<script setup>
	import { ref, watch } from "vue";
	const props = defineProps({
		select: Boolean,
		size:{
			type:[Number,String],
			default:32
		},
		mgr:{
			type:[String,Number],
			default:0
		},
		disabled:{
			type:Boolean,
			default:false
		},
		couldChange:{
			type:Boolean,
			default:true
		},
		color:{
			type:String,
			default:''
		}
	})
	const isSelected = ref(false)
	watch(()=>props.select,(newVal)=>{
		isSelected.value = newVal
	},{immediate:true})
	const emit = defineEmits(['click'])
	const selectItem = () => {
		if(props.disabled || !props.couldChange)return
		isSelected.value = !isSelected.value
		emit('click',isSelected.value)
	}
</script>

<style scoped lang="scss">
	.round{
		box-sizing: border-box;
		background-color: #fff;
		border: 2rpx solid #ccc;
		border-radius: 50%;
		&.disabled{
			background-color: #e8e8e8;
		}
	}
	
</style>
