
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div class="p-2">
    <div class="mb-2">使用示例</div>
    <lyw-btn @click="$refs['image-swiper'].show()" title="显示"></lyw-btn>
    <lyw-image-swiper ref="image-swiper" :list="imageList"></lyw-image-swiper>
  </div>
</template>
<script setup>
const imageList = [
  "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/d55d112aaf11491e81954e983d3b8159.jpg",
  "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/39d48871f52441708bc5cf27ca344be5.JPG",
  "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/917b0c961226425d904839c5dec2d85a.JPG",
  "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/c038342480cb4769a0fe6476b8de5da0.JPG",
];
<\/script>
`;
    </script>
    