<template>
  <div class="p-3">
    <div>使用示例</div>
    <lyw-btn
      class="mt-3"
      @click="$refs['lyw-delivery-time'].open()"
      title="显示"
    ></lyw-btn>
    <lyw-delivery-time
      :type="2"
      :timeOpts="timesList"
      ref="lyw-delivery-time"
    ></lyw-delivery-time>
  </div>
</template>
<script setup>
const setTimeList = () => {
  const today = new Date().getTime();
  const od = 24 * 60 * 60 * 1000;
  return new Array(14).fill({}).map((item, i) => {
    let dateStamp = new Date();
    dateStamp.setTime(today + od * i);
    const year = dateStamp.getFullYear();
    const month = dateStamp.getMonth() + 1;
    const date = dateStamp.getDate();
    const day = dateStamp.getDay();
    const weekday = ["周一", "周二", "周三", "周四", "周五", "周六", "周日"][
      day
    ];
    item.date = year + "-" + month + "-" + date;
    item.d = month + "." + date;
    item.week = weekday;
    item.hourRangeList = [
      {
        hourRange: "08:00~12:00",
        hourStart: "08:00",
        hourEnd: "12:00",
        enough: true,
        limitNumber: 5,
        placesNumber: 0,
      },
      {
        hourRange: "12:00~20:00",
        hourStart: "12:00",
        hourEnd: "20:00",
        enough: true,
        limitNumber: 5,
        placesNumber: 0,
      },
      {
        hourRange: "20:00~02:00",
        hourStart: "20:00",
        hourEnd: "02:00",
        enough: true,
        limitNumber: 5,
        placesNumber: 0,
      },
    ];
    return JSON.parse(JSON.stringify(item));
  });
};
const timesList = setTimeList();
</script>
