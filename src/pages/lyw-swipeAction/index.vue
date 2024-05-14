<template>
  <div>
    <div class="py-3">使用示例</div>
    <div>
      <lyw-swipeAction>
        <view class="bg-slate-400" style="width: 100%; height: 80px;"
          >左滑看看</view
        >
      </lyw-swipeAction>
    </div>
    <div class="mt-2">
      <lyw-swipeAction>
        <view
          class="bg-slate-400"
          style="width: 100%; height: 80px;"
          >左滑看看</view
        >
        <template #action>查看详情</template>
      </lyw-swipeAction>
    </div>
  </div>
</template>
