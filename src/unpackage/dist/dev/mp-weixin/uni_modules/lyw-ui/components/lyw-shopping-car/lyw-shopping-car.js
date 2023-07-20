"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  props: {
    url: String,
    show: Boolean
  },
  watch: {
    url(v) {
      this.params.url = v;
    },
    show(v) {
      this.params.show = v;
    }
  },
  setup(props, { emit }) {
    const params = common_vendor.reactive({});
    for (let key in props) {
      params[key] = props[key];
    }
    const navTo = () => {
      if (params.url) {
        common_vendor.index.navigateTo({
          url: params.url
        });
      }
    };
    return {
      params,
      navTo
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: !$setup.params.show
  }, !$setup.params.show ? {
    b: common_assets._imports_0$7
  } : {
    c: common_assets._imports_1$4
  }, {
    d: common_vendor.o((...args) => $setup.navTo && $setup.navTo(...args))
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b50072d2"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-shopping-car/lyw-shopping-car.vue"]]);
wx.createComponent(Component);
