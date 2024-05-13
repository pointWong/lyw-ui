<template>
  <div>代码示例</div>
  <div class="mt-3">
    <highlightjs language="html" :code="code" />
  </div>
</template>
<script setup>
const code = `
  <template>
    ...
    <lyw-checkbox class="mt-4" :checked="isSelected" @change="change"></lyw-checkbox>
    ...
  </template>
  <script setup>
    import { ref } from "vue";
    const isSelected = ref(false);
    const change = (checked) => {
      isSelected.value = checked;
    };
  <\/script>
`;
</script>
