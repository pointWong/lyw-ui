"use strict";
const common_vendor = require("../../common/vendor.js");
const data_times = require("../../data/times.js");
if (!Array) {
  const _easycom_lyw_nav2 = common_vendor.resolveComponent("lyw-nav");
  const _easycom_lyw_btn2 = common_vendor.resolveComponent("lyw-btn");
  const _easycom_lyw_bankpay_info2 = common_vendor.resolveComponent("lyw-bankpay-info");
  const _easycom_lyw_card2 = common_vendor.resolveComponent("lyw-card");
  const _easycom_uni_collapse_item2 = common_vendor.resolveComponent("uni-collapse-item");
  const _easycom_lyw_cascade2 = common_vendor.resolveComponent("lyw-cascade");
  const _easycom_lyw_checkbox2 = common_vendor.resolveComponent("lyw-checkbox");
  const _easycom_lyw_radio2 = common_vendor.resolveComponent("lyw-radio");
  const _easycom_lyw_countdown2 = common_vendor.resolveComponent("lyw-countdown");
  const _easycom_lyw_delivery_time2 = common_vendor.resolveComponent("lyw-delivery-time");
  const _easycom_lyw_dialog2 = common_vendor.resolveComponent("lyw-dialog");
  const _easycom_lyw_dropdown2 = common_vendor.resolveComponent("lyw-dropdown");
  const _easycom_lyw_filter2 = common_vendor.resolveComponent("lyw-filter");
  const _easycom_lyw_image_swiper2 = common_vendor.resolveComponent("lyw-image-swiper");
  const _easycom_lyw_input2 = common_vendor.resolveComponent("lyw-input");
  const _easycom_lyw_listing2 = common_vendor.resolveComponent("lyw-listing");
  const _easycom_lyw_mask2 = common_vendor.resolveComponent("lyw-mask");
  const _easycom_lyw_no_data2 = common_vendor.resolveComponent("lyw-no-data");
  const _easycom_lyw_phonecall2 = common_vendor.resolveComponent("lyw-phonecall");
  const _easycom_lyw_search_input2 = common_vendor.resolveComponent("lyw-search-input");
  const _easycom_lyw_segment2 = common_vendor.resolveComponent("lyw-segment");
  const _easycom_lyw_shopping_car2 = common_vendor.resolveComponent("lyw-shopping-car");
  const _easycom_lyw_sort2 = common_vendor.resolveComponent("lyw-sort");
  const _easycom_lyw_stars2 = common_vendor.resolveComponent("lyw-stars");
  const _easycom_lyw_swipeAction2 = common_vendor.resolveComponent("lyw-swipeAction");
  const _easycom_lyw_switch2 = common_vendor.resolveComponent("lyw-switch");
  const _easycom_lyw_textarea2 = common_vendor.resolveComponent("lyw-textarea");
  const _easycom_uni_collapse2 = common_vendor.resolveComponent("uni-collapse");
  const _easycom_lyw_to_submit2 = common_vendor.resolveComponent("lyw-to-submit");
  (_easycom_lyw_nav2 + _easycom_lyw_btn2 + _easycom_lyw_bankpay_info2 + _easycom_lyw_card2 + _easycom_uni_collapse_item2 + _easycom_lyw_cascade2 + _easycom_lyw_checkbox2 + _easycom_lyw_radio2 + _easycom_lyw_countdown2 + _easycom_lyw_delivery_time2 + _easycom_lyw_dialog2 + _easycom_lyw_dropdown2 + _easycom_lyw_filter2 + _easycom_lyw_image_swiper2 + _easycom_lyw_input2 + _easycom_lyw_listing2 + _easycom_lyw_mask2 + _easycom_lyw_no_data2 + _easycom_lyw_phonecall2 + _easycom_lyw_search_input2 + _easycom_lyw_segment2 + _easycom_lyw_shopping_car2 + _easycom_lyw_sort2 + _easycom_lyw_stars2 + _easycom_lyw_swipeAction2 + _easycom_lyw_switch2 + _easycom_lyw_textarea2 + _easycom_uni_collapse2 + _easycom_lyw_to_submit2)();
}
const _easycom_lyw_nav = () => "../../uni_modules/lyw-ui/components/lyw-nav/lyw-nav.js";
const _easycom_lyw_btn = () => "../../uni_modules/lyw-ui/components/lyw-btn/lyw-btn.js";
const _easycom_lyw_bankpay_info = () => "../../uni_modules/lyw-ui/components/lyw-bankpay-info/lyw-bankpay-info.js";
const _easycom_lyw_card = () => "../../uni_modules/lyw-ui/components/lyw-card/lyw-card.js";
const _easycom_uni_collapse_item = () => "../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js";
const _easycom_lyw_cascade = () => "../../uni_modules/lyw-ui/components/lyw-cascade/lyw-cascade.js";
const _easycom_lyw_checkbox = () => "../../uni_modules/lyw-ui/components/lyw-checkbox/lyw-checkbox.js";
const _easycom_lyw_radio = () => "../../uni_modules/lyw-ui/components/lyw-radio/lyw-radio.js";
const _easycom_lyw_countdown = () => "../../uni_modules/lyw-ui/components/lyw-countdown/lyw-countdown.js";
const _easycom_lyw_delivery_time = () => "../../uni_modules/lyw-ui/components/lyw-delivery-time/lyw-delivery-time.js";
const _easycom_lyw_dialog = () => "../../uni_modules/lyw-ui/components/lyw-dialog/lyw-dialog.js";
const _easycom_lyw_dropdown = () => "../../uni_modules/lyw-ui/components/lyw-dropdown/lyw-dropdown.js";
const _easycom_lyw_filter = () => "../../uni_modules/lyw-ui/components/lyw-filter/lyw-filter.js";
const _easycom_lyw_image_swiper = () => "../../uni_modules/lyw-ui/components/lyw-image-swiper/lyw-image-swiper.js";
const _easycom_lyw_input = () => "../../uni_modules/lyw-ui/components/lyw-input/lyw-input.js";
const _easycom_lyw_listing = () => "../../uni_modules/lyw-ui/components/lyw-listing/lyw-listing.js";
const _easycom_lyw_mask = () => "../../uni_modules/lyw-ui/components/lyw-mask/lyw-mask.js";
const _easycom_lyw_no_data = () => "../../uni_modules/lyw-ui/components/lyw-no-data/lyw-no-data.js";
const _easycom_lyw_phonecall = () => "../../uni_modules/lyw-ui/components/lyw-phonecall/lyw-phonecall.js";
const _easycom_lyw_search_input = () => "../../uni_modules/lyw-ui/components/lyw-search-input/lyw-search-input.js";
const _easycom_lyw_segment = () => "../../uni_modules/lyw-ui/components/lyw-segment/lyw-segment.js";
const _easycom_lyw_shopping_car = () => "../../uni_modules/lyw-ui/components/lyw-shopping-car/lyw-shopping-car.js";
const _easycom_lyw_sort = () => "../../uni_modules/lyw-ui/components/lyw-sort/lyw-sort.js";
const _easycom_lyw_stars = () => "../../uni_modules/lyw-ui/components/lyw-stars/lyw-stars.js";
const _easycom_lyw_swipeAction = () => "../../uni_modules/lyw-ui/components/lyw-swipeAction/lyw-swipeAction.js";
const _easycom_lyw_switch = () => "../../uni_modules/lyw-ui/components/lyw-switch/lyw-switch.js";
const _easycom_lyw_textarea = () => "../../uni_modules/lyw-ui/components/lyw-textarea/lyw-textarea.js";
const _easycom_uni_collapse = () => "../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js";
const _easycom_lyw_to_submit = () => "../../uni_modules/lyw-ui/components/lyw-to-submit/lyw-to-submit.js";
if (!Math) {
  (_easycom_lyw_nav + _easycom_lyw_btn + _easycom_lyw_bankpay_info + _easycom_lyw_card + _easycom_uni_collapse_item + _easycom_lyw_cascade + _easycom_lyw_checkbox + _easycom_lyw_radio + _easycom_lyw_countdown + _easycom_lyw_delivery_time + _easycom_lyw_dialog + _easycom_lyw_dropdown + _easycom_lyw_filter + _easycom_lyw_image_swiper + _easycom_lyw_input + _easycom_lyw_listing + _easycom_lyw_mask + _easycom_lyw_no_data + _easycom_lyw_phonecall + _easycom_lyw_search_input + _easycom_lyw_segment + _easycom_lyw_shopping_car + _easycom_lyw_sort + _easycom_lyw_stars + _easycom_lyw_swipeAction + _easycom_lyw_switch + _easycom_lyw_textarea + _easycom_uni_collapse + _easycom_lyw_to_submit)();
}
const _sfc_main = {
  __name: "index",
  props: {
    title: "Hello"
  },
  setup(__props) {
    const timesList = data_times.times;
    const statusHeight = common_vendor.index.getSystemInfoSync().statusBarHeight;
    const showMask = common_vendor.ref(false);
    const showEmpty = common_vendor.ref(false);
    const current = common_vendor.ref(0);
    const cascadeList = [
      {
        name: "项目一",
        value: 0,
        child: [
          {
            name: "项目一",
            value: 1,
            child: [{
              name: "项目一",
              value: 1
            }]
          },
          {
            name: "项目一",
            value: 1,
            child: [{
              name: "项目一",
              value: 1
            }]
          },
          {
            name: "项目一",
            value: 1,
            child: [{
              name: "项目一",
              value: 1
            }]
          }
        ]
      },
      {
        name: "项目一",
        value: 1,
        child: [{
          name: "项目一",
          value: 0,
          child: [{
            name: "项目一",
            value: 0
          }]
        }]
      },
      {
        name: "项目一",
        value: 3,
        child: [{
          name: "项目一",
          value: 0,
          child: [{
            name: "项目一",
            value: 0
          }]
        }]
      }
    ];
    const imageList = [
      "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/d55d112aaf11491e81954e983d3b8159.jpg",
      "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/39d48871f52441708bc5cf27ca344be5.JPG",
      "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/917b0c961226425d904839c5dec2d85a.JPG",
      "https://lyw-dev.oss-cn-shenzhen.aliyuncs.com/auth/2022/12/12/c038342480cb4769a0fe6476b8de5da0.JPG"
    ];
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "组件列表"
        }),
        b: common_vendor.o(($event) => _ctx.$refs["bankpay"].open()),
        c: common_vendor.p({
          title: "显示银行信息"
        }),
        d: common_vendor.sr("bankpay", "1d9a677a-5,1d9a677a-3"),
        e: common_vendor.p({
          title: "银行卡信息"
        }),
        f: common_vendor.p({
          list: cascadeList
        }),
        g: common_vendor.p({
          title: "级联选择"
        }),
        h: common_vendor.p({
          title: "选择框"
        }),
        i: common_vendor.p({
          title: "倒计时"
        }),
        j: common_vendor.o(($event) => _ctx.$refs["lyw-delivery-time"].open()),
        k: common_vendor.p({
          title: "显示配送时间"
        }),
        l: common_vendor.sr("lyw-delivery-time", "1d9a677a-19,1d9a677a-17"),
        m: common_vendor.p({
          type: 2,
          timeOpts: common_vendor.unref(timesList)
        }),
        n: common_vendor.p({
          title: "配送时间"
        }),
        o: common_vendor.o(($event) => _ctx.$refs["lyw-dialog"].show()),
        p: common_vendor.p({
          title: "显示对话框"
        }),
        q: common_vendor.sr("lyw-dialog", "1d9a677a-23,1d9a677a-21"),
        r: common_vendor.p({
          title: "对话框"
        }),
        s: common_vendor.p({
          title: "下拉选择框"
        }),
        t: common_vendor.p({
          title: "筛选"
        }),
        v: common_vendor.o(($event) => _ctx.$refs["image-swiper"].show()),
        w: common_vendor.p({
          title: "显示"
        }),
        x: common_vendor.sr("image-swiper", "1d9a677a-33,1d9a677a-31"),
        y: common_vendor.p({
          list: imageList
        }),
        z: common_vendor.p({
          title: "图片切换查看器"
        }),
        A: common_vendor.p({
          title: "文本输入框"
        }),
        B: common_vendor.p({
          list: [{
            cateCode: 0,
            cateName: "选项"
          }, {
            cateCode: 1,
            cateName: "选项二"
          }, {
            cateCode: 2,
            cateName: "选项三"
          }]
        }),
        C: common_vendor.p({
          title: "tab"
        }),
        D: common_vendor.o(($event) => showMask.value = true),
        E: common_vendor.p({
          title: "显示蒙层"
        }),
        F: common_vendor.o(($event) => showMask.value = false),
        G: common_vendor.p({
          show: showMask.value
        }),
        H: common_vendor.p({
          title: "蒙层"
        }),
        I: common_vendor.o(($event) => showEmpty.value = true),
        J: common_vendor.p({
          title: "显示"
        }),
        K: common_vendor.o(($event) => showEmpty.value = false),
        L: common_vendor.p({
          show: showEmpty.value
        }),
        M: common_vendor.p({
          title: "空状态"
        }),
        N: common_vendor.o(($event) => _ctx.$refs["phonecall"].show()),
        O: common_vendor.sr("phonecall", "1d9a677a-51,1d9a677a-50"),
        P: common_vendor.p({
          title: "拨打电话"
        }),
        Q: common_vendor.p({
          title: "输入框(带搜索按钮)"
        }),
        R: common_vendor.o(($event) => current.value = $event),
        S: common_vendor.p({
          current: current.value
        }),
        T: common_vendor.p({
          title: "segment"
        }),
        U: common_vendor.p({
          title: "购物车"
        }),
        V: common_vendor.p({
          title: "排序"
        }),
        W: common_vendor.p({
          title: "星级"
        }),
        X: common_vendor.p({
          title: "左滑操作"
        }),
        Y: common_vendor.p({
          title: "开关"
        }),
        Z: common_vendor.p({
          title: "文本域"
        }),
        aa: common_vendor.s(`padding-top:calc(${common_vendor.unref(statusHeight)}px + 44px);padding-bottom:170px`)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/byt/projects/loyowo/lyw-ui/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
