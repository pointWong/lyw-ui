"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    isLoading: Boolean,
    title: String,
    bgColor: {
      type: String,
      default: "#E61673"
    },
    pad: {
      type: String,
      default: "10px"
    },
    size: String,
    round: Boolean,
    radius: {
      type: String,
      default: "5rpx"
    },
    height: {
      type: String,
      default: "auto"
    },
    width: {
      type: String,
      default: "auto"
    },
    border: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: () => {
        return "#fff";
      }
    }
  },
  watch: {
    bgColor(v) {
      this.params.bgColor = v;
    },
    title(v) {
      this.params.title = v;
    }
  },
  setup(props, { emit }) {
    const params = common_vendor.reactive({});
    for (let key in props) {
      params[key] = props[key];
    }
    const onClick = () => {
      if (props.isLoading)
        return;
      emit("submit");
      emit("click");
    };
    return {
      params,
      emit,
      onClick
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($setup.params.title),
    b: common_vendor.o((...args) => $setup.onClick && $setup.onClick(...args)),
    c: common_vendor.n($props.isLoading ? "loading" : ""),
    d: $setup.params.width,
    e: $setup.params.height,
    f: $setup.params.bgColor,
    g: $setup.params.pad,
    h: $setup.params.size,
    i: $setup.params.color,
    j: $setup.params.radius,
    k: $setup.params.border
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3246373d"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-btn/lyw-btn.vue"]]);
wx.createComponent(Component);
