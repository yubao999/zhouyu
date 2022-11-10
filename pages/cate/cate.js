// pages/cate/cate.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:false,
    num:0,
    step:1,
    username:"12"   //第一步
  },

  changUsername(e){
     this.setData({
       username:e.detail.value
     })
  },


  // 切换盒子
  toggleBox(){
    this.setData({
      isShow:!this.data.isShow
    })
  },
  // num++
  reduceNum(){
    this.setData({
      num:this.data.num+1
    })
  },
  // num--
  plusNum(){
    this.setData({
      num:this.data.num-1
    })
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