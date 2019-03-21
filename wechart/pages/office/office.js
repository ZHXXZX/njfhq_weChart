// pages/office/office.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes_1: " <p>欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化</p><p>进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化</p><p>孵化欢迎优质企业入驻</p><p>孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化</p>",
    nodes_2: " <p>欢迎优业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化</p><p>孵化欢迎优质企业入驻</p>",
    nodes: '',
    showData:[],
    obj:[
      [
        "/images/imgs/pic_21.jpg",
        "/images/imgs/pic_23.jpg",
        "/images/imgs/pic_17.jpg",
        "/images/imgs/pic_18.jpg",
        "/images/imgs/pic_20.jpg",
        "/images/imgs/pic_19.jpg",
        "/images/imgs/pic_22.jpg"
      ],
      [
        "/images/imgs/pic_24.jpg",
        "/images/imgs/pic_25.jpg",
        "/images/imgs/pic_26.jpg",
        "/images/imgs/pic_27.jpg",
        "/images/imgs/pic_28.jpg",
        "/images/imgs/pic_29.jpg",
        "/images/imgs/pic_30.jpg"
      ]
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let id = options.id;
    this.setData({
      showData:this.data.obj[id-1]
    })
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