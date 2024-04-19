<template>
  <div class="md:max-w-screen-sm md:mx-auto">
    <view>
      <uni-collapse>
        <uni-collapse-item title="银行卡信息">
          <lyw-card>
            <lyw-btn
              @click="$refs['bankpay'].open()"
              title="显示银行信息"
            ></lyw-btn>
            <lyw-bankpay-info ref="bankpay"></lyw-bankpay-info>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="级联选择">
          <lyw-card>
            <lyw-cascade :list="cascadeList"></lyw-cascade>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="选择框">
          <lyw-card>
            <view>
              <lyw-checkbox></lyw-checkbox>
            </view>
            <view style="margin-top: 10px">
              <lyw-radio></lyw-radio>
            </view>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="倒计时">
          <lyw-card>
            <lyw-countdown
              :value="countdownNum"
              @click="countdownNum = Math.random()"
            ></lyw-countdown>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="日期范围选择器">
          <lyw-card>
            <lyw-date-range></lyw-date-range>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="日期选择器">
          <lyw-card>
            <lyw-datepicker></lyw-datepicker>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="配送时间">
          <lyw-card>
            <lyw-btn
              @click="$refs['lyw-delivery-time'].open()"
              title="显示配送时间"
            ></lyw-btn>
            <lyw-delivery-time
              :type="2"
              :timeOpts="timesList"
              ref="lyw-delivery-time"
            ></lyw-delivery-time>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="对话框">
          <lyw-card>
            <lyw-btn
              @click="$refs['lyw-dialog'].show()"
              title="显示对话框"
            ></lyw-btn>
            <lyw-dialog ref="lyw-dialog"></lyw-dialog>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="Dropdown">
          <lyw-card :styles="{ height: '300rpx' }">
            <lyw-dropdown></lyw-dropdown>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="Select">
          <lyw-card>
            <lyw-select></lyw-select>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="筛选">
          <lyw-card>
            <lyw-filter>
              <view>筛选条件插槽</view>
            </lyw-filter>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="图片切换查看器">
          <lyw-card>
            <lyw-btn
              @click="$refs['image-swiper'].show()"
              title="显示"
            ></lyw-btn>
            <lyw-image-swiper
              ref="image-swiper"
              :list="imageList"
            ></lyw-image-swiper>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="文本输入框">
          <lyw-card>
            <lyw-input></lyw-input>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="文本输入框(带搜索按钮)">
          <lyw-card>
            <lyw-search-input></lyw-search-input>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="分割线">
          <lyw-card>
            <lyw-line></lyw-line>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="Tab">
          <lyw-card>
            <lyw-tab
              v-model="tabIndex"
              :list="[
                { value: 0, label: '选项' },
                { value: 1, label: '选项二' },
                { value: 2, label: '选项三' },
              ]"
            ></lyw-tab>
          </lyw-card>
        </uni-collapse-item>

        <uni-collapse-item title="Mask">
          <lyw-card>
            <lyw-btn @click="showMask = true" title="显示"></lyw-btn>
          </lyw-card>
          <lyw-mask :show="showMask" @on-close="showMask = false"></lyw-mask>
        </uni-collapse-item>
        <uni-collapse-item title="空状态">
          <lyw-card>
            <div style="height: 300px">
              <lyw-no-data margin-top="0"></lyw-no-data>
            </div>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="拨打电话">
          <lyw-card>
            <text
              v-on:click="$refs['phonecall'].show()"
              style="text-decoration: underline; color: cornflowerblue"
              >1370003030</text
            >
            <lyw-phonecall ref="phonecall"></lyw-phonecall>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="progress">
          <lyw-card>
            <lyw-progress
              :list="[
                { name: '进度' },
                { name: '进度' },
                { name: '进度' },
                { name: '进度' },
              ]"
            ></lyw-progress>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="segment">
          <lyw-card>
            <lyw-segment
              v-model:current="current"
              :list="[
                { name: '小狗' },
                { name: '小猫' },
                { name: '小兔' },
                { name: '小鸭' },
              ]"
            ></lyw-segment>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="排序">
          <lyw-card>
            <lyw-sort></lyw-sort>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="星级">
          <lyw-card>
            <lyw-stars></lyw-stars>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="左滑操作">
          <lyw-card>
            <lyw-swipeAction>
              <view style="width: 100%; height: 80px; background-color: aqua"
                >左滑看看</view
              >
            </lyw-swipeAction>
          </lyw-card>
          <lyw-card>
            <lyw-swipeAction>
              <view
                style="
                  width: 100%;
                  height: 80px;
                  background-color: red;
                  color: white;
                "
                >左滑看看</view
              >
              <template #action>查看详情</template>
            </lyw-swipeAction>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="开关">
          <lyw-card>
            <lyw-switch></lyw-switch>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="文本域">
          <lyw-card>
            <lyw-textarea></lyw-textarea>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="表格">
          <lyw-card>
            <lyw-table
              :columns="columns"
              :data="tableData"
              width="100%"
              height="300px"
            ></lyw-table>
          </lyw-card>
        </uni-collapse-item>
        <uni-collapse-item title="tabbar">
          <lyw-card>
            <lyw-tabbar
              :styles="{ position: 'static', width: '100%', height: 'auto' }"
            ></lyw-tabbar>
          </lyw-card>
        </uni-collapse-item>
      </uni-collapse>
    </view>
  </div>
</template>
<script setup>
import { ref } from "vue";

import times from "./../../data/times";

const timesList = times;

const tabIndex = ref(0);

const showMask = ref(false);

const current = ref(0);

const countdownNum = ref(60);

const props = defineProps({
  title: "Hello",
});

const cascadeList = [
  {
    name: "项目一",
    value: 0,
    child: [
      {
        name: "项目一",
        value: 1,
        child: [
          {
            name: "项目一",
            value: 1,
          },
        ],
      },
      {
        name: "项目一",
        value: 1,
        child: [
          {
            name: "项目一",
            value: 1,
          },
        ],
      },
      {
        name: "项目一",
        value: 1,
        child: [
          {
            name: "项目一",
            value: 1,
          },
        ],
      },
    ],
  },
  {
    name: "项目一",
    value: 1,
    child: [
      {
        name: "项目一",
        value: 0,
        child: [
          {
            name: "项目一",
            value: 0,
          },
        ],
      },
    ],
  },
  {
    name: "项目一",
    value: 3,
    child: [
      {
        name: "项目一",
        value: 0,
        child: [
          {
            name: "项目一",
            value: 0,
          },
        ],
      },
    ],
  },
];

const imageList = [
  "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/d55d112aaf11491e81954e983d3b8159.jpg",
  "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/39d48871f52441708bc5cf27ca344be5.JPG",
  "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/917b0c961226425d904839c5dec2d85a.JPG",
  "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/c038342480cb4769a0fe6476b8de5da0.JPG",
];

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

const showModal = ref(false);
</script>

<style></style>
