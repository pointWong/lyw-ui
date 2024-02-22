<template>
	<view class="wrap" :style="styles" @click="clickItem">
		<view v-if="!hideText" class="" :style="`color:${sortType?'#e61673':''}`">{{text||'排序'}}</view>
		<view class="iicons">
			<view class="item">
				<uni-icons type="top" :color="iconUpColor" size="24rpx"></uni-icons>
			</view>
			<view class="item">
				<uni-icons type="bottom" :color="iconDownColor" size="24rpx"></uni-icons>
			</view>
		</view>
	</view>
</template>

<script setup>
import { computed, ref } from "vue";
	defineProps({
		hideText:{
			type:Boolean
		},
		text:String,
		styles:{
			type:Object,
			default(){
				return {
					color:'#666'
				}
			}
		}
	})
	const emit = defineEmits(['on-change'])
	const sortType = ref(null)
	const iconUpColor = computed(()=>{
		if(sortType.value == 'asc'){
			return '#e61673'
		}
		return '#666'
	})
	const iconDownColor = computed(()=>{
		if(sortType.value == 'desc'){
			return '#e61673'
		}
		return '#666'
	})
	const clickItem = () => {
		if(!sortType.value) {
			sortType.value = 'desc'
		}else if(sortType.value == 'desc'){
			sortType.value = 'asc'
		}else{
			sortType.value = undefined
		}
		emit('on-change',sortType.value)
	}
</script>

<style lang="scss" scoped>
	.wrap{
		display: flex;
		align-items: center;
		.item{
			height: 12rpx;
			// overflow: hidden;
			display: flex;
			align-items: center;
		}
	}
</style>