"use strict";
const common_vendor = require("../../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  _easycom_uni_popup2();
}
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  _easycom_uni_popup();
}
const _sfc_main = {
  __name: "lyw-phonecall",
  props: {
    phone: {
      type: [Number, String],
      default: "1370003030"
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const popup = common_vendor.ref(null);
    const padb = common_vendor.ref(0);
    const show = () => {
      popup.value.open();
      const info = common_vendor.index.getWindowInfo();
      const { screenHeight, safeArea } = info;
      const { bottom } = safeArea;
      padb.value = screenHeight - bottom;
    };
    const close = () => {
      popup.value.close();
    };
    const makeCall = () => {
      console.log("props.phone", props.phone);
      common_vendor.index.makePhoneCall({
        phoneNumber: props.phone
      });
      popup.value.close();
    };
    expose({
      show,
      close,
      padb
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(__props.phone),
        b: common_vendor.o(makeCall),
        c: padb.value + "px",
        d: common_vendor.o(close),
        e: common_vendor.sr(popup, "4d4e09e1-0", {
          "k": "popup"
        }),
        f: common_vendor.p({
          type: "bottom",
          safeArea: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4d4e09e1"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-phonecall/lyw-phonecall.vue"]]);
wx.createComponent(Component);
