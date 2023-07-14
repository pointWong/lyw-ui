<template>
	<view class="input-wrap" :style="{height:height,...styles}">
		<textarea style="width: 100%;height: 100%;" :style="{fontSize:styles.fontSize,padding:'0'}" :disable-default-padding="true" :maxlength="maxlength" v-model="value" class="d_grow1"  :placeholder="placeHolder" placeholder-style="color:#999"></textarea>
	</view>
</template>

<script>
	import {
		computed
	} from 'vue'
	export default {
		props: {
			placeHolder: {
				type: String,
				default: '请输入'
			},
			height: {
				type: String,
				default: '130rpx'
			},
			maxlength: {
				type: Number,
				default: 200
			},
			modelValue: String | Number,
			styles:{
				type:Object,
				default(){
					return {}
				}
			}
		},
		setup(props, {
			emit
		}) {
			const value = computed({
				get() {
					return props.modelValue
				},
				set(value) {
					emit('update:modelValue', value)
				}
			})
			return {
				value
			}
		}
	}
</script>

<style>
	.input-wrap {
		/* #ifdef MP-ALIPAY */
		box-sizing: border-box;
		/* #endif */
		border-radius: 5rpx;
		border: 2rpx solid #999999;
		padding: 10rpx;
		overflow: auto;
	}
</style>
