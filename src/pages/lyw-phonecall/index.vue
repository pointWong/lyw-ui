<template>
  <div class="p-2">
    <div class="mb-5 mb-4">代码示例</div>
    <text
      v-on:click="$refs['phonecall'].show()"
      style="text-decoration: underline; color: cornflowerblue"
      >1370003030</text
    >
    <lyw-phonecall ref="phonecall"></lyw-phonecall>
  </div>
</template>
