var requData=new Array(),inputData;
var app = getApp(),viewID="answer";
Page({
  data:{
    requData:[""],
    inputData:"",
    userInfo:{},
    isNoRequir:false,
    viewID:"",
    inputval:""
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo : userInfo
      })
    })
  },
  opentuling:function(e){
    var that=this;
    requData.push({text : inputData , isMe : true});
      wx.request({
        url: 'http://www.tuling123.com/openapi/api', 
        data: {
            key: '4d62ba97428d4124a2c922baa1a8e876' ,
            info: inputData,
            userid:'123456'
        },
        header: {
            'Content-Type': 'application/json'
        },
        success: function(res) {
            requData.push({text : res.data.text , isMe :　false});
            
            that.setData({
              inputval:"",
              requData,
              isNoRequir:true,
              viewID:viewID
            });
        }
      });
   },
   onfocus:function(){
      that.setData({
        inputval:""
      });
   },
   inputdata:function(e){
      inputData = e.detail.value
   }
});
