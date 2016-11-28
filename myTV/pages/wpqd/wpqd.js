var utilImg = require("../../utils/util.js");
Page({
  data:{
    imgWid:0,
    left:0,
    list:[
        {img:"http://1img.mgtv.com/preview/cms_icon/2016/11/20161116183027805.jpg",title:"相爱穿梭千年2",info:"每周三四24:00 芒果TV全网独播"},
        {img:"http://2img.mgtv.com/preview/cms_icon/2016/11/20161111200849822.jpg",title:"爸爸去哪儿 第四季",info:"周五20点会员先看 24点免费看"},
        {img:"http://2img.mgtv.com/preview/cms_icon/2016/11/20161116185032005.jpg",title:"谍影重重5",info:"马特达蒙强势归来玩命搏杀"},
        {img:"http://2img.mgtv.com/preview/cms_icon/2016/11/20161104222743531.jpg",title:"真正男子汉 第二季",info:"每周五22:00 芒果TV全网首播"},
        {img:"http://1img.mgtv.com/preview/cms_icon/2016/10/20161009120428109.jpg",title:"青云志",info:"李易峰赵丽颖再掀仙侠热"},
        {img:"http://3img.mgtv.com/preview/cms_icon/2016/10/20161009115124547.jpg",title:"快乐大本营",info:"每周六22:00 芒果TV全网独播"},
        {img:"http://3img.mgtv.com/preview/cms_icon/2016/10/20161022221610309.jpg",title:"一年级·毕业季",info:"每周六24:00 芒果TV全网独播"},
        {img:"http://4img.mgtv.com/preview/cms_icon/2016/11/20161111110630248.jpg",title:"致青春·原来你还在这里",info:"吴亦凡刘亦菲上演青春虐恋"},
        {img:"http://1img.mgtv.com/preview/cms_icon/2016/10/20161019205455703.jpg",title:"兰陵王妃",info:"周二至周五20点芒果TV全网独播"},
        {img:"http://1img.mgtv.com/preview/cms_icon/2016/10/20161019204845094.jpg",title:"黄金单身汉",info:"每周六12:00 芒果TV全网独播"},
        {img:"http://0img.mgtv.com/preview/cms_icon/2016/10/20161028225437199.jpg",title:"七月与安生",info:"周冬雨马思纯“相爱相杀"},
        {img:"http://3img.mgtv.com/preview/cms_icon/2016/10/20161009114710250.jpg",title:"天天向上",info:"每周五24:00 芒果TV全网独播"},
        {img:"http://0img.mgtv.com/preview/cms_icon/2016/10/20161019205839000.jpg",title:"大鱼海棠",info:"椿与鲲纠缠的命运斗争"},
        {img:"http://1img.mgtv.com/preview/cms_icon/2016/10/20161009152709144.jpg",title:"云画的月光",info:"朴宝剑金裕贞携手相吻"},
        {img:"http://2img.mgtv.com/preview/cms_icon/2016/10/20161022223642713.jpg",title:"幻城 ",info:"冰火两族决战 冯绍峰宋茜永别"},
    ],
    bgimg:'http://1img.mgtv.com/preview/cms_icon/2016/11/20161116183027805.jpg'
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    let whSize = utilImg.imageUtil();//屏幕的宽
    console.log(whSize);
    this.setData({
      imghei:whSize.hei,
      imgwid:whSize.wid,
      left:whSize.wid,
    })
  },
  change:function(e){
    let index = e.detail.current;
    let imgulr = this.data.list[index].img;
    this.setData({
      bgimg : imgulr
    });
  }
})