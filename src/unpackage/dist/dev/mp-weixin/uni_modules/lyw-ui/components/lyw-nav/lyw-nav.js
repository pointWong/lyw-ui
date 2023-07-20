"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    title: {
      type: String,
      default: "标题"
    },
    leftIcon: {
      type: String,
      default: "-"
    },
    border: {
      type: Boolean,
      default: true
    },
    bgColor: {
      type: String,
      default: "#fff"
    },
    color: String,
    isCustomBack: Boolean,
    fw: {
      type: Number,
      default: 600
    },
    home: ""
  },
  setup(props, { emit }) {
    const statusBarHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    const {
      leftIcon
    } = props;
    const clickLeft = async () => {
      if (leftIcon != "-") {
        try {
          if (props.isCustomBack) {
            emit("on-back");
            return;
          }
          common_vendor.index.navigateBack();
        } catch (e) {
          console.log(e);
          common_vendor.index.switchTab({
            url: props.home
          });
        }
      }
    };
    return {
      clickLeft,
      statusBarHeight
    };
  }
};
if (!Array) {
  const _easycom_lyw_nav_title2 = common_vendor.resolveComponent("lyw-nav-title");
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  (_easycom_lyw_nav_title2 + _easycom_uni_nav_bar2)();
}
const _easycom_lyw_nav_title = () => "../lyw-nav-title/lyw-nav-title.js";
const _easycom_uni_nav_bar = () => "../../../uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
if (!Math) {
  (_easycom_lyw_nav_title + _easycom_uni_nav_bar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($props.title),
    b: common_vendor.s(`color:${$props.color};font-weight:${$props.fw}`),
    c: common_vendor.o($setup.clickLeft),
    d: common_vendor.p({
      backgroundColor: $props.bgColor,
      color: $props.color,
      leftIcon: $props.leftIcon,
      statusBar: "true",
      border: $props.border
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1b734786"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-nav/lyw-nav.vue"]]);
wx.createComponent(Component);
