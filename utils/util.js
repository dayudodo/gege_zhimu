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
const randomOne = arr =>{
  var n = Math.floor(Math.random() * arr.length + 1) - 1;  
  return arr[n]
}


module.exports = {
  formatTime: formatTime,
  upper: upper,
  randomOne: randomOne
}

