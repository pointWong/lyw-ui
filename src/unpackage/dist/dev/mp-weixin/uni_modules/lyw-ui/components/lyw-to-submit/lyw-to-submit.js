"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    data: {
      type: Object,
      default() {
        return {};
      }
    },
    isSelectAll: {
      type: Boolean,
      default: false
    },
    selectAll: {
      type: Boolean,
      default: true
    },
    btnText: {
      type: String,
      default: "去结算"
    },
    disabled: Boolean,
    showHeadSlot: Boolean
  },
  watch: {
    isSelectAll(n) {
      this.params.isSelectAll = n;
    },
    data(n) {
      this.params.data = n;
    }
  },
  setup(props, { emit }) {
    const params = common_vendor.reactive({});
    for (let key in props) {
      params[key] = props[key];
    }
    const eventCommit = (eventName) => {
      emit(eventName);
    };
    return {
      params,
      eventCommit
    };
  }
};
if (!Array) {
  const _easycom_lyw_radio2 = common_vendor.resolveComponent("lyw-radio");
  _easycom_lyw_radio2();
}
const _easycom_lyw_radio = () => "../lyw-radio/lyw-radio.js";
if (!Math) {
  _easycom_lyw_radio();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.showHeadSlot
  }, $props.showHeadSlot ? {} : {}, {
    b: $setup.params.selectAll
  }, $setup.params.selectAll ? {
    c: common_vendor.o(($event) => $setup.eventCommit("selectAll")),
    d: common_vendor.p({
      size: 40,
      mgr: 0,
      select: $setup.params.isSelectAll
    })
  } : {}, {
    e: $setup.params.selectAll
  }, $setup.params.selectAll ? {} : {}, {
    f: common_vendor.t($setup.params.selectAll ? "已选" : "共"),
    g: common_vendor.t($setup.params.data.count || 0),
    h: common_vendor.t($setup.params.data.total || 0),
    i: $setup.params.selectAll ? 1 : "",
    j: common_vendor.t($props.btnText),
    k: $props.disabled ? 1 : "",
    l: common_vendor.o(($event) => $setup.eventCommit("confirm")),
    m: common_vendor.s(`height:calc(${$props.showHeadSlot ? 224 : 170}rpx - 20rpx - 80rpx)`)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-d47bf934"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-to-submit/lyw-to-submit.vue"]]);
wx.createComponent(Component);
