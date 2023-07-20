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
  __name: "lyw-bankpay-info",
  props: {
    hideExtra: Boolean
  },
  emits: ["on-change", "on-confirm"],
  setup(__props, { expose, emit }) {
    const paypopup = common_vendor.ref(null);
    const open = (id) => {
      prepayId.value = id;
      paypopup.value.open();
    };
    const close = () => {
      paypopup.value.close();
    };
    const paymentInfo = common_vendor.ref([
      {
        value: "收款户名",
        key: "深圳市乐由我科技有限公司"
      },
      {
        value: "收款账号",
        key: "755957291910908"
      },
      {
        value: "收款银行",
        key: "招商银行"
      },
      {
        value: "支行",
        key: "深圳汉京中心支行"
      }
    ]);
    const prepayId = common_vendor.ref("0000");
    const copyText = (text) => {
      common_vendor.index.setClipboardData({
        data: text,
        success: function() {
          common_vendor.index.showToast({
            title: "复制成功"
          });
        }
      });
    };
    const change = (e) => {
      emit("on-change", e.show);
    };
    const contact = () => {
      emit("on-confirm");
    };
    expose({
      open
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.f(paymentInfo.value, (item, i, i0) => {
          return {
            a: common_vendor.t(item.value),
            b: common_vendor.t(item.key),
            c: common_vendor.o(($event) => copyText(item.key), i),
            d: i
          };
        }),
        b: !__props.hideExtra
      }, !__props.hideExtra ? {
        c: common_vendor.t(prepayId.value),
        d: common_vendor.o(($event) => copyText(prepayId.value))
      } : {}, {
        e: common_vendor.o(contact),
        f: common_vendor.o(close),
        g: common_vendor.sr(paypopup, "631646b4-0", {
          "k": "paypopup"
        }),
        h: common_vendor.o(change),
        i: common_vendor.p({
          type: "center"
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-631646b4"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-bankpay-info/lyw-bankpay-info.vue"]]);
wx.createComponent(Component);
