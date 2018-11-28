//check.js
const util = require('../../utils/util.js')
const mainhttp = "https://www.gsenglish.cn/zhimu/"
//问题就来自于26个字母，自然也是大写的
const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
//字母选项变化效果
const optionEffect = 'animated jackInTheBox'
//播放按钮点击效果
const playEffect = ' animated bounceIn'

//变大写，简单点儿
function Upper(c) {
  return c.toUpperCase()
}

//随机从数组中取出一个数
var sample = function(arr) {
  let len = arr.length
  let index;
  do {
    index = parseInt(Math.random() * len)
  } while (arr[index] == currentQ)
  return arr[index]

};
//打乱数组的顺序
var shuffle = function(arr) {
  return arr.sort(function() {
    return .5 - Math.random();
  });
}


function checkRight(q, answer) {
  return q.toLowerCase() == answer.toLowerCase()
}
//获取到字母的声音
function getCharSound(q) {
  return `${mainhttp}${q.toLowerCase()}.mp3`
}

var qIndex = 0
var currentQ = alphabet[qIndex]

function makeQuestion() {
  if (currentQ == 'z') {
    //todo 成功完成测试
  } else {

  }
}

Page({
  data: {
    mp3Source: mainhttp + "a.mp3",
    options: [],
    playEffect: '',
    optionEffect:'',
    color: '',
  },
  onReady: function(e) {
    this.DiffColors = new util.DiffColors()
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
    this.changeOptions()
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../qa/qa'
    })
  },

  playQuestion: function() {
    // console.log('a')
    this.setData({
      playEffect: playEffect
    })
    setTimeout(() => {
      this.setData({
        playEffect: ''
      })
    }, 750)
    this.audioCtx.pause()
    this.audioCtx.setSrc(getCharSound(currentQ))
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
    console.log(currentQ, event.currentTarget.dataset.char)
    let answer = event.currentTarget.dataset.char
    if (checkRight(currentQ, answer)) {
      console.log('bang')
      this.playRight()
      //下一个问题
      this.nextQuestion()
    } else {
      //给出错误提示
      console.log('wrong')
      this.playWrong()
    }
  },
  changeOptions() {
    let options = shuffle([Upper(currentQ), Upper(sample(alphabet))])
    console.log("options: ", options)
    this.setData({
      optionEffect: optionEffect,
      options: options
    })
    setTimeout(() => {
      this.setData({
        optionEffect: ''
      })
    }, 750)

  },
  nextQuestion: function() {
    let color = this.DiffColors.next()
    console.log(color)
    //下一个问题之前，应该先初始化一下，这包括动画效果要先取消
    this.setData({
      playEffect: '',
      color: color
    })
    if (qIndex + 1 == alphabet.length) {
      //最后一个测试完成，给予奖励！

    } else {
      //下一个测试项目
      currentQ = alphabet[++qIndex]
      this.changeOptions()
      //取出字母数组中的下一个
      this.playQuestion()
    }
  }


})