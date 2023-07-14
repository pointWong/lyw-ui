<template>
	<view class="content">
		<lyw-card>
			<lyw-btn @click="$refs['bankpay'].open()" title="显示银行信息"></lyw-btn>
			<lyw-bankpay-info ref="bankpay"></lyw-bankpay-info>
		</lyw-card>
		<lyw-card>
			<lyw-cascade></lyw-cascade>
		</lyw-card>
		<lyw-card>
			<lyw-checkbox></lyw-checkbox>
		</lyw-card>
		<lyw-card>
			<lyw-countdown></lyw-countdown>
		</lyw-card>
		<lyw-card>
			<lyw-btn @click="$refs['lyw-delivery-time'].open()" title="显示配送时间"></lyw-btn>
			<lyw-delivery-time ref="lyw-delivery-time"></lyw-delivery-time>
		</lyw-card>
		<lyw-card>
			<lyw-btn @click="$refs['lyw-dialog'].show()" title="显示对话框"></lyw-btn>
			<lyw-dialog ref="lyw-dialog"></lyw-dialog>
		</lyw-card>
		<lyw-card>
			<lyw-dropdown></lyw-dropdown>
		</lyw-card>
		<lyw-card>
			<lyw-filter></lyw-filter>
		</lyw-card>
		<lyw-card>
			<lyw-image-swiper></lyw-image-swiper>
		</lyw-card>
		<lyw-card>
			<lyw-input></lyw-input>
		</lyw-card>
		<lyw-card>
			<lyw-listing></lyw-listing>
		</lyw-card>
		<lyw-card>
			<lyw-mask></lyw-mask>
		</lyw-card>
		<lyw-card>
			<lyw-nav></lyw-nav>
		</lyw-card>
		<lyw-card>
			<lyw-nav></lyw-nav>
		</lyw-card>
		<lyw-card>
			<lyw-no-data></lyw-no-data>
		</lyw-card>
		<lyw-card>
			<lyw-phonecall></lyw-phonecall>
		</lyw-card>
		<lyw-card>
			<lyw-radio></lyw-radio>
		</lyw-card>
		<lyw-card>
			<lyw-search-input></lyw-search-input>
		</lyw-card>
		<lyw-card>
			<lyw-shopping-car></lyw-shopping-car>
		</lyw-card>
		<lyw-card>
			<lyw-sort></lyw-sort>
		</lyw-card>
		<lyw-card>
			<lyw-stars></lyw-stars>
		</lyw-card>
		<lyw-card>
			<lyw-swipeAction>谁客服经理睡大觉反垄断法</lyw-swipeAction>
		</lyw-card>
		<lyw-card>
			<lyw-switch></lyw-switch>
		</lyw-card>
		<lyw-card>
			<lyw-textarea></lyw-textarea>
		</lyw-card>
		<lyw-card>
			<lyw-to-submit></lyw-to-submit>
		</lyw-card>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
	}

	.text-area {
		display: flex;
		justify-content: center;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}
</style>
