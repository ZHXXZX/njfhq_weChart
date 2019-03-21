// pages/loanDetail/loanDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes_1: " <p>为支持四川省产业园区企业发展，缓解企业融资难融资贵问题，四川省经信委、省财政厅联合各产业园区于2015年10月推出“园保贷”政策性信贷产品，由省级财政和产业园区安排补偿金、园区企业缴纳互保金共同形成风险补偿资金池。</p><p>政府、银行、企业三方合作模式，实现了风险共担、去担保化，有效降低了企业的融资门槛和成本。<br></p><dl><dt style='font-size:16px;'><br>1、以支持实体经济为主</dt><dd>63%的贷款发放到制造加工行业，12%的贷款发放到生物医药、新能源、节能环保及信息技术等新兴产业。</dd><dt style='font-size:16px;'><br>2、做到扶持中小微企业发展</dt><dd>目前支持的企业100%为民营企业。平均每笔贷款额度368万元，最小贷款额度20万元。</dd><dt style='font-size:16px;'><br>3、成本：</dt><dd>最高不超过人民银行同期基准利率上浮20%。按贷款金额的0.5%向企业收取管理费用。贷款利息：最高年化利息5.22%；管理费：每笔贷款缴纳0.5%；互保金：每笔贷款缴纳2%，贷款到期后退还。</dd></dl>",
    nodes_2: " <p>欢迎器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化</p><p>进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化</p><p>孵化欢迎优质企业入驻</p><p>孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化欢迎优质企业入驻孵化器进行孵化</p>",
    tit_1: "园保贷",
    tit_2:"入保贷",
    nodes:'',
    img:'',
    tit:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let str = 'nodes_' + options.id;
    let tit = 'tit_' + options.id;
    let img = "/images/imgs/pic_34.jpg";
    if(options.id==2){
      img = "/images/imgs/pic_07.jpg";
    }
    this.setData({
      id: options.id,
      img: img,
      tit: this.data[tit],
      nodes: this.data[str]
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