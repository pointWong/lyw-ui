"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  __name: "lyw-checkbox",
  props: {
    size: {
      type: Number,
      default: 34
    },
    checked: Boolean
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const cchecked = common_vendor.ref(false);
    common_vendor.watch(() => props.checked, () => {
      cchecked.value = props.checked;
    }, { immediate: true });
    const clickCheck = () => {
      cchecked.value = !cchecked.value;
      emit("change", !props.checked);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: cchecked.value
      }, cchecked.value ? {
        b: common_vendor.s(`height:${__props.size}rpx;width:${__props.size}rpx;display:block;`),
        c: common_assets._imports_0
      } : {
        d: common_vendor.s(`height:${__props.size}rpx;width:${__props.size}rpx`)
      }, {
        e: common_vendor.o(clickCheck)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-3b846640"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-checkbox/lyw-checkbox.vue"]]);
wx.createComponent(Component);
