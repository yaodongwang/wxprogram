var app = getApp();
Page({
  data: {
    userInfo: {},
    icr: "/images/right-gray.png",
    tit2: [{ name: "播放记录", ioc: "/images/jxselect.png" }, { name: "我的收藏", ioc: "/images/jxselect.png" }, { name: "我的评论", ioc: "/images/jxselect.png" }, { name: "会员中心", ioc: "/images/jxselect.png" }],
    tit3: [{ tit: "流量商城", ioc: "/images/jx.png" },
    { tit: "最近在看", ioc: "/images/jx.png" },
    { tit: "游戏大厅", ioc: "/images/jx.png" },
    { tit: "会员卡兑换", ioc: "/images/jx.png" },
    { tit: "活动中心", ioc: "/images/jx.png" },
    { tit: "设置", ioc: "/images/jx.png" },
    { tit: "帮助反馈", ioc: "/images/jx.png" }],

  },
  onLoad: function (options) {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      console.log(userInfo);
      that.setData({
        userInfo: userInfo
      })
    })
  },
  asd: function (e) {

    // wx.showToast({
    //   title: '成功',
    //   icon: 'success',
    //   duration: 2000
    // });
    wx.chooseImage({
      count: 1, // 默认9
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var tempFilePaths = res.tempFilePaths
        console.log(tempFilePaths);
      }
    })

  }

})