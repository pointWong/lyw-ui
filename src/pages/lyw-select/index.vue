<template>
  <div class="p-2 pt-6">
    <div class="mb-4">使用示例</div>
    <lyw-select v-model="selected" placeHolder="请选择"></lyw-select>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const selected = ref('选项一')
</script>