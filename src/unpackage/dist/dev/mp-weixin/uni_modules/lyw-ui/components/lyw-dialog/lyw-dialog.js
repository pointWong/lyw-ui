"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
if (!Array) {
  const _easycom_lyw_btn2 = common_vendor.resolveComponent("lyw-btn");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_lyw_btn2 + _easycom_uni_popup2)();
}
const _easycom_lyw_btn = () => "../lyw-btn/lyw-btn.js";
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_lyw_btn + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "lyw-dialog",
  props: {
    btnmgt: {
      type: Number,
      default: 66
    },
    showClose: Boolean,
    title: {
      type: String,
      default: "标题"
    },
    content: {
      type: String,
      default: "内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容"
    },
    contentStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    confirmText: {
      type: String,
      default: "确定"
    },
    showCancel: {
      type: Boolean,
      default: true
    }
  },
  emits: ["confirm"],
  setup(__props, { expose, emit }) {
    const popup = common_vendor.ref(null);
    const show = () => {
      popup.value.open();
    };
    const close = () => {
      popup.value.close();
    };
    const confirm = () => {
      emit("confirm");
      close();
    };
    expose({
      show,
      close
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.t(__props.title),
        b: common_vendor.t(__props.content),
        c: common_vendor.s(__props.contentStyle),
        d: __props.showCancel
      }, __props.showCancel ? {
        e: common_vendor.o(close),
        f: common_vendor.p({
          width: "260rpx",
          border: "2rpx solid #999999",
          title: "取消",
          height: "70rpx",
          bgColor: "#fff",
          color: "#333",
          size: "30rpx",
          radius: "35rpx"
        }),
        g: common_vendor.o(confirm),
        h: common_vendor.p({
          width: "100%",
          title: __props.confirmText,
          height: "70rpx",
          size: "30rpx",
          radius: "35rpx"
        }),
        i: common_vendor.s(`margin-top:${__props.btnmgt}rpx`)
      } : {
        j: common_vendor.o(confirm),
        k: common_vendor.p({
          width: "526rpx",
          title: __props.confirmText,
          height: "70rpx",
          size: "30rpx",
          radius: "35rpx"
        }),
        l: common_vendor.s(`margin-top:${__props.btnmgt}rpx`)
      }, {
        m: __props.showClose
      }, __props.showClose ? {
        n: common_assets._imports_0$3,
        o: common_vendor.o(close)
      } : {}, {
        p: common_vendor.sr(popup, "f2325397-0", {
          "k": "popup"
        }),
        q: common_vendor.p({
          type: "center"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f2325397"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-dialog/lyw-dialog.vue"]]);
wx.createComponent(Component);
