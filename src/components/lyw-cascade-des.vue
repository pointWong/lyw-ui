
    <template>
      <div>代码示例</div>
      <div class="mt-3">
        <highlightjs language="html" :code="code" />
      </div>
    </template>
      <script setup>
      const code = `<template>
  <div class="p-3">
    <lyw-cascade :list="cascadeList" :styles="{height: '30px'}"></lyw-cascade>
  </div>
</template>
<script setup>
const cascadeList = [
  {
    name: "a",
    value: 0,
    child: [
      {
        name: "b",
        value: 1,
        child: [
          {
            name: "c",
            value: 1,
          },
        ],
      },
      {
        name: "e",
        value: 1,
        child: [
          {
            name: "f",
            value: 1,
          },
        ],
      },
      {
        name: "g",
        value: 1,
        child: [
          {
            name: "h",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "i",
    value: 1,
    child: [
      {
        name: "j",
        value: 0,
        child: [
          {
            name: "k",
            value: 0,
          },
        ],
      },
    ],
  },
  {
    name: "l",
    value: 3,
    child: [
      {
        name: "m",
        value: 0,
        child: [
          {
            name: "n",
            value: 0,
          },
        ],
      },
    ],
  },
];
<\/script>
`;
    </script>
    