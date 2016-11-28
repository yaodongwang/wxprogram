function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function imageUtil(){
  let whSize;
  wx.getSystemInfo({
    success: function(res) {
      let winHeight = res.windowHeight;
      let winwidth = res.windowWidth;
      whSize = {wid:winwidth,hei:winHeight};
    }
  })
  return whSize;
}

module.exports = {
  imageUtil:imageUtil,
  formatTime: formatTime,
}
