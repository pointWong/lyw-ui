
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div class="p-2">
    <div class="py-3">使用示例</div>
    <div>
      <lyw-progress
        :list="[
          { name: '进度' },
          { name: '进度' },
          { name: '进度' },
          { name: '进度' },
        ]"
      ></lyw-progress>
    </div>
  </div>
</template>
`;
    </script>
    