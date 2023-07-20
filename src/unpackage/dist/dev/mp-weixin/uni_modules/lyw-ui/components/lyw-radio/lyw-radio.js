"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  __name: "lyw-radio",
  props: {
    select: Boolean,
    size: {
      type: Number,
      default: 32
    },
    mgr: {
      type: [String, Number],
      default: 0
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(__props, { emit }) {
    const props = __props;
    const isSelected = common_vendor.ref(false);
    common_vendor.watch(() => props.select, (newVal) => {
      isSelected.value = newVal;
    }, { immediate: true });
    const selectItem = () => {
      if (props.disabled)
        return;
      isSelected.value = !isSelected.value;
      emit("click", isSelected.value);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: __props.disabled
      }, __props.disabled ? {
        b: common_vendor.s(`width:${__props.size}rpx;height:${__props.size}rpx;`)
      } : !isSelected.value ? {
        d: common_vendor.s(`height:${__props.size}rpx;width:${__props.size}rpx;display:block`),
        e: common_assets._imports_0$1
      } : {
        f: common_vendor.s(`height:${__props.size}rpx;width:${__props.size}rpx;display:block`),
        g: common_assets._imports_1
      }, {
        c: !isSelected.value,
        h: common_vendor.o(selectItem),
        i: common_vendor.s(`margin-right:${__props.mgr}rpx`)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-aeed23cd"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-radio/lyw-radio.vue"]]);
wx.createComponent(Component);
