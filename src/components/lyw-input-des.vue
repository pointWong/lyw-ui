<template>
  <div>代码示例</div>
  <div class="mt-3">
    <highlightjs language='html' :code="code" />
  </div>
</template>
<script setup>
const code = `
  <template>
    ...
    <lyw-input></lyw-input>
    ...
  </template>
`
</script>