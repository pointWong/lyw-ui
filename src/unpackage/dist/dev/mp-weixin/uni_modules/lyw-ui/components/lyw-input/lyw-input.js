"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "lyw-input",
  props: {
    maxlength: {
      type: Number,
      default: 50
    },
    type: {
      type: String,
      default: "text"
    },
    placeHolder: {
      type: String,
      default: "请输入"
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    height: {
      type: String,
      default: "60rpx"
    },
    readOnly: Boolean,
    showRightIcon: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    modelValue: String | Number
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const showPassword = common_vendor.ref(true);
    const icon = common_vendor.computed(() => {
      if (showPassword.value) {
        return "eye-slash";
      }
      return "eye";
    });
    const togglePassword = () => {
      showPassword.value = !showPassword.value;
    };
    const value = common_vendor.computed({
      get() {
        return props.modelValue;
      },
      set(value2) {
        emit("update:modelValue", value2);
      }
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.styles.fontSize,
        b: __props.maxlength,
        c: __props.disabled,
        d: __props.type,
        e: __props.placeHolder,
        f: common_vendor.unref(value),
        g: common_vendor.o(($event) => common_vendor.isRef(value) ? value.value = $event.detail.value : null),
        h: __props.showRightIcon
      }, __props.showRightIcon ? {
        i: common_vendor.p({
          type: common_vendor.unref(icon),
          size: "36rpx",
          color: "#ccc"
        }),
        j: common_vendor.o(togglePassword)
      } : {}, {
        k: common_vendor.n(__props.disabled ? "disabled" : ""),
        l: common_vendor.n(__props.readOnly ? "readonly" : ""),
        m: __props.height,
        n: common_vendor.s(__props.styles)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9d0882b6"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-input/lyw-input.vue"]]);
wx.createComponent(Component);
