<template>
	<view class="checkbox" @click="clickCheck">
		<image v-if="cchecked" :style="`height:${size}rpx;width:${size}rpx;display:block;`"
			src="./checked.png" mode="widthFix"></image>
		<view class="default" :style="`height:${size}rpx;width:${size}rpx`" v-else></view>
	</view>
</template>

<script setup>
	import {
		ref,
		watch
	} from "vue";
	const props = defineProps({
		size: {
			type: Number,
			default: 34
		},
		checked: Boolean
	})

	const emit = defineEmits(['change'])

	const cchecked = ref(false)

	watch(()=> props.checked, () => {
		cchecked.value = props.checked
	},{immediate:true})

	const clickCheck = () => {
		cchecked.value = !cchecked.value
		emit('change', !props.checked)
	}
</script>

<style lang="scss" scoped>
	.checkbox {
		.default {
			box-sizing: border-box;
			border: 1rpx solid #999;
			border-radius: 50%;
		}
	}
</style>
