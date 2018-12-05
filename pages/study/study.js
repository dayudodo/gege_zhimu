//qs.js
const util = require('../../utils/util.js')
const zhimu_group = ['abcd', 'efgh', 'ijkl', 'mnop', 'qrst', 'uvwx', 'yz']
const colors = ['red', 'orange', 'green', 'black', 'blue', 'brown', 'cyan']
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
    colorGroup: [],
    currentCharGroup: [],
  },
  onLoad: function() {
    this.setData({
      colorGroup: this.getColorGroup(),
      currentCharGroup: this.getCurrentCharGroup(),
    })

  },
  onShow:function(){
    // console.log(this.data)
  },
  onReady: function(e) {
  },
  onReachBottom:function(){
    // console.log('onReachBottom')
    this.nextGroup()
  },
  // pullUpNext:function(){
  //   console.log('pullUpNext')
  // },
  getColorGroup: function() {
    //获取到颜色组供自定义组件使用！
    let group = []
    for (var i in current_group) {
      let color_name=colors[color_index]
      color_index = plus(color_index, colors)
      group.push(color_name)
    }
    console.log("group:",group)
    return group;
  },
  getCurrentCharGroup:function(){
    let group=[]
    //当前字母组改变
    current_group = Array.from(zhimu_group[group_index])
    group=current_group.map(char=>char.toUpperCase())
    //先显示出来，因为onLoad也调用了此方法！更新索引为下一次做准备
    group_index = plus(group_index, zhimu_group)
    return group;
  },
  nextGroup: function() {


    this.setData({
      colorGroup: this.getColorGroup(),
      currentCharGroup: this.getCurrentCharGroup(),
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