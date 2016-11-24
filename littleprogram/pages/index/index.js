//index.js
//获取应用实例
var app = getApp();
var typeData;
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    name:'打开地图',
    array:[{
      name:'lisi',
      age:'18',
      address:'郑州紫金山',
    }],
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  openDataPicker:function(){
    wx.navigateTo({
      url: '../picker/index'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  /*打开地图 */
  viewTap: function() {
      wx.getLocation({
    type: 'gcj02', //返回可以用于wx.openLocation的经纬度
    success: function(res) {
      var latitude = res.latitude
      var longitude = res.longitude
      wx.openLocation({
        latitude: latitude,
        longitude: longitude,
        scale: 28
      })
    }
  })
  },
  /*网络请求 */
  socket:function(){
    var that = this;
      wx.request({
        url: 'http://60.205.127.152:806/api/MallManagement/GetShopType', 
        success: function(res) {
         typeData = JSON.parse(res.data);
         that.setData({
            shoptype : typeData//[{name:'lisi'},{age:13}]
          });
        }
      })
      
  }
})
