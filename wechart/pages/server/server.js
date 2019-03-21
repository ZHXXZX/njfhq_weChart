// pages/server/server.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    idx:0,
    arr:[
      {
        type:0,
        name:"全部",
      },
      {
        type: 1,
        name: "公司注册",
      },
      {
        type: 2,
        name: "财务代理",
      },
      {
        type: 3,
        name: "知识产权",
      },
      {
        type: 4,
        name: "政策申报",
      },
      {
        type: 5,
        name: "投资对接",
      },
      {
        type: 6,
        name: "股权设计",
      },
      {
        type: 7,
        name: "营销推广",
      },
      {
        type: 8,
        name: "企业战略",
      },
      {
        type: 9,
        name: "其他服务",
      }
    ],
    list:[
      {
        id:1,
        type:1,
        img:"/images/icons/icon_08.png",
        name:"工商注册代办",
        price:"￥ 0 元"
      },
      {
        id: 2,
        type: 1,
        img: "/images/icons/icon_08.png",
        name: "注册地址",
        price: "￥ 0 元"
      },
      {
        id: 3,
        type: 1,
        img: "/images/icons/icon_08.png",
        name: "工商登记变更",
        price: "￥ 0 元"
      },
      {
        id: 4,
        type: 2,
        img: "/images/icons/icon_09.png",
        name: "小规模代理记账",
        price: "￥ 300-500 元"
      },
      {
        id: 5,
        type: 2,
        img: "/images/icons/icon_09.png",
        name: "一般纳税人记账",
        price: "￥ 500-1000 元"
      },
      {
        id: 6,
        type: 2,
        img: "/images/icons/icon_09.png",
        name: "清算审计",
        price: "一事一议 "
      },
      {
        id: 7,
        type: 3,
        img: "/images/icons/icon_10.png",
        name: "知识产权",
        price: "800元起 "
      },
      {
        id: 8,
        type: 4,
        img: "/images/icons/icon_11.png",
        name: "政策申报",
        price: "一事一议 "
      },
      {
        id: 9,
        type: 5,
        img: "/images/icons/icon_07.png",
        name: "投资对接",
        price: "一事一议 "
      },
      {
        id: 10,
        type: 6,
        img: "/images/icons/icon_12.png",
        name: "股权设计",
        price: "0元起 "
      },
      {
        id: 11,
        type: 7,
        img: "/images/icons/icon_13.png",
        name: "市场营销",
        price: "量身定制 "
      },
      {
        id: 12,
        type: 8,
        img: "/images/icons/icon_14.png",
        name: "团队管理",
        price: "量身定制 "
      },
      {
        id: 13,
        type: 8,
        img: "/images/icons/icon_14.png",
        name: "企业成长",
        price: "量身定制 "
      },
      {
        id: 14,
        type: 9,
        img: "/images/icons/icon_07.png",
        name: "电脑租赁",
        price: "￥ 500-600 元"
      }
    ],
    type:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.filterFn(this.data.type);
  },
  navgiver(e){
    let id = e.currentTarget.dataset.id;
    // if(id==11){
    //   wx.navigateTo({
    //     url: '/pages/serverDetail/serverDetail?id='+id,
    //   })
    // }
  },
  tabFn(e){
    let idx = e.currentTarget.dataset.idx;
    let type = e.currentTarget.dataset.type;
    this.filterFn(type)
    this.setData({
      idx:idx,
      type:type
    });
  },
  filterFn(type){
    if(!type){
      this.setData({
        showList:this.data.list
      })
    }else{
      let arr = this.data.list.filter((i)=>{
        if (i.type == type){
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