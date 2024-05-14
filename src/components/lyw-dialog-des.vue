
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div class="p-2">
    <div class="mt-2 mb-3">使用示例</div>
    <lyw-btn @click="$refs['lyw-dialog'].show()" title="显示对话框"></lyw-btn>
    <lyw-dialog ref="lyw-dialog"></lyw-dialog>
  </div>
</template>
`;
    </script>
    