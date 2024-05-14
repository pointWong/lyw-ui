
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div>
    <div>日期范围选择器：</div>
    <div class="mt-4 px-2">
      <lyw-date-range></lyw-date-range>
    </div>
  </div>
</template>`;
    </script>
    