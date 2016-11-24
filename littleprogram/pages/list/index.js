wx.setNavigationBarTitle({
  title: '组件列表'
})
var array = [{
        tit:'小猫(使图片按最短边适应)',
        src:'../images/0.jpg',
        mode:'aspectFill'
      },{
        tit:'小猫(使图片按最长边适应)',
        src:'../images/0.jpg',
        mode:'aspectFit'
      }];
Page({
  data:{
    array:array
  },
  addList:function(e){

    array.push({
        tit:'小猫(使图片按最长边适应)',
        src:'../images/0.jpg',
        mode:'aspectFit'
      });
      this.setData({
        array : array
      });
  }
})
