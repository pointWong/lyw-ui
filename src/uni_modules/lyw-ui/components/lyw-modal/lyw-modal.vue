<template>
  <div v-if="modelValue" class="wrap" :style="styles" @click="slickOutSide">
    <div :style="`height:${statusBarHeight + 44}px;background-color:white`"></div>
    <div class="content" @click.stop>
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
const statusBarHeight = uni.getSystemInfoSync().statusBarHeight
const props = defineProps({
  styles:{
    type:Object,
    default(){
      return {}
    }
  },
  modelValue:{
    type:Boolean,
    default:false
  }
})
const emit = defineEmits('update:modelValue')
const slickOutSide = ()=>{
  emit('update:modelValue',false)
}
</script>
<style scoped lang="scss">
.wrap{
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  background-color: rgba($color: #000000, $alpha: 0.6);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
}
</style>