"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  props: {
    current: {
      type: [String, Number],
      default: 0
    },
    styles: {
      type: Object,
      default() {
        return {
          height: "50rpx",
          fontSize: "26rpx"
        };
      }
    },
    placeHolder: {
      type: String,
      default: "请选择"
    },
    placeHolderStyle: {
      type: Object,
      default() {
        return {};
      }
    },
    disabled: Boolean,
    showFirst: {
      type: Boolean,
      default: true
    },
    list: {
      type: Array,
      default() {
        return [
          {
            name: "选项一",
            value: 1
          },
          {
            name: "选项二",
            value: 2
          },
          {
            name: "选项三",
            value: 3
          }
        ];
      }
    }
  },
  setup(props, {
    emit
  }) {
    const pickViewValue = common_vendor.ref(void 0);
    common_vendor.watch(() => props.current, async () => {
      common_vendor.wx$1.nextTick(() => {
        pickViewValue.value = props.list.findIndex((item) => item.value === props.current);
      });
    }, {
      immediate: true
    });
    const change = (e) => {
      pickViewValue.value = e.detail.value[0];
      const picked = props.list[pickViewValue.value];
      emit("update:current", picked && picked.value);
      emit("change", picked);
    };
    const popup = common_vendor.ref(null);
    const openPopup = () => {
      if (!props.list.length || props.disabled)
        return;
      popup.value.open();
    };
    const pickViewValues = common_vendor.computed(() => {
      if (!pickViewValue.value)
        return [];
      return [pickViewValue.value];
    });
    const closePop = (e) => {
      if (!e.show && pickViewValue.value < 0) {
        const firstItem = props.list[0];
        if (firstItem) {
          pickViewValue.value = 0;
          emit("update:current", firstItem && firstItem.value);
          emit("change", firstItem);
        }
      }
    };
    const selected = common_vendor.computed(() => {
      if (!props.showFirst && pickViewValue.value == 0) {
        return void 0;
      }
      return props.list[pickViewValue.value] && props.list[pickViewValue.value].name || props.current;
    });
    return {
      popup,
      pickViewValue,
      pickViewValues,
      change,
      openPopup,
      closePop,
      selected
    };
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../../uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $setup.selected
  }, $setup.selected ? {
    b: common_vendor.t($setup.selected),
    c: common_vendor.s(`color:${$setup.selected ? "#e61673" : ""}`)
  } : {
    d: common_vendor.t($props.placeHolder),
    e: common_vendor.s($props.placeHolderStyle)
  }, {
    f: common_vendor.p({
      color: $setup.selected ? "#e61673" : "",
      type: "bottom",
      size: "24rpx"
    }),
    g: common_vendor.n($props.disabled ? "disabled" : ""),
    h: common_vendor.o((...args) => $setup.openPopup && $setup.openPopup(...args)),
    i: common_vendor.s($props.styles),
    j: common_vendor.f($props.list, (item, i, i0) => {
      return {
        a: common_vendor.t(item.name),
        b: i
      };
    }),
    k: $setup.pickViewValues,
    l: common_vendor.o((...args) => $setup.change && $setup.change(...args)),
    m: common_vendor.sr("popup", "7d8e67e7-1"),
    n: common_vendor.o($setup.closePop),
    o: common_vendor.p({
      type: "bottom",
      safeArea: false
    })
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-dropdown/lyw-dropdown.vue"]]);
wx.createComponent(Component);
