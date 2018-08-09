import shakeJs from "../../utils/shake.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        num: 0
    },

    shakeShow: false,

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
        this.shakeShow = true;
        shakeJs.on({
            success: () => {
                let pagesList = getCurrentPages(); // 获取页面栈
                pagesList[pagesList.length - 1].shakeFn(); // 调用当前页面的shakeFn函数
            }
        }, this);
    },

    shakeFn() {
        wx.vibrateShort();
        wx.playBackgroundAudio({
            dataUrl: 'http://fjyd.sc.chinaz.com/files/download/sound1/201410/5018.mp3',
            title: 'weixin'
        })
        let num = ++this.data.num;
        this.setData({
            num
        })
        return false;
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {
        shakeJs.off(); // 关闭摇晃功能
        this.shakeShow = false;
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {
        shakeJs.off(); // 关闭摇晃功能
        this.shakeShow = false;
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