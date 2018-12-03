// pages/components.js
const util = require('../../utils/util.js')

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    background:{
      type:String,
      value:'',
    },
    char:{
      type:String,
      value:'',
    },
    tapEffect:{
      type:String,
      value:'',
    }

  },

  /**
   * 组件的初始数据
   */
  data: {
    someOthers: 1,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickChar:function(){
      this.setData({
        tapEffect: 'animate bounceIn'
      })
      setTimeout(() => {
        this.setData({
          tapEffect: ''
        })
      }, 750)
      this.play(this.properties.char)
    },
    play(char){
      wx.playBackgroundAudio({
        dataUrl: util.getCharSound(char),
        title: '',
        coverImgUrl: ''
      })
    }
  }
})
