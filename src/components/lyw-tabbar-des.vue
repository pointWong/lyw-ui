
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div>
    <lyw-tabbar
      :styles="{ position: 'static', width: '100%', height: 'auto' }"
    ></lyw-tabbar>
  </div>
</template>
`;
    </script>
    