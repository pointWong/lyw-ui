"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "lyw-countdown",
  props: {
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    type: {
      type: String,
      default: "resend"
    },
    value: {
      type: Number,
      default: 3600
    },
    format: {
      type: String,
      default: "yyyy年MM月dd天hh小时mm分钟ss秒"
    }
  },
  emits: ["click", "time-up"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const countdownSecond = common_vendor.ref(60);
    const isTimeUp = common_vendor.ref(true);
    const countValue = common_vendor.ref(0);
    const formatString = common_vendor.ref("");
    const formatStr = common_vendor.computed(() => {
      const year = 60 * 60 * 24 * 30 * 365;
      const month = 60 * 60 * 24 * 30;
      const day = 60 * 60 * 24;
      const hour = 60 * 60;
      const minute = 60;
      const yyyy = Math.floor(countValue.value / year);
      const MM = Math.floor(countValue.value % year / month);
      const dd = Math.floor(countValue.value % year % month / day);
      const hh = Math.floor(countValue.value % year % month % day / hour);
      const mm = Math.floor(countValue.value % year % month % day % hour / minute);
      const ss = countValue.value % year % month % day % hour % minute;
      const obj = { yyyy, MM, dd, hh, mm, ss };
      for (let key in obj) {
        if (obj[key] < 10) {
          obj[key] = `0${obj[key]}`;
        }
        formatString.value = formatString.value.replace(key, obj[key]);
      }
      return formatString.value;
    });
    let countingTimer = void 0;
    const countDownIng = () => {
      if (props.type == "resend") {
        countdownSecond.value--;
        if (countdownSecond.value <= 0) {
          isTimeUp.value = true;
          return;
        }
      } else {
        countValue.value--;
        formatString.value = props.format;
        if (countValue.value <= 0) {
          emit("time-up");
          return;
        }
      }
      clearTimeout(countingTimer);
      countingTimer = setTimeout(() => {
        countDownIng();
      }, 1e3);
    };
    const start = () => {
      countdownSecond.value = 60;
      isTimeUp.value = false;
      countValue.value = props.value;
      formatString.value = props.format;
      countDownIng();
    };
    common_vendor.watch(() => props.value, () => {
      start();
    }, { immediate: true });
    const onClick = () => {
      emit("click");
    };
    expose({
      start
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.type == "resend"
      }, __props.type == "resend" ? common_vendor.e({
        b: isTimeUp.value
      }, isTimeUp.value ? {
        c: common_vendor.o(onClick)
      } : {
        d: common_vendor.t(countdownSecond.value)
      }, {
        e: common_vendor.s(__props.styles)
      }) : {
        f: common_vendor.t(common_vendor.unref(formatStr)),
        g: common_vendor.s(__props.styles)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9efd8fa2"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-countdown/lyw-countdown.vue"]]);
wx.createComponent(Component);
