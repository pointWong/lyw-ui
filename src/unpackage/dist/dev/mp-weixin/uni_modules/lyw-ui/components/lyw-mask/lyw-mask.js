"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "lyw-mask",
  props: {
    show: Boolean,
    text: String,
    showDots: {
      type: Boolean,
      default: true
    },
    clickClose: Boolean
  },
  emits: ["on-close"],
  setup(__props, { emit }) {
    const clickMask = () => {
      emit("on-close");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.show
      }, __props.show ? common_vendor.e({
        b: common_vendor.t(__props.text || "加载中"),
        c: __props.showDots
      }, __props.showDots ? {} : {}, {
        d: common_vendor.o(() => {
        }),
        e: common_vendor.o(clickMask)
      }) : {});
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8fe8ae47"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-mask/lyw-mask.vue"]]);
wx.createComponent(Component);
