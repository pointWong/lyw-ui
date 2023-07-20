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
  __name: "lyw-sort",
  props: {
    text: String,
    styles: {
      type: Object,
      default() {
        return {
          color: "#666"
        };
      }
    }
  },
  emits: ["on-change"],
  setup(__props, { emit }) {
    const sortType = common_vendor.ref(null);
    const iconUpColor = common_vendor.computed(() => {
      if (sortType.value == "asc") {
        return "#e61673";
      }
      return "#666";
    });
    const iconDownColor = common_vendor.computed(() => {
      if (sortType.value == "desc") {
        return "#e61673";
      }
      return "#666";
    });
    const clickItem = () => {
      if (!sortType.value) {
        sortType.value = "desc";
      } else if (sortType.value == "desc") {
        sortType.value = "asc";
      } else {
        sortType.value = void 0;
      }
      emit("on-change", sortType.value);
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.text || "排序"),
        b: common_vendor.s(`color:${sortType.value ? "#e61673" : ""}`),
        c: common_vendor.p({
          type: "top",
          color: common_vendor.unref(iconUpColor),
          size: "24rpx"
        }),
        d: common_vendor.p({
          type: "bottom",
          color: common_vendor.unref(iconDownColor),
          size: "24rpx"
        }),
        e: common_vendor.s(__props.styles),
        f: common_vendor.o(clickItem)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4caa8de3"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-sort/lyw-sort.vue"]]);
wx.createComponent(Component);
