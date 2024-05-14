
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div class="p-2">
    <div>使用示例</div>
    <div class="mt-3">
      <lyw-switch></lyw-switch>
    </div>
  </div>
</template>
`;
    </script>
    