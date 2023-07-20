"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    placeHolder: {
      type: String,
      default: "请输入"
    },
    height: {
      type: String,
      default: "130rpx"
    },
    maxlength: {
      type: Number,
      default: 200
    },
    modelValue: String | Number,
    styles: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  setup(props, {
    emit
  }) {
    const value = common_vendor.computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    return {
      value
    };
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.styles.fontSize,
    b: $props.maxlength,
    c: $props.placeHolder,
    d: $setup.value,
    e: common_vendor.o(($event) => $setup.value = $event.detail.value),
    f: $props.height,
    g: common_vendor.s($props.styles)
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-textarea/lyw-textarea.vue"]]);
wx.createComponent(Component);
