
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div class="p-2 pt-6">
    <div class="mb-4">使用示例</div>
    <lyw-select v-model="selected" placeHolder="请选择"></lyw-select>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const selected = ref('选项一')
<\/script>`;
    </script>
    