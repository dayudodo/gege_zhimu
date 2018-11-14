//qs.js
const util = require('../../utils/util.js')

Page({
  data: {
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    currentChar: null,
  },
  onLoad: function () {
    this.setData({
      currentChar: util.upper(this.data.alphabet[1])
    })
    
  },
  //事件处理函数
  bindViewTap: function () {
    console.log(this.data.currentChar)
  },
})
