<template>
  <div>代码示例</div>
  <div class="mt-3">
    <highlightjs language='html' :code="code" />
  </div>
</template>
<script setup>
const code = `
  <template>
    <div class="p-3">
      <div>使用示例</div>
      <lyw-input class="mt-3" v-model="word"></lyw-input>
      <div class="mt-4">输入了：</div>
      <div>{{ word }}</div>
    </div>
  </template>
  <script setup>
    import { ref } from "vue";

    const word = ref('')

  <\/script>
`
</script>