<template>
	<uni-popup ref="popup" type="center">
		<view>
			<view class="wrap">
				<view class="content-wrap">
					<view class="title">{{title}}</view>
					<view class="content" :style="contentStyle">{{content}}</view>
					<view class="btns" v-if="showCancel" :style="`margin-top:${btnmgt}rpx`">
						<lyw-btn width="260rpx" border="2rpx solid #999999" title="取消" height="70rpx" bgColor="#fff" color="#333" size="30rpx" radius="35rpx" @click="close"></lyw-btn>
						<view style="margin-left: 20rpx;width:260rpx;" >
							<lyw-btn width="100%" :title="confirmText" height="70rpx"  size="30rpx" radius="35rpx" @click="confirm"></lyw-btn>
						</view>
					</view>
					<view class="btns" v-else :style="`margin-top:${btnmgt}rpx`">
						<lyw-btn width="526rpx" :title="confirmText" height="70rpx"  size="30rpx" radius="35rpx" @click="confirm"></lyw-btn>
					</view>
				</view>
			</view>
			<view v-if="showClose" class="close d_flex d_column_center d_center" style="margin-top: 76rpx;">
				<image style="height: 66rpx;width: 66rpx;" src="./closeo.png" mode="widthFix" @click="close"></image>
			</view>
		</view>
	</uni-popup>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
	btnmgt:{
		type:Number,
		default:66
	},
	showClose:Boolean,
	title:{
		type:String,
		default:'标题'
	},
	content:{
		type:String,
		default:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容'
	},
	contentStyle:{
		type:Object,
		default(){
			return {}
		}
	},
	confirmText:{
		type:String,
		default:'确定'
	},
	showCancel:{
		type:Boolean,
		default:true
	}
})

const emit = defineEmits(['confirm'])

const popup = ref(null)
const show = () => {
	popup.value.open()
}
const close = () => {
	popup.value.close()
}
const confirm = () => {
	emit('confirm')
	close()
}
defineExpose({
	show,
	close
})
</script>

<style lang="scss" scoped>
	.wrap{
		display: flex;
		justify-content: center;
		.content-wrap{
			box-sizing: border-box;
			width: 80vw;
			padding: 54rpx 42rpx 72rpx;
			border-radius: 32rpx;
			overflow: hidden;
			background-color: #fff;
			text-align: center;
		}
		.title{
			font-size: 32rpx;
			font-weight: 500;
			color: #333;
		}
		.content{
			font-size: 26rpx;
			color: #999;
			margin-top: 53rpx;
		}
		.btns{
			margin-top: 66rpx;
			display: flex;
			justify-content: space-between;
		}
	}
</style>