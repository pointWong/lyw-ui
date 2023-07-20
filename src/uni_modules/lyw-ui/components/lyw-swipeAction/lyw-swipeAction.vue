<template>
	<view class="swipeleft" :style="styles" @mousedown="onMouseDown" @mouseleave="onMouseUp" @mousemove="onMouseMove"
		@mouseup="onMouseUp">
		<view class="swipeleft-wrap"
			:style="{ marginRight: `-${actionStyle.width}`, transform: `translate3d(${mvdistance ? `-${mvdistance}` : '0'},0,0)` }"
			@touchstart="onTouchStart" @touchend="onTouchEnd">
			<slot></slot>
			<view class="right-wrap"
				:style="{ width: actionStyle.width, backgroundColor: actionStyle.bgColor, opacity: renderRight ? 1 : 0 }"
				@click.stop="actionEvent">
				<slot name="action">
					<view>
						<image style="height: 34rpx;width: 32rpx;" src="./delete.png" mode="aspectFill"></image>
						<view>删除</view>
					</view>
				</slot>
			</view>
		</view>
	</view>
</template>

<script setup>
import { nextTick, onMounted, ref } from "vue";
const props = defineProps({
	actionStyle: {
		type: Object,
		default () {
			return {
				width: '140rpx',
				bgColor: '#E61673'
			}
		}
	},
	styles: {
		type: Object,
		default () {
			return {}
		}
	}
})
const mvdistance = ref('')

let clientXStart = undefined
// let clientYStart = undefined
const onTouchStart = (e) => {
	const touch = e.changedTouches[0]
	clientXStart = touch.clientX
	// clientYStart = touch.clientY
}
const onTouchEnd = (e) => {
	const touch = e.changedTouches[0]
	const { clientX, clientY } = touch
	if (clientXStart - clientX > 100) {
		mvdistance.value = props.actionStyle.width
	}
	if (clientX - clientXStart > 50) {
		mvdistance.value = ``
	}
}

let isMouseDown = false
const onMouseDown = (e) => {
	// ifdef H5
	const { pageX } = e
	clientXStart = pageX
	isMouseDown = true
	// endif
}

const onMouseMove = (e) => {
	// ifdef H5
	if (isMouseDown) {
		const { pageX } = e
		const md = clientXStart - pageX
		let max = parseInt(props.actionStyle.width)
		let mvd = parseInt(mvdistance.value)
		if (md < 0) {
			mvdistance.value = (mvd + md) + 'px'
		} else {
			mvdistance.value = (md > max ? max : md) + 'px'
		}
	}
	// endif
}

const onMouseUp = (e) => {
	// ifdef H5
	if (isMouseDown) {
		isMouseDown = false
		const { clientX } = e
		if (clientXStart - clientX > 100) {
			mvdistance.value = props.actionStyle.width
		} else {
			mvdistance.value = ``
		}
	}
	// endif
}

const emit = defineEmits(['on-action'])
const actionEvent = () => {
	emit('on-action')
}
const renderRight = ref(false)
onMounted(async () => {
	setTimeout(() => {
		renderRight.value = true
	}, 10)
})
</script>

<style lang="scss" scoped>
.swipeleft {
	overflow: hidden;
}

.swipeleft-wrap {
	display: flex;
	transition: all .15s linear;
}

.right-wrap {
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 26rpx;
	color: #fff;
	text-align: center;
}
</style>