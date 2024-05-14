
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div>
    <div class="p-3">使用示例</div>
    <lyw-stars></lyw-stars>
  </div>
</template>
`;
    </script>
    