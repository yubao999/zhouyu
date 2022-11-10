// pages/tap/tap.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count:8
  },


  // 事件处理函数
  tapName(){
    console.log("tapNmae")
  },

  clickEvent(event){
    console.log(event)
  },

  changCount(event){
    console.log(event.target.dataset,"n")

    // 通过this.setData给data中的变量赋值  
    // this.data.count读取data中的变量
    this.setData({
      count: this.data.count + event.target.dataset.n
    })

    
  },
  changInput(e){
    //  e.detail.value  是变化过后，文本框最新的值
    console.log(e.detail.value)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})