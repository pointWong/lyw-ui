"use strict";
const common_vendor = require("../../../../common/vendor.js");
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
const _sfc_main = {
  __name: "lyw-cascade",
  props: {
    split: {
      type: String,
      default: ""
    },
    locate: {
      type: Boolean,
      default: false
    },
    level: {
      type: Number,
      default: 3
    },
    placeHolder: {
      type: String,
      default: "请选择省、市、区"
    },
    current: {
      type: [String, Number],
      default: ""
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
    disabled: Boolean,
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
  emits: ["update:current", "change", "on-locate"],
  setup(__props, { emit }) {
    const props = __props;
    const pickViewValues = common_vendor.ref([]);
    common_vendor.watch(() => props.current, async () => {
      console.log(props.current);
      common_vendor.wx$1.nextTick(() => {
        setPickViewValues(props.list);
      });
    }, {
      immediate: true
    });
    const setPickViewValues = (list, index = 0) => {
      const {
        current
      } = props;
      if (!current)
        return;
      for (let i = 0; i < list.length; i++) {
        let item = list[i];
        let noNewItemName = item.name.replace("新区", "");
        let noNewCurrent = current.replace("新区", "");
        if (current.indexOf(item.name) != -1 || noNewCurrent.indexOf(noNewItemName) != -1) {
          pickViewValues.value[index] = i;
          if (item.child && item.child.length) {
            common_vendor.wx$1.nextTick(() => {
              setPickViewValues(item.child, index + 1);
            });
          }
          break;
        }
      }
    };
    const change = async (e) => {
      pickViewValues.value = e.detail.value;
      common_vendor.wx$1.nextTick(() => {
        emit("update:current", setSelected().text);
        emit("change", setSelected().items);
      });
    };
    const popup = common_vendor.ref(null);
    const openPopup = () => {
      if (props.locate) {
        onLocate();
        return;
      }
      if (!props.list.length || props.disabled)
        return;
      popup.value.open();
    };
    const closePop = async (e) => {
      let len = pickViewValues.value.length;
      if (!e.show && len < props.level) {
        pickViewValues.value = pickViewValues.value.concat(new Array(props.level - len).fill(0));
        common_vendor.wx$1.nextTick(() => {
          emit("update:current", setSelected().text);
          emit("change", setSelected().items);
        });
      }
    };
    const setSelected = () => {
      let list = props.list;
      const objArr = [];
      const ss = pickViewValues.value.map((_index, i) => {
        if (!list[_index]) {
          pickViewValues.value[i] = 0;
        }
        let dd = list && list.length && list[_index] || list[0] || {};
        list = dd.child;
        objArr.push(dd);
        return dd ? dd.name : "";
      }).join(props.split);
      return {
        text: ss,
        items: objArr
      };
    };
    const wrapList = common_vendor.computed(() => {
      let len = pickViewValues.value.length;
      let arr = len ? len > 2 ? pickViewValues.value : pickViewValues.value.concat(new Array(props.level - len).fill(0)) : new Array(props.level).fill(0);
      let list = props.list || [];
      return arr.map((_index) => {
        const item = list[_index] || list[0];
        const copyList = JSON.parse(JSON.stringify(list));
        list = item && item.child ? item.child : [];
        return copyList;
      });
    });
    const onLocate = () => {
      emit("on-locate");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: setSelected().text && !__props.locate
      }, setSelected().text && !__props.locate ? {
        b: common_vendor.t(setSelected().text || __props.current)
      } : __props.locate && __props.current ? {
        d: common_vendor.t(__props.current)
      } : {
        e: common_vendor.t(__props.placeHolder)
      }, {
        c: __props.locate && __props.current,
        f: !__props.locate
      }, !__props.locate ? {
        g: common_vendor.p({
          type: "bottom",
          size: "24rpx"
        })
      } : {}, {
        h: common_vendor.n(__props.disabled ? "disabled" : ""),
        i: common_vendor.o(openPopup),
        j: common_vendor.s(__props.styles),
        k: common_vendor.f(common_vendor.unref(wrapList), (c, j, i0) => {
          return {
            a: common_vendor.f(c, (item, i, i1) => {
              return {
                a: common_vendor.t(item.name),
                b: i
              };
            }),
            b: j
          };
        }),
        l: pickViewValues.value,
        m: common_vendor.o(change),
        n: common_vendor.sr(popup, "c56eb8ea-1", {
          "k": "popup"
        }),
        o: common_vendor.o(closePop),
        p: common_vendor.p({
          type: "bottom",
          safeArea: false
        })
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-cascade/lyw-cascade.vue"]]);
wx.createComponent(Component);
