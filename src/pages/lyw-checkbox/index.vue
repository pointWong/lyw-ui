<template>
  <view class="p-3">
    <div class="mt-3">使用示例</div>
    <lyw-checkbox class="mt-4" :checked="isSelected" @change="change"></lyw-checkbox>
    <div class="mt-3">{{ isSelected ? "选中" : "未选中" }}</div>
  </view>
</template>
<script setup>
import { ref } from "vue";
const isSelected = ref(false);
const change = (checked) => {
  isSelected.value = checked;
};
</script>
