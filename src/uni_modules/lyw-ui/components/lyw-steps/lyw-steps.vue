<template>
	<div class="wrap">
		<div class="line"></div>
		<view class="lpgwrap" :style="styles">
			<view class="item-wrap" :class="{ last: i == list.length - 1, former: i < current, current: i == current }"
				v-for="(item, i) in list" :key="i">
				<view class="item">
					<view class="circle">
						<image v-if="i < current" style="height: 16rpx;width: 18rpx;" src="./images/red_sl.png" mode="widthFix">
						</image>
						<view v-else class="cicon">{{ i + 1 }}</view>
					</view>
					<view class="name">{{ item.name }}</view>
				</view>
			</view>
		</view>
	</div>
</template>

<script setup>
const props = defineProps({
	styles: {
		type: Object,
		default () {
			return {
				"height": "170rpx"
			}
		}
	},
	list: {
		type: Array,
		default () {
			return [
				{
					name: '进度1',
					value: 0
				},
				{
					name: '进度2',
					value: 1
				},
				{
					name: '进度3',
					value: 2
				},
				{
					name: '进度4',
					value: 3
				}
			]
		}
	},
	current: {
		type: Number,
		default: 1
	}
})
</script>

<style lang="scss" scoped>
.wrap {
	position: relative;
	.line{
		position: absolute;
		width: 100%;
		border-top: 1px dashed #ccc;
		top: 19rpx;
		
	}
}

.lpgwrap {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	box-sizing: border-box;
	font-size: 24rpx;
	color: #999;

	.item-wrap {
		position: relative;
		.item {
			position: relative;
			text-align: center;
			display: flex;
			flex-direction: column;
			align-items: center;

			.circle {
				display: flex;
				align-items: center;
				justify-content: center;
				height: 36rpx;
				width: 36rpx;
				border: 2rpx solid #ccc;
				box-shadow: 0 0 0 5rpx white;
				background-color: white;
				border-radius: 50%;
				background-color: white;
			}

			.name {
				white-space: nowrap;
			}
		}


   &.former::before,&.last::before{
		content: '';
		display: block;
		height: 36rpx;
		width: 50%;
		position: absolute;
		background-color: white;
		top: 0;
	 }
	 &.last::before{
		right: 0;
	 }
		&.former {

			.item {
				.circle {
					border-color: #e61673;
				}
			}
		}

		&.current {
			.item {
				.circle {
					background-color: #e61673;
					border-color: #e61673;
					color: white;
				}

				.name {
					color: #e61673;
				}
			}
		}

		&.last {}
	}
}
</style>