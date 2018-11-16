//check.js

Page({
  data: {

  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../qa/qa'
    })
  },
  onLoad: function () {

  },
  listenMe:function(){
    console.log('a')
  },
  tapChar:function(event){
    console.log(event.currentTarget.dataset.char)
  },
  checkEqual:function(){

  },

})
