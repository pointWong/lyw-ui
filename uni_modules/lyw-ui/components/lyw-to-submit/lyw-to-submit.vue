<template>
	<view class="shoppingCar_submit" :style="`height:calc(${showHeadSlot?224:170}rpx - 20rpx - 80rpx)`">
		<slot name="head" v-if="showHeadSlot"></slot>
		<view class="d_flex d_between d_column_center">
			<view class="d_flex d_column_center d_between">
				<view class="d_flex d_column_center d_center">
					<!-- <view class="shoppingCar_circle d_flex d_center d_column_center" style="margin: 0;" @click="eventCommit('selectAll')">
						<image style="width: 16rpx; height: 13rpx;" src="../../static/cascade/hook.png" mode="widthFix"></image>
					</view> -->
					<lyw-radio :size="40" v-if="params.selectAll" :mgr='0' :select="params.isSelectAll" @click="eventCommit('selectAll')"></lyw-radio>
					<text v-if="params.selectAll" class="font24 c4a mgl8 LH1">全选</text>
				</view>
				<slot>
					<view class="d_flex_column d_column_start font26" :class="{ 'mgl20':params.selectAll}">
						<text class="c999">{{params.selectAll?'已选':'共'}}{{params.data.count || 0}}件</text>
						<view class="mgt10">
							<text class="c333">合计：</text>
							<text class="ce61673 medium" style="line-height: 1.2;">¥</text>
							<text class="ce61673 font34 medium mgl4 LH1" style="position: relative; top: 2rpx;">{{params.data.total || 0}}</text>
						</view>
					</view>
				</slot>
			</view>
			<view class="shoppingCar_settlement d_flex d_center d_column_center font32 white" :class="{disabled:disabled}" @click.stop="eventCommit('confirm')">{{btnText}}</view>
		</view>
	</view>
</template>

<script>
	import { reactive } from 'vue'
	export default {
		props: {
			data:{
				type:Object,
				default(){
					return {}
				}
			},
			isSelectAll:{
				type:Boolean,
				default:false
			},
			selectAll:{
				type:Boolean,
				default:true
			},
			btnText:{
				type:String,
				default:'去结算'
			},
			disabled:Boolean,
			showHeadSlot:Boolean
		},
		watch:{
			isSelectAll(n){
				this.params.isSelectAll = n
			},
			data(n){
				this.params.data = n
			}
		},
		setup(props, { emit }) {
			const params = reactive({})
			for(let key in props){
				params[key] = props[key]
			}
			const eventCommit = (eventName) => {
				emit(eventName)
			}
			return {
				params,
				eventCommit
			}
		}
	}
</script>

<style scoped lang="scss">
	.shoppingCar_submit{
		background: #fff; 
		width: calc(100vw - 20rpx - 30rpx); 
		height: calc(210rpx - 20rpx - 80rpx);
		position: fixed; 
		bottom: 0; 
		padding: 20rpx 20rpx 80rpx 30rpx;
		border-top: 1rpx solid #e8e8e8;
	}
	.shoppingCar_settlement{
		width: 250rpx; height: 80rpx; background: #e61673; border-radius: 40rpx;
		.disabled{
			background:#ccc;
		}
	}
</style>
