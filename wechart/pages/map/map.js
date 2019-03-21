// pages/map/map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    markers: [{
      iconPath: '/images/icons/icon_20.png',
      id: 0,
      latitude: 29.6076405162,
      longitude: 105.1018559933,
      width: 28,
      height: 41,
      name:"东兴区科技孵化器",
      address:"内江市东兴区汉安大道东段20号4楼"
    }],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  markFn(e){
    console.log(111,e)
    wx.openLocation(this.data.markers[0])
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