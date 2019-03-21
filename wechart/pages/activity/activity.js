// pages/activity/activity.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[
      {
        img:"/images/imgs/pic_01.jpg",
        text:"“我运动，我健康”工会活动"
      },
      {
        img: "/images/imgs/pic_02.jpg",
        text: "第十期项目入园路演在园举办"
      },
      {
        img: "/images/imgs/pic_03.jpg",
        text: "东兴孵化器举办财税专场讲座"
      },
      {
        img: "/images/imgs/pic_04.jpg",
        text: "东兴孵化器举办创新政策解读讲座"
      },
      {
        img: "/images/imgs/pic_05.jpg",
        text: "东兴孵化器举办股权激励沙龙"
      },
      {
        img: "/images/imgs/pic_06.jpg",
        text: "东兴孵化器携企业观摩投融资路演"
      }
    ],
    activity:[
      {
        type:3,
        id:1,
        img:"/images/imgs/pic_18_1.jpg",
        text:"你不得不知的“股权激励”沙龙在东兴孵化器成功举办"
      },
      {
        type: 3,
        id: 2,
        img: "/images/imgs/pic_09.jpg",
        text: "管委会领导带队，深入园区企业走访调研！为企业排忧解难！"
      },
      {
        type: 3,
        id: 3,
        img: "/images/imgs/pic_10.jpg",
        text: "讲座精彩回顾！政府扶持优惠政策你真的了解吗？"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  navigatorFn(e){
    let type = e.currentTarget.dataset.type;
    let id = e.currentTarget.dataset.id;
    if (type==3){
      wx.navigateTo({
        url: '/pages/activityDetail/activityDetail?id='+id,
      })
    }
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})