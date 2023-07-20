"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    pdt: {
      type: String,
      default: "32rpx"
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.pdt,
    b: common_vendor.s($props.styles),
    c: common_vendor.o(($event) => _ctx.$emit("click"))
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-ba605cf6"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-card/lyw-card.vue"]]);
wx.createComponent(Component);
