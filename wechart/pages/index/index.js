//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    nav:[
      {
        url:"/pages/server/server",
        img:"/images/icons/icon_01.png",
        text:"创业服务"
      },
      {
        url: "/pages/loanDetail/loanDetail?id=1",
        img: "/images/icons/icon_02.png",
        text: "贷款了解"
      },
      {
        url: "/pages/guide/guide",
        img: "/images/icons/icon_03.png",
        text: "入孵指南"
      },
      {
        url: "/pages/activity/activity",
        img: "/images/icons/icon_06.png",
        text: "创业活动"
      },
      {
        url: "/pages/platform/platform",
        img: "/images/icons/icon_05.png",
        text: "导师平台"
      },
      {
        url: "/pages/enter/enter",
        img: "/images/icons/icon_04.png",
        text: "申请入驻"
      },
    ],
    news: [
      {
        id: 1,
        img: "/images/icons/ban.jpg",
        title: "东兴区科技孵化器成功通过省级科技企业孵化器认定",
        text:"11月27日，四川省科学技术厅官方网站公布了2018年度省级科技企业孵化器名单，内江市东兴区科技孵化器名列其中。"
      },
      {
        id: 2,
        img: "/images/imgs/pic_02.jpg",
        title: "东兴孵化器举办第十期项目入园路演评估",
        text: "2月18日下午，由内江市高新区高桥园区管理委员会主办，内江银湖孵化器管理有限公司承办的第十期项目入园路演评估在东兴孵化器举办。"
      },
      {
        id: 3,
        img: "/images/imgs/pic_31_1.jpg",
        title: "第九期项目入园路演",
        text: "新年新开始在时间充足的年初有很多人在为一个“更多更好”的明天继续拼搏奋斗着比如，我们的创业者们~"
      }
    ]
  },
  
  onLoad: function () {
    wx.showShareMenu({
      withShareTicket: true
    })
  },
  getUserInfo: function(e) {
    
  }
})
