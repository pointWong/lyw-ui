"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  __name: "lyw-search-input",
  props: {
    bgColor: String,
    height: {
      type: Number,
      default: 64
    },
    modelValue: String,
    placeholder: {
      type: String,
      default: "请输入"
    },
    placeholderStyle: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue", "on-search"],
  setup(__props, { emit }) {
    const props = __props;
    const value = common_vendor.computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    const clearInputValue = () => {
      value.value = "";
    };
    const search = () => {
      emit("on-search");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$6,
        b: __props.placeholder,
        c: __props.placeholderStyle,
        d: common_vendor.unref(value),
        e: common_vendor.o(($event) => common_vendor.isRef(value) ? value.value = $event.detail.value : null),
        f: common_vendor.unref(value)
      }, common_vendor.unref(value) ? {
        g: common_assets._imports_1$3,
        h: common_vendor.o(clearInputValue)
      } : {}, {
        i: common_vendor.o(search),
        j: __props.bgColor,
        k: __props.height + "rpx",
        l: __props.height / 2 + "rpx"
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-b3fc2e0a"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-search-input/lyw-search-input.vue"]]);
wx.createComponent(Component);
