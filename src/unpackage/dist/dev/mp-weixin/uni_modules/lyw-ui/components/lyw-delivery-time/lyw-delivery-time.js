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
  __name: "lyw-delivery-time",
  props: {
    title: {
      type: String,
      default: "选择配送时间"
    },
    itemLabel: {
      type: String,
      default: "可预约"
    },
    type: {
      type: Number,
      default: 1
    },
    timeOpts: {
      type: Array,
      default() {
        return [];
      }
    },
    selected: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["on-confirm", "on-change"],
  setup(__props, { expose, emit }) {
    const props = __props;
    const isOverNow = (date, start, end) => {
      let isOver = false;
      const st = start.split(":")[0];
      const ed = end.split(":")[0];
      const now = /* @__PURE__ */ new Date();
      let datetime = (/* @__PURE__ */ new Date(`${date.replace(/-/g, "/")} ${end}:00`)).getTime();
      if (st > ed) {
        datetime = datetime + 24 * 60 * 60 * 1e3;
      }
      if (now.getTime() + 2 * 60 * 60 * 1e3 > datetime) {
        isOver = true;
      }
      return isOver;
    };
    const filterTimeOpts = (list, type) => {
      if (list.length) {
        return list.map((item) => {
          item.hourRangeList = item.hourRangeList.map((sitem) => {
            sitem.isSelect = false;
            const {
              date
            } = item;
            const {
              hourEnd,
              hourStart
            } = sitem;
            if (type == 2) {
              sitem.enough = true;
            }
            if (isOverNow(date, hourStart, hourEnd)) {
              sitem.enough = false;
            }
            return sitem;
          });
          return item;
        });
      }
      return [];
    };
    const popup = common_vendor.ref(null);
    const open = async (title) => {
      popup.value.open();
    };
    const setSelectedOpt = () => {
      ctimeOpts.value.forEach((ii) => {
        if (ii.date == props.selected.date) {
          ii.hourRangeList.forEach((jj) => {
            jj.isSelect = false;
            if (jj.hourRange == props.selected.hourRange) {
              const {
                date
              } = ii;
              const {
                hourEnd,
                hourStart
              } = jj;
              if (isOverNow(date, hourStart, hourEnd) || !jj.enough) {
                selected.value = {};
              } else {
                jj.isSelect = true;
              }
            }
          });
        }
      });
    };
    const closePop = () => {
      popup.value.close();
    };
    const confirm = () => {
      const {
        date,
        hourEnd,
        hourStart
      } = selected.value;
      if (date && hourEnd && isOverNow(date, hourStart, hourEnd)) {
        common_vendor.index.showToast({
          title: "当前时间已经超过所选时间段，请选择其他时间",
          type: "none"
        });
        return;
      }
      emit("on-confirm", selected.value);
      closePop();
    };
    const change = (e) => {
      emit("on-change", e.show);
    };
    const selected = common_vendor.ref({});
    const selectItem = (item, p) => {
      if (item.enough) {
        const {
          date
        } = p;
        const {
          hourEnd,
          hourStart
        } = item;
        if (isOverNow(date, hourStart, hourEnd)) {
          common_vendor.index.showToast({
            title: "当前时间已经超过所选时间段，请选择其他时间",
            type: "none"
          });
          p.enough = false;
          return;
        }
        ctimeOpts.value.forEach((ii) => {
          ii.hourRangeList.forEach((jj) => {
            jj.isSelect = false;
          });
        });
        item.isSelect = true;
        selected.value = Object.assign(item, p);
      }
    };
    const ctimeOpts = common_vendor.ref([]);
    common_vendor.watch(() => props.timeOpts, (newOpts) => {
      console.log("🚀 ~ file: lyw-delivery-time.vue:134 ~ watch ~ newOpts:", newOpts);
      ctimeOpts.value = filterTimeOpts(newOpts, props.type);
      setSelectedOpt();
    }, { immediate: true });
    common_vendor.watch([() => props.selected, () => props.type], () => {
      if (ctimeOpts.value.length) {
        ctimeOpts.value = filterTimeOpts(ctimeOpts.value, props.type);
        setSelectedOpt();
      }
    });
    expose({
      open
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$2,
        b: common_vendor.o(closePop),
        c: common_vendor.t(__props.title),
        d: common_vendor.f(ctimeOpts.value[0] ? ctimeOpts.value[0].hourRangeList : [], (item, i, i0) => {
          return {
            a: common_vendor.t(item.hourRange),
            b: i
          };
        }),
        e: common_vendor.f(ctimeOpts.value, (item, i, i0) => {
          return {
            a: common_vendor.t(item.d),
            b: common_vendor.t(item.week),
            c: common_vendor.f(item.hourRangeList, (op, j, i1) => {
              return common_vendor.e({
                a: op.enough && !op.isSelect
              }, op.enough && !op.isSelect ? {
                b: common_vendor.t(__props.itemLabel)
              } : {}, {
                c: op.isSelect
              }, op.isSelect ? {
                d: common_assets._imports_1$1
              } : {}, {
                e: j,
                f: op.enough ? 1 : "",
                g: op.isSelect ? 1 : "",
                h: common_vendor.o(($event) => selectItem(op, item), j)
              });
            }),
            d: i
          };
        }),
        f: common_vendor.o(confirm),
        g: common_vendor.p({
          width: "710rpx",
          height: "90rpx",
          radius: "45rpx",
          size: "32rpx",
          title: "确定"
        }),
        h: common_vendor.sr(popup, "d9ecc496-0", {
          "k": "popup"
        }),
        i: common_vendor.o(change),
        j: common_vendor.p({
          type: "bottom",
          safeArea: false
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d9ecc496"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-delivery-time/lyw-delivery-time.vue"]]);
wx.createComponent(Component);
