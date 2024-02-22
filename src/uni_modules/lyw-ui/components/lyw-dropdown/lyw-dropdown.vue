<template>
	<view :class="['lyw-dropdown',disabled?'disabled':'']" @click.stop="openPopup" :style="styles">
		<text class="selected current" v-if="list[pickViewValue] && list[pickViewValue].name || current">{{ list[pickViewValue] && list[pickViewValue].name || current}}</text>
		<text class="selected" style="color: #999;" v-else>请选择</text>
		<uni-icons type="bottom" size="24rpx"></uni-icons>
	</view>
	<uni-popup ref="popup" type="bottom" @change="closePop" :safeArea="false">
		<view class="picker-view-wrap">
			<picker-view :immediate-change="true" indicator-style="height: 50px;" :value="pickViewValues" @change="change" class="picker-view">
				<picker-view-column>
					<view class="picker-view-item " v-for="(item,i) in list" :key="i">{{item.name}}</view>
				</picker-view-column>
			</picker-view>
		</view>
	</uni-popup>
</template>

<script>
	import { computed, ref, watch, nextTick } from "vue"
	export default {
		props:{
			current:{
				type:[String,Number],
				default:0
			},
			styles:{
				type:Object,
				default(){
					return {
						height:'50rpx',
						fontSize:'26rpx'
					}
				}
			},
			disabled:Boolean,
			list:{
				type:Array,
				default(){
					return [
						{
							name:'选项一',
							value:1
						},
						{
							name:'选项二',
							value:2
						},
						{
							name:'选项三',
							value:3
						}
					]
				}
			}
		},
		setup(props, { emit }){
			const pickViewValue = ref(undefined)
			watch([()=>props.current,()=>props.list],async ()=>{
				console.log(props)
				// #ifdef APP-PLUS | H5
				await nextTick()
				pickViewValue.value = props.list.findIndex(item => item.value === props.current)
				// #endif
				// #ifdef MP-WEIXIN
				wx.nextTick(()=>{
					pickViewValue.value = props.list.findIndex(item => item.value === props.current)
				})
				// #endif
			},{immediate:true})
			
			const change = (e) => {
				pickViewValue.value = e.detail.value[0]
				const picked = props.list[pickViewValue.value]
				emit('update:current', picked && picked.value)
				emit('change',picked)
			}
			const popup = ref(null)
			const openPopup = () => {
				if(!props.list.length || props.disabled) return
				popup.value.open()
			}
			const pickViewValues = computed(()=>{
				if(!pickViewValue.value) return []
				return [pickViewValue.value]
			})
			
			const closePop = (e) => {
				if(!e.show && pickViewValue.value < 0){
					const firstItem = props.list[0]
					if(firstItem){
						pickViewValue.value = 0
						emit('update:current', firstItem && firstItem.value)
						emit('change',firstItem)
					}
				}
			}
			
			return {
				popup,
				pickViewValue,
				pickViewValues,
				change,
				openPopup,
				closePop
			}
		}
	}
</script>
<style lang="scss">
	.lyw-dropdown{
		box-sizing: border-box;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border: 1rpx solid #999;
		background-color: #fff;
		border-radius: 5rpx;
		padding: 0 10rpx;
		color: #333;
	}
	.lyw-dropdown.disabled{
		background-color: #f5f5f5;
	}
	.selected{
		white-space: nowrap;
		overflow: hidden;
		/* text-overflow: hidden; */
		text-overflow: ellipsis;
		&.current{
			color: #333;
			// font-weight: 500;
		}
	}
	.picker-view-wrap{
		border-top-left-radius: 10rpx;
		border-top-right-radius: 10rpx;
		overflow: hidden;
		background-color: #fff;
	}
	.picker-view {
		width: 100vw;
		height: 520rpx;
	}
	.picker-view-item {
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		font-size: 30rpx;
		color: #333;
	}
</style>