//qs.js
const util = require('../../utils/util.js')
const zhimu_group = ['abcde','fghij','klmn','opqr','stuv','wxyz']
const colors = ['red','orange','green','black','blue','brown','cyan']
const plus = i =>{
  var result;
  i+1 >= colors.length ? result = 0 : result = i+1
  return result;
}
//字母颜色索引，每次点击的时候颜色都不同！
var color_index = 0;
//字母索引，需要显示哪个位置的索引
var char_index =0;
//第几组字母
var group_index = 0;
//当前是哪组单词组
var which_group = zhimu_group[group_index]

Page({
  data: {
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    color: colors[0],
    currentChar: '',
    char_index: 0
  },
  onLoad: function () {
    this.setData({
      currentChar: util.upper(this.data.alphabet[1])
    })
    
  },
  //事件处理函数
  bindViewTap: function () {
    // console.log(this.data.currentChar)
    // this.setData({color: util.randomOne(colors)})
    color_index= plus(color_index)
    console.log(color_index)
    this.setData({ color: colors[color_index]})
  },
})
