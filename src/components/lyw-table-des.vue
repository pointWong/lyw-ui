
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div>
    <div class="p-2">使用示例</div>
    <div>
      <lyw-table
        :columns="columns"
        :data="tableData"
        width="100%"
        height="300px"
      ></lyw-table>
    </div>
  </div>
</template>
<script setup>
const columns = [
  {
    title: "序号",
    type: "index",
    width: "80px",
  },
  {
    title: "姓名",
    key: "name",
  },
  {
    title: "性别",
    key: "gender",
  },
  {
    title: "年龄",
    key: "age",
  },
];

const tableData = [
  {
    name: "小明",
    gender: "男",
    age: "19",
  },
  {
    name: "小明",
    gender: "男",
    age: "19",
  },
  {
    name: "小明",
    gender: "男",
    age: "19",
  },
  {
    name: "小明",
    gender: "男",
    age: "19",
  },
  {
    name: "小明",
    gender: "男",
    age: "19",
  },
];
<\/script>
`;
    </script>
    