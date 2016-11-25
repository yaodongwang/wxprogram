let chodata;
Page({
  data: {
    listdata: ["选项一", "选项二", "选项三"],
    left: '10px',
    chodata: 0,
    sliderOffset:0
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数

  },
  change: function (event) {
    console.log(event);
    chodata = event.target.id;
    this.setData({
      chodata,
      sliderOffset: event.currentTarget.offsetLeft,
    });
  }
})