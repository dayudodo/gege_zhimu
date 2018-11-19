//check.js
var question = 'A';
function checkRight (q, answer){
  return q == answer
}

Page({
  data: {
    mp3Source: '../sounds/a.mp3'
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
    // console.log('a')

  },
  tapChar:function(event){
    console.log(question, event.currentTarget.dataset.char)
    let answer = event.currentTarget.dataset.char
    if(checkRight(question, answer)){
      console.log('right')
      //下一个问题
    }else{
      //给出错误提示
      console.log('wrong')
    }

  },


})
