"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "lyw-switch",
  props: {
    color: {
      type: String,
      default: "#E61673"
    },
    checked: Boolean,
    size: {
      type: Number,
      default: 40
    }
  },
  emits: ["change"],
  setup(__props, { emit }) {
    const props = __props;
    const ischecked = common_vendor.ref(false);
    common_vendor.watch(() => props.checked, () => {
      ischecked.value = props.checked;
    }, { immediate: true });
    const sclick = () => {
      ischecked.value = !ischecked.value;
      emit("change", { detail: { value: ischecked.value } });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.s(`height:${__props.size * 0.8}rpx;width:${__props.size * 0.8}rpx;`),
        b: common_vendor.n(ischecked.value ? "checked" : ""),
        c: common_vendor.s(`height:${__props.size}rpx;width:${__props.size * 1.7}rpx;padding:${__props.size * 0.1}rpx;border-radius:${__props.size * 0.5}rpx;background-color:${ischecked.value ? __props.color : "#fff"};border-color:${ischecked.value ? __props.color : "#ccc"}`),
        d: common_vendor.o(sclick)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0582d52b"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-switch/lyw-switch.vue"]]);
wx.createComponent(Component);
