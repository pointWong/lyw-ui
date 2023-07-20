"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  props: {
    value: {
      type: Number,
      default: 2
    }
  },
  setup(props) {
    return {
      ...props
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f(3, (item, i, i0) => {
      return common_vendor.e({
        a: i < $props.value
      }, i < $props.value ? {
        b: common_assets._imports_0$8
      } : {
        c: common_assets._imports_1$5
      }, {
        d: item
      });
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-37017c98"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-stars/lyw-stars.vue"]]);
wx.createComponent(Component);
