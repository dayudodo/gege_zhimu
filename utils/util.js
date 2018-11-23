const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const upper = zhimu => {
  return zhimu.toUpperCase()
}
const randomOne = arr => {
  var n = Math.floor(Math.random() * arr.length + 1) - 1;
  return arr[n]
}

class DiffColors  {
  constructor() {
    this.index = 0
    this.colors = ['red', 'orange', 'green', 'black', 'blue', 'brown', 'cyan']
  }
  
  plus  (i, arr) {
    var result;
    i + 1 >= arr.length ? result = 0 : result = i + 1
    return result;
  }
  next() {
    let index = this.plus(this.index, this.colors)
    this.index = index
    return this.colors[this.index]
  }


}

module.exports = {
  formatTime: formatTime,
  upper: upper,
  randomOne: randomOne,
  DiffColors: DiffColors,
}