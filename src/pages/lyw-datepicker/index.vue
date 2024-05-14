<template>
  <div class="p-3">
    <div>使用示例</div>
    <div class="mt-4">
      <lyw-datepicker v-model="date" :styles="{height:'30px'}"></lyw-datepicker>
    </div>
    <div class="mt-4">你选择的日期：{{ date }}</div>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const date = ref('')
</script>