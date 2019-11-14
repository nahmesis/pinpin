Page({
  data: {
    beginName: '',
    aimName: '',
    beginTime: [
      {
        date: '',
        time: ''
      }
    ],
    waitTime: '',
    countPeople:''
  },

  onLoad: function () {
    var that = this
    wx.getStorage({
      key: 'list',
      success(res) {
        that.setData({
          beginName: res.data.beginName,
          aimName: res.data.aimName,
          beginTime: res.data.beginTime,
          waitTime: res.data.waitTime
        })
      }
    })
  },
  bindPinFriend: function () {
    wx.navigateTo({
      url: '../pinFriend/pinFriend',
    })
  }
})