"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  __name: "lyw-no-data",
  props: {
    text: {
      type: String,
      default: "没有查询到相关数据哦~"
    },
    url: {
      type: String,
      default: "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/10/18/ae9c75ce06bb4bf3a3aaa1bd8e879838.png"
    },
    width: {
      type: String,
      default: "270rpx"
    },
    height: {
      type: String,
      default: "auto"
    },
    marginTop: {
      type: String,
      default: "90rpx"
    }
  },
  setup(__props) {
    const imgShow = common_vendor.ref(false);
    common_vendor.onMounted(() => {
      setTimeout(() => {
        imgShow.value = true;
      }, 50);
    });
    const imgloadError = () => {
      imgShow.value = false;
      setTimeout(() => {
        imgShow.value = true;
      }, 500);
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: imgShow.value
      }, imgShow.value ? {
        b: __props.width,
        c: __props.height,
        d: __props.marginTop,
        e: __props.url,
        f: common_vendor.o(imgloadError)
      } : {}, {
        g: common_vendor.t(__props.text)
      });
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-45fbba79"], ["__file", "/Users/byt/projects/loyowo/lyw-ui/src/uni_modules/lyw-ui/components/lyw-no-data/lyw-no-data.vue"]]);
wx.createComponent(Component);
