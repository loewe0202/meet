Page({

    /**
     * 页面的初始数据
     */
    data: {
        dataFieldA: 'loewe0202',
        dataFieldB: {
            author: 'loewe0202',
            date: new Date().toLocaleString()
        }
    },

    /**
     * 组件自定义事件
     */
    onMyEvent: function(e) {
        console.log(e); // 自定义组件触发事件时提供的detail对象
    },

    pageEventListener1: function(e) {
        console.log('pageEventListener1', e)
    },

    pageEventListener2: function(e) {
        console.log('pageEventListener2', e)
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
    
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})