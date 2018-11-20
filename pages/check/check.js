//check.js
const mainhttp = "https://www.gsenglish.cn/zhimu/"
var question = 'A';

function checkRight(q, answer) {
  return q == answer
}
function getQuestionSound(q){
  return `${mainhttp}${q.toLowerCase()}.mp3`
}

Page({
  data: {
    mp3Source: mainhttp + "a.mp3",
  },
  onReady: function(e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../qa/qa'
    })
  },

  listenMe: function() {
    // console.log('a')
    this.audioCtx.setSrc(getQuestionSound(question))
    this.audioCtx.play()
  },
  playRight: function() {
    // this.data.mp3Source = mainhttp+ "bang.mp3"
    this.audioCtx.setSrc(mainhttp + "bang.mp3")
    this.audioCtx.play()
  },
  playWrong: function() {
    this.audioCtx.setSrc(mainhttp + "wrong.mp3")
    this.audioCtx.play()
  },
  tapChar: function(event) {
    console.log(question, event.currentTarget.dataset.char)
    let answer = event.currentTarget.dataset.char
    if (checkRight(question, answer)) {
      console.log('bang')
      this.playRight()

      //下一个问题
    } else {
      //给出错误提示
      console.log('wrong')
      this.playWrong()
    }

  },


})