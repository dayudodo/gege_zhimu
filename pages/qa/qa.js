//qs.js
const util = require('../../utils/util.js')
const zhimu_group = ['abcde', 'fghij', 'klmn', 'opqr', 'stuv', 'wxyz']
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
    alphabet: 'abcdefghijklmnopqrstuvwxyz'.split(''),
    color: colors[0],
    font: '黑体',
    currentChar: '',
    rotate: ''
  },
  onLoad: function() {
    this.setData({
      currentChar: util.upper(current_group[char_index])
    })

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
      currentChar: getCurrentChar
    })
  },
  changeFont:function(){
    // this.setData({font: '700 150px 宋体'})
  },
  rotate:function(){
    this.setData({rotate: 'rotate'})
  }

})