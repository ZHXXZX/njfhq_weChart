// pages/component/list/list.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    news:{
      type:Object,
      value:{},
      observer(o,v){
        console.log(o, v)
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
