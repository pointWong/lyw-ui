
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div class="p-2">
    <lyw-tab
      v-model="tabIndex"
      :list="[
        { value: 0, label: '选项' },
        { value: 1, label: '选项二' },
        { value: 2, label: '选项三' },
      ]"
    ></lyw-tab>
  </div>
</template>
<script setup>
import { ref } from 'vue';

const tabIndex = ref(0);
<\/script>
`;
    </script>
    