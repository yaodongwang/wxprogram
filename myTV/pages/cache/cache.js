var imageUtil = require("../../utils/util.js");
let chodata;
Page({
  data: {
    listdata: ["选项一", "选项二", "选项三"],
    left: '10px',
    chodata: 0,
    sliderOffset: 0,
    images: "/images/jx.png"
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    imageUtil.imageUtil();
  },
  change: function (event) {
    console.log(event);
    chodata = event.target.id;
    this.setData({
      chodata,
      sliderOffset: event.currentTarget.offsetLeft,
    });
  },
  opensheet: function (event) {
    wx.showActionSheet({
      itemList: ['A', 'B', 'C'],
      success: function (res) {
        if (!res.cancel) {
          console.log(res.tapIndex)
        }
      }
    })
  }
})