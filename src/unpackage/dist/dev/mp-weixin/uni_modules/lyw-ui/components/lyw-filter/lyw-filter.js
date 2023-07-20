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
  __name: "lyw-filter",
  props: {
    pitchOn: {
      type: Boolean,
      default: false
    },
    filterTitle: {
      type: String,
      default: "筛选"
    },
    text: {
      type: String,
      default: "筛选"
    },
    leftbtnText: {
      type: String,
      default: "清空"
    },
    rightbtnText: {
      type: String,
      default: "确定"
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    },
    contentHeight: {
      type: String,
      default: "500rpx"
    },
    noClear: {
      type: Boolean,
      default: false
    },
    hasLeftBtn: {
      type: Boolean,
      default: false
    }
  },
  emits: ["on-reset", "on-ok", "open", "on-close", "on-leftbtnclick"],
  setup(__props, { expose, emit }) {
    const fpopup = common_vendor.ref(null);
    const change = (e) => {
      if (!e.show) {
        emit("on-close");
      }
    };
    const showPop = () => {
      fpopup.value.open();
      emit("open");
    };
    const close = () => {
      fpopup.value.close();
    };
    const reset = () => {
      emit("on-reset");
      emit("on-leftbtnclick");
    };
    const confirm = () => {
      emit("on-ok");
    };
    expose({
      showPop,
      close
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.text),
        b: common_vendor.s(`color:${__props.pitchOn ? "#e61673" : ""}`),
        c: !__props.pitchOn
      }, !__props.pitchOn ? {
        d: common_assets._imports_0$4
      } : {
        e: common_assets._imports_1$2
      }, {
        f: common_vendor.s(__props.styles),
        g: common_vendor.o(showPop),
        h: common_vendor.t(__props.filterTitle),
        i: common_assets._imports_2,
        j: common_vendor.o(close),
        k: common_vendor.s(`height:${__props.contentHeight}`),
        l: !__props.noClear || __props.hasLeftBtn
      }, !__props.noClear || __props.hasLeftBtn ? {
        m: common_vendor.t(__props.leftbtnText),
        n: common_vendor.o(reset),
        o: common_vendor.t(__props.rightbtnText),
        p: common_vendor.o(confirm)
      } : {
        q: common_vendor.o(confirm)
      }, {
        r: common_vendor.sr(fpopup, "357ef3b0-0", {
          "k": "fpopup"
        }),
        s: common_vendor.o(change),
        t: common_vendor.p({
          type: "bottom",
          safeArea: false
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-357ef3b0"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-filter/lyw-filter.vue"]]);
wx.createComponent(Component);
