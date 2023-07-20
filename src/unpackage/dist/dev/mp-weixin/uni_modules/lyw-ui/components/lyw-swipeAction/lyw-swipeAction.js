"use strict";
const common_vendor = require("../../../../common/vendor.js");
const common_assets = require("../../../../common/assets.js");
const _sfc_main = {
  __name: "lyw-swipeAction",
  props: {
    actionStyle: {
      type: Object,
      default() {
        return {
          width: "140rpx",
          bgColor: "#E61673"
        };
      }
    },
    styles: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  emits: ["on-action"],
  setup(__props, { emit }) {
    const props = __props;
    const mvdistance = common_vendor.ref("");
    let clientXStart = void 0;
    const onTouchStart = (e) => {
      const touch = e.changedTouches[0];
      clientXStart = touch.clientX;
    };
    const onTouchEnd = (e) => {
      const touch = e.changedTouches[0];
      const { clientX, clientY } = touch;
      if (clientXStart - clientX > 100) {
        mvdistance.value = props.actionStyle.width;
      }
      if (clientX - clientXStart > 50) {
        mvdistance.value = ``;
      }
    };
    let isMouseDown = false;
    const onMouseDown = (e) => {
      const { pageX } = e;
      clientXStart = pageX;
      isMouseDown = true;
    };
    const onMouseMove = (e) => {
      if (isMouseDown) {
        const { pageX } = e;
        const md = clientXStart - pageX;
        let max = parseInt(props.actionStyle.width);
        let mvd = parseInt(mvdistance.value);
        if (md < 0) {
          mvdistance.value = mvd + md + "px";
        } else {
          mvdistance.value = (md > max ? max : md) + "px";
        }
      }
    };
    const onMouseUp = (e) => {
      if (isMouseDown) {
        isMouseDown = false;
        const { clientX } = e;
        if (clientXStart - clientX > 100) {
          mvdistance.value = props.actionStyle.width;
        } else {
          mvdistance.value = ``;
        }
      }
    };
    const actionEvent = () => {
      emit("on-action");
    };
    const renderRight = common_vendor.ref(false);
    common_vendor.onMounted(async () => {
      setTimeout(() => {
        renderRight.value = true;
      }, 10);
    });
    return (_ctx, _cache) => {
      return {
        a: common_assets._imports_0$9,
        b: __props.actionStyle.width,
        c: __props.actionStyle.bgColor,
        d: renderRight.value ? 1 : 0,
        e: common_vendor.o(actionEvent),
        f: `-${__props.actionStyle.width}`,
        g: `translate3d(${mvdistance.value ? `-${mvdistance.value}` : "0"},0,0)`,
        h: common_vendor.o(onTouchStart),
        i: common_vendor.o(onTouchEnd),
        j: common_vendor.s(__props.styles),
        k: common_vendor.o(onMouseDown),
        l: common_vendor.o(onMouseUp),
        m: common_vendor.o(onMouseMove),
        n: common_vendor.o(onMouseUp)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-d410e576"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-swipeAction/lyw-swipeAction.vue"]]);
wx.createComponent(Component);
