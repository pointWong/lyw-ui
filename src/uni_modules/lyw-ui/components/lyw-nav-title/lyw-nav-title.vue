<template>
	<view class="nav-title">
		<slot>标题</slot>
	</view>
</template>

<script>
	export default {
		
	}
</script>

<style lang="scss" scoped>
	.nav-title{
		height: 100%;
		flex: 1;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 36rpx;
		font-weight: 500;
		color: #333333;
	}
</style>