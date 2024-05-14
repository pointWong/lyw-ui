<template>
  <div class="p-2">
    <div class="mt-2 mb-3">使用示例</div>
    <lyw-btn @click="$refs['lyw-dialog'].show()" title="显示对话框"></lyw-btn>
    <lyw-dialog ref="lyw-dialog"></lyw-dialog>
  </div>
</template>
