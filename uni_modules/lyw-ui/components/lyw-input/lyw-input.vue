<template>
	<view :class="['input-wrap',disabled?'disabled':'',readOnly?'readonly':'']" :style="{height:height,...styles}">
		<input class="input" :style="{fontSize:styles.fontSize,padding:'0'}" :maxlength="maxlength" :disabled="disabled" v-model="value" :type="type" :placeholder="placeHolder" placeholder-style="color:#999"/>
		<slot>
			<view v-if="showRightIcon" class="eyes" @click="togglePassword">
				<uni-icons  :type="icon" size="36rpx"  color="#ccc"></uni-icons>
			</view>
		</slot>
	</view>
</template>

<script setup>
	const emit = defineEmits(['update:modelValue'])
	const props = defineProps({
		maxlength:{
			type:Number,
			default:50
		},
		type:{
			type:String,
			default:'text'
		},
		placeHolder:{
			type:String,
			default:'请输入'
		},
		styles:{
			type:Object,
			default(){
				return {}
			}
		},
		height:{
			type:String,
			default:'60rpx'
		},
		readOnly:Boolean,
		showRightIcon:{
			type:Boolean,
			default:false
		},
		disabled:Boolean,
		modelValue:String | Number
	})
	import {ref,computed} from 'vue'
	const showPassword = ref(true)
	const icon = computed(()=>{
		if(showPassword.value) {
			return 'eye-slash'
		}
		return 'eye'
	})
	const togglePassword = () => {
		showPassword.value = !showPassword.value
	}
	
	const value = computed({
		get(){
			return props.modelValue
		},
		set(value){
			emit('update:modelValue', value)
		}
	})
</script>

<style scoped>
	.input-wrap{
		box-sizing: border-box;
		border-radius: 5rpx;
		border: 2rpx solid #999999;
		padding: 0 10rpx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		overflow: hidden;
	}
	.input-wrap.disabled{
		background-color: #ededed;
	}
	.input-wrap.disabled.readonly{
		background-color: transparent;
	}
	.input{
		flex-grow: 1;
		background-color: transparent;
	}
</style>