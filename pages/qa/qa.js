//qs.js
const util = require('../../utils/util.js')
const zhimu_group = ['abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'uvw','xyz']
const colors = ['red', 'orange', 'green', 'white', 'blue', 'brown', 'cyan']
// const font_groups = ['黑体','宋体']
const plus = (i, arr) => {
  var result;
  i + 1 >= arr.length ? result = 0 : result = i + 1
  return result;
}

//字母颜色索引，每次点击的时候颜色都不同！
var color_index = 0;
//字母索引，需要显示哪个位置的索引
var char_index = 0;
//第几组字母
var group_index = 0;
//当前字母组
var current_group = zhimu_group[group_index]


Page({
  data: {
    mp3Source: util.getCharSound('a'),
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    color: colors[0],
    font: '黑体',
    currentChar: '',
    transition: '',
  },
  onLoad: function() {
    this.setData({
      currentChar: util.upper(current_group[char_index])
    })

  },
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  //事件处理函数
  bindViewTap: function() {
    // console.log(this.data.currentChar)
    // this.setData({color: util.randomOne(colors)})
    color_index = plus(color_index, colors)
    // console.log(color_index)
    char_index = plus(char_index, current_group)
    let getCurrentChar = util.upper(current_group[char_index])
    this.setData({
      color: colors[color_index],
      currentChar: getCurrentChar
    })
    this.audioCtx.pause()
    this.audioCtx.setSrc(util.getCharSound(this.data.currentChar))
    this.audioCtx.play()
  },
  nextGroup: function() {
    //下一组字母开始的时候起始序号为0
    char_index = 0
    group_index = plus(group_index, zhimu_group)
    //当前字母组改变
    current_group = zhimu_group[group_index]
    let getCurrentChar = util.upper(current_group[char_index])
    color_index = plus(color_index, colors)
    this.setData({
      color: colors[color_index],
      currentChar: getCurrentChar,
      mp3Source: util.getCharSound(getCurrentChar)
    })
    //下一组需要先调用一下声音播放，并且还要把当前的mp3Source改变一下
    this.audioCtx.pause()
    this.audioCtx.play()
  },
  changeFont:function(){
    // this.setData({font: '700 150px 宋体'})
  },
  transition:function(){
    this.setData({transition: 'transition'})
  }

})