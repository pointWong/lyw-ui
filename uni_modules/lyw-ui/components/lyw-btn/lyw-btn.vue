<template>
	<view @click="onClick" hover-class="none" :class="['btn',isLoading?'loading':'']" :style="{ width:params.width,height:params.height,background: params.bgColor, padding: params.pad, fontSize: params.size, color: params.color,borderRadius:params.radius,border:params.border }">{{ params.title }}</view>
</template>

<script>
	import { reactive } from 'vue'
	
	export default {
		props: {
			isLoading:Boolean,
			title: String,
			bgColor: {
				type:String,
				default:'#E61673'
			},
			pad: {
				type:String,
				default:'10px'
			},
			size: String,
			round:Boolean,
			radius:{
				type:String,
				default:'5rpx'
			},
			height:{
				type:String,
				default:'auto'
			},
			width:{
				type:String,
				default:'auto'
			},
			border:{
				type:String,
				default:''
			},
			color: {
				type: String,
				default: () => {
					return '#fff'
				}
			}
		},
		watch: {
			bgColor(v) {
				this.params.bgColor = v;
			},
			title(v) {
				this.params.title = v;
			}
		},
		setup(props, { emit }) {
			const params = reactive({})
			for(let key in props){
				params[key] = props[key]
			}
			const onClick = () => {
				if(props.isLoading)return
				emit('submit')
				emit('click')
			}
			return {
				params,
				emit,
				onClick
			}
		}
	}
</script>

<style lang="scss" scoped>
	.btn{
		/* width: 100rpx; */
		box-sizing: border-box;
		border-radius: 5rpx;
		/* d_flex d_center d_column_center */
		display: flex;
		align-items: center;
		justify-content: center;
		transition: all .25s linear;
		&.loading{
			background-color: #ccc !important;
			border-color: #ccc !important;
		}
		&:active{
			opacity: .8;
		}
	}
</style>
