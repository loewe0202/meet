import broadcast from "../../utils/broadcast.js";
const app = getApp();

Page({

    /**
     * 页面的初始数据
     */
    data: {

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

    regEvent() {
        let that = this;
        broadcast.on('eventA', that.eventAFn.bind(that)); // 绑定, once 只触发一次
        wx.showToast({
            title: '注册成功',
            icon: 'success'
        })
        this.setData({
            reg: true
        })
    },

    eventAFn(data, eventName) {
        console.log('fire event :', eventName, data);
        this.setData({
            info: data
        })
    },

    /**
     * 页面跳转
     */
    goNext() {
        app.turnToPage("/app/broadcast/broadcast_fire");
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