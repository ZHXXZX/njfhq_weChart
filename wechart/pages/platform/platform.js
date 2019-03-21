// pages/platform/platform.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx: 0,
    arr: [
      {
        type: 0,
        name: "全部",
      },
      {
        type: 1,
        name: "电子商务",
      },
      {
        type: 2,
        name: "农业技术",
      },
      {
        type: 3,
        name: "人力资源",
      }
    ],
    list: [
      {
        id: 1,
        type: 1,
        img: "/images/imgs/pic_12_01.jpg",
        name: "杜春花"
      },
      {
        id: 2,
        type: 2,
        img: "/images/imgs/pic_12_02.jpg",
        name: "李蔚"
      },
      {
        id: 3,
        type: 3,
        img: "/images/imgs/pic_12_03.jpg",
        name: "刘昉"
      },
      {
        id: 4,
        type: 3,
        img: "/images/imgs/pic_12_04.jpg",
        name: "刘晓彬"
      },
      {
        id: 5,
        type: 2,
        img: "/images/imgs/pic_12_05.jpg",
        name: "伍明"
      },
      {
        id: 6,
        type: 1,
        img: "/images/imgs/pic_12_06.jpg",
        name: "夏雨"
      },
      {
        id: 7,
        type: 1,
        img: "/images/imgs/pic_12_07.jpg",
        name: "徐驰"
      },
      {
        id: 8,
        type: 1,
        img: "/images/imgs/pic_12_08.jpg",
        name: "余学东"
      }
    ],
    type: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.filterFn(this.data.type);
  },
  tabFn(e) {
    let idx = e.currentTarget.dataset.idx;
    let type = e.currentTarget.dataset.type;
    this.filterFn(type)
    this.setData({
      idx: idx,
      type: type
    });
  },
  filterFn(type) {
    if (!type) {
      this.setData({
        showList: this.data.list
      })
    } else {
      let arr = this.data.list.filter((i) => {
        if (i.type == type) {
          return i;
        }
      })
      this.setData({
        showList: arr
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