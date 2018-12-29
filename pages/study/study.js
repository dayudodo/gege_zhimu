//qs.js
const util = require('../../utils/util.js')
const zhimu_group = ['abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'uvwx', 'yz']
const colors = ['red', 'orange', 'green', 'blue', 'brown', 'cyan']
// const font_groups = ['黑体','宋体']
var plus = function(i, arr) {
  var result;
  i + 1 >= arr.length ? result = 0 : result = i + 1
  return result;
};
var minus = function(i, arr) {
  var result;
  i - 1 < 0 ? result = arr.length - 1 : result = i - 1
  return result
};

class CircleGroup {
  constructor(arr) {
    this.arr = arr
    this.index = 0
  }
  current() {
    return this.arr[this.index]
  }
  prev() {
    this.index = (this.index - 1 < 0) ? this.arr.length - 1 : this.index - 1
    return this.current()
  }
  next(count) {
    if (count) {
      let group = []
      group.push(this.current())
      for (let index = 0; index < 3; index++) {
        group.push(this.next())
      }
      return group
    } else {
      this.index = (this.index + 1 >= this.arr.length) ? 0 : this.index + 1
      return this.current()
    }
  }

}

var colorGroup = new CircleGroup(colors)
var charGroup = new CircleGroup(zhimu_group.map(c=>c.toUpperCase()))
// console.log(colorGroup.current(), charGroup.current())
var g_height; //当前窗口的高度  





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
      colorGroup: colorGroup.next(4),
      currentCharGroup: charGroup.current(),
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
  tapPrev: function() {
    this.prevGroup()
  },
  tapNext: function() {
    this.nextGroup()
  },
  getColorGroup: function(how) {
    //获取到颜色组供自定义组件使用！

  },
  getCurrentCharGroup: function(how) {

  },
  prevGroup: function() {
    this.setData({
      colorGroup: colorGroup.next(4),
      currentCharGroup: charGroup.prev(),
    })
  },
  nextGroup: function() {
    this.setData({
      colorGroup: colorGroup.next(4),
      currentCharGroup: charGroup.next(),
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