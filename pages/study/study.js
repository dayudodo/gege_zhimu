//qs.js
const util = require('../../utils/util.js')
const zhimu_group = ['abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'uvwx', 'yz']
const colors = ['red', 'orange', 'green', 'black', 'blue', 'brown', 'cyan']
// const font_groups = ['黑体','宋体']
var plus = function(i, arr) {
  var result;
  i + 1 >= arr.length ? result = 0 : result = i + 1
  return result;
};
var minus = function(i, arr) {
  var result;
  i - 1 < 0 ? result = arr.length -1 : result = i - 1
  return result
};

var g_height; //当前窗口的高度  
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
    colorGroup: [],
    currentCharGroup: [],
  },
  onLoad: function() {
    wx.getSystemInfo({
      success: function(res) {
        g_height = res.windowHeight
        console.log(g_height)
      },
    })
    this.setData({
      colorGroup: this.getColorGroup("plus"),
      currentCharGroup: this.getCurrentCharGroup("plus"),
    })

  },
  onShow: function() {
    // console.log(this.data)
  },
  onReady: function(e) {},
  // onReachBottom:function(){
  //   // console.log('onReachBottom')
  //   this.nextGroup()
  // },
  // pullUpNext:function(){
  //   console.log('pullUpNext')
  // },
  tapPrev: function(){
    this.prevGroup()
  },
  tapNext: function() {
    this.nextGroup()
  },
  getColorGroup: function(how) {
    //获取到颜色组供自定义组件使用！
    let group = []
    for (var i in current_group) {
      let color_name = colors[color_index]
      if (how == 'plus') {
        color_index = plus(color_index, colors)
      } else if(how == "minus"){
        color_index = minus(color_index, colors)
      }
      group.push(color_name)
    }
    console.log("color_index:", color_index)
    return group;
  },
  getCurrentCharGroup: function(how) {
    let group = []
    //当前字母组改变
    current_group = Array.from(zhimu_group[group_index])
    group = current_group.map(char => char.toUpperCase())
    //先显示出来，因为onLoad也调用了此方法！更新索引为下一次做准备
    if(how == "plus"){
      group_index = plus(group_index, zhimu_group)
    } else if (how == "minus"){
      group_index = minus(group_index, zhimu_group)
    }
    console.log("group_index", group_index)
    return group;
  },
  prevGroup: function () {
    this.setData({
      colorGroup: this.getColorGroup("minus"),
      currentCharGroup: this.getCurrentCharGroup("minus"),
    })
  },
  nextGroup: function() {
    this.setData({
      colorGroup: this.getColorGroup("plus"),
      currentCharGroup: this.getCurrentCharGroup("plus"),
    })
  },
  changeFont: function() {
    // this.setData({font: '700 150px 宋体'})
  },
  transition: function() {
    this.setData({
      transition: 'transition'
    })
  }

})