"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "lyw-image-swiper",
  props: {
    list: {
      type: [Array, String],
      default() {
        return [];
      }
    }
  },
  setup(__props, { expose }) {
    const current = common_vendor.ref(0);
    const lywimageswipepopup = common_vendor.ref(null);
    const showItems = common_vendor.ref(false);
    const show = async (index) => {
      current.value = index || 0;
      lywimageswipepopup.value.open();
      showItems.value = false;
      showItems.value = true;
    };
    const close = () => {
      lywimageswipepopup.value.close();
    };
    expose({
      show
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_assets._imports_0$5,
        b: common_vendor.o(close),
        c: common_vendor.t(current.value + 1),
        d: common_vendor.t(__props.list.length),
        e: showItems.value
      }, showItems.value ? {
        f: common_vendor.f(__props.list || [], (img, i, i0) => {
          return {
            a: img,
            b: i
          };
        }),
        g: current.value,
        h: common_vendor.o((e) => current.value = e.detail.current),
        i: common_vendor.o(close)
      } : {}, {
        j: common_vendor.sr(lywimageswipepopup, "8480e167-0", {
          "k": "lywimageswipepopup"
        }),
        k: common_vendor.p({
          type: "center",
          safeArea: false
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-8480e167"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-image-swiper/lyw-image-swiper.vue"]]);
wx.createComponent(Component);
