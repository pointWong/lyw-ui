"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    list: {
      type: Array,
      default: []
    },
    current: {
      type: Number,
      default: 0
    }
  },
  watch: {
    current() {
    }
  },
  setup(props, { emit }) {
    const params = common_vendor.reactive({});
    for (let key in props) {
      params[key] = props[key];
    }
    const selected = common_vendor.ref(params.current);
    const selectItem = (cate) => {
      selected.value = cate.cateCode;
      emit("onChange", cate);
    };
    return {
      params,
      selected,
      selectItem
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($setup.params.list, (cate, i, i0) => {
      return {
        a: common_vendor.t(cate.cateName),
        b: i,
        c: cate.cateCode === $setup.selected ? 1 : "",
        d: common_vendor.o(($event) => $setup.selectItem(cate), i)
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0f5da199"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-listing/lyw-listing.vue"]]);
wx.createComponent(Component);
