<template>
  <div class="p-3">
    <div>使用示例</div>
    <lyw-countdown class="mt-3"
      :value="countdownNum"
      @click="countdownNum = Math.random()"
    ></lyw-countdown>
  </div>
</template>
<script setup>
import { ref } from "vue";
const countdownNum = ref(60);
</script>
