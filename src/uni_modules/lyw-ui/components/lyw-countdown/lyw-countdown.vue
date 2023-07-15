<template>
	<view v-if="type == 'resend'" class="wrap" :style="styles">
		<view class="mgl26 font22 c999">
			<view class="sms-content-input_send c333 t_center" v-if="isTimeUp" @click="onClick">获取验证码</view>
			<view class="sms-content-input_countdown d_flex d_column_center" v-else>
				<text>重新发送</text>
				<text>{{countdownSecond}}s</text>
			</view>
		</view>
	</view>
	<view v-else :style="styles">{{formatStr}}</view>
</template>

<script setup>
import { computed, ref, watch } from "vue";
	const props = defineProps({
		styles:{
			type:Object,
			default(){
				return {}
			}
		},
		type:{
			type:String,
			default:'resend'
		},
		value:{
			type:Number,
			default:3600
		},
		format:{
			type:String,
			default:'yyyy年MM月dd天hh小时mm分钟ss秒'
		}
	})
	const emit = defineEmits(['click','time-up'])
	const countdownSecond = ref(60)
	const isTimeUp = ref(true)
	const countValue = ref(0)
	const formatString = ref('')
	
	const formatStr = computed(()=>{
		const year = 60 * 60 * 24 * 30 * 365
		const month = 60 * 60 * 24 * 30
		const day = 60 * 60 * 24
		const hour = 60 * 60
		const minute = 60
		const yyyy = Math.floor(countValue.value / year)
		const MM = Math.floor((countValue.value % year)/month)
		const dd = Math.floor(((countValue.value % year)%month)/day)
		const hh = Math.floor((((countValue.value % year)%month)%day)/hour)
		const mm = Math.floor(((((countValue.value % year)%month)%day)%hour)/minute)
		const ss = ((((countValue.value % year)%month)%day)%hour)%minute
		const obj = {yyyy,MM,dd,hh,mm,ss}
		for (let key in obj) {
			if (obj[key] < 10) {
				obj[key] = `0${obj[key]}`
			}
			formatString.value = formatString.value.replace(key, obj[key])
		}
		return formatString.value
	})
	let countingTimer = undefined
	const countDownIng = () => {
		if(props.type == 'resend'){
			countdownSecond.value--
			if(countdownSecond.value <= 0){
				isTimeUp.value = true
				return
			}
		}else{
			countValue.value--
			formatString.value = props.format
			if(countValue.value <= 0){
				emit('time-up')
				return
			}
		}
		clearTimeout(countingTimer)
		countingTimer =  setTimeout(()=>{
			countDownIng()
		},1000)
	}
	const start = () => {
		countdownSecond.value = 60
		isTimeUp.value = false
		countValue.value = props.value
		formatString.value = props.format
		countDownIng()
	}
	watch(()=>props.value,()=>{
		start()
	},{immediate:true})
	const onClick = () => {
		emit('click')
	}
	defineExpose({
		start
	})
</script>

<style lang="scss" scoped>
	.wrap{
		
	}
	.sms{
		&-content{
			&-input{
				&_send,&_countdown{
					border: 2rpx solid #ccc;
					padding: 10rpx 12rpx;
					border-radius: 5rpx;
				}
			}
		}
		&-btn{
			&-wrap{
				.btn{
					width: 500rpx;
					height: 90rpx;
					background: #ccc;
					border-radius: 5rpx;
					&.filin{
						background: #2FC25B;
					}
				}
			}
		}
	}
</style>