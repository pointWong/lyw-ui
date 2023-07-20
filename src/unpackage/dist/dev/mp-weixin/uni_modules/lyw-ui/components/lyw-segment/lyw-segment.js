"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    styles: {
      type: Object,
      default() {
        return {
          height: "50rpx",
          "font-size": "26rpx",
          color: "#999"
        };
      }
    },
    current: {
      type: [String, Number],
      default: 0
    },
    list: {
      type: Array,
      default() {
        return [
          {
            name: "项目一",
            value: 0
          },
          {
            name: "项目二",
            value: 1
          }
        ];
      }
    }
  },
  setup(props, context) {
    const selectItem = (item) => {
      context.emit("update:current", item.value);
      context.emit("change", item);
    };
    return {
      ...props,
      selectItem
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.list, (item, i, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: common_vendor.n(item.value == $props.current ? "active" : ""),
        c: common_vendor.n(i == 0 ? "first" : ""),
        d: common_vendor.n(i == $props.list.length - 1 ? "last" : ""),
        e: i,
        f: common_vendor.o(($event) => $setup.selectItem(item), i)
      };
    }),
    b: common_vendor.s($props.styles)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0d151988"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-segment/lyw-segment.vue"]]);
wx.createComponent(Component);
