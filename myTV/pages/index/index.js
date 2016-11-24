Page({
  data: {
    head_tit: [
      { name: '精选', id: '1001' }, { name: '黄金单身汉', id: '1032' },
      { name: '综艺', id: '1003' }, { name: '电视剧', id: '1004' },
      { name: '电影', id: '1005' }, { name: '少儿', id: '1021' }],
    swipt: [{ img: "http://i3.hunantv.com/p1/20161030/2348011464C.jpg", title: "【青云志】至第54集 李易峰、赵丽颖含泪诀别" },
    { img: "http://i3.hunantv.com/p1/20161029/2335584186C.jpg", title: "【一年级·毕业季】汪峰陈伟霆空降指导" },
    { img: "http://i1.hunantv.com/p1/20161028/235103791C.jpg", title: "【爸爸去哪儿4·第三期】安吉晋升小爸爸替父带娃" },
    { img: "http://i1.hunantv.com/p1/20161028/2135198265C.jpg", title: "【真正男子汉2·第二期】黄子韬怒怼教官血性逆袭" },
    { img: "http://i4.hunantv.com/p1/20161030/2350244175C.jpg", title: "【红星照耀中国】至第19集 黄海冰周海媚再现长征岁月" }],
    news: [
      { img: "http://i3.hunantv.com/p1/20160920/1723107109C.png", title: "《爸爸去哪儿4》全部精彩内容一次看个够！" },
      { img: "http://i4.hunantv.com/p1/20161020/173135597C.png", title: "《真正男子汉2》孙杨杨幂佟丽娅冲上云霄" },
      { img: "http://i2.hunantv.com/p1/20161020/1744213664C.png", title: "《一年级·毕业季》 陈建斌化身魔鬼教师" }
    ],
    toutiao: [
      { img: "http://i3.hunantv.com/p1/20161031/1448166059C.jpg", title: "洪秀柱开启大陆访问行程", info: "首次率团访问 定位“和平之旅" },
      { img: "http://i5.hunantv.com/p1/20161031/1447131247C.jpg", title: "空军“亮剑”中国国际航展", info: "国产无人机强大阵容参展" },
    ],
    hot: [
      { img: "http://i2.hunantv.com/p1/20161031/0954293561C.jpg", title: "董力带娃记 未播版", info: "阿拉蕾走心创作《董爸爸之歌》" },
      { img: "http://i5.hunantv.com/p1/20161029/1951463868C.jpg", title: "快乐大本营", info: "萌神阿拉蕾暖心告白董力" },
      { img: "http://i5.hunantv.com/p1/20161031/1148292144C.jpg", title: "被陈楚河抛弃的女人", info: "霸气姐张骁群嘲众女不惧围攻" },
      { img: "http://i3.hunantv.com/p1/20161028/2139019800C.jpg", title: "真正男子汉第二季", info: "杨幂蒋劲夫高空倒滑泪崩" },
      { img: "http://i3.hunantv.com/p1/20161031/0951244639C.jpg", title: "偶像万万碎", info: "王子文隔空表白王凯" },
      { img: "http://i3.hunantv.com/p1/20161028/2058165788C.jpg", title: "厉害了word芒果TV！", info: "2017王牌IP看不停" },
    ],
    firstShow: [
      { img: "http://i2.hunantv.com/p1/20161028/1608294310C.jpg", title: "七月与安生", info: "周冬雨马思纯“相爱相杀" },
      { img: "http://i2.hunantv.com/p1/20161031/1034577550C.jpg", title: "教官教科书级金句来一打", info: "谁说只有“俯卧撑准备" },
      { img: "http://i2.hunantv.com/p1/20161028/215302901C.jpg", title: "心疼，大幂幂鼻涕流下来", info: "子弹先动手！wuli韬韬正经卖萌" },
      { img: "http://i1.hunantv.com/p1/20161029/2220257373C.jpg", title: "黄子韬倒滑帅出腹肌", info: "帅不过三秒”boy的谜之日常" },
      { img: "http://i4.hunantv.com/p1/20161028/2226329557C.jpg", title: "大幂幂连线小糯米？", info: "《真正男子汉第二季》下期看点" },
      { img: "http://i3.hunantv.com/p1/20161028/2352462389C.jpg", title: "小亮仔洁癖爆发", info: "10-28期" },
    ]

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
  },
  clickTitle: function (e) {
    let id = e.currentTarget.id;

    wx.showToast({
      title: id,
      icon: 'success',
      duration: 2000
    })
  }
})