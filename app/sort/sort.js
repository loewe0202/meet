Page({

    /**
     * 页面的初始数据
     */
    data: {
        pageList: [{
            type: 'inapp',
            size: 'list',
            list: [{
                    title: '多页面通信',
                    img: '',
                    subTitle: '多页面通信，broadcast.js',
                    path: '/app/broadcast/broadcast_on'
                }, {
                    title: '摇一摇',
                    img: '',
                    subTitle: '微信摇一摇，声音+振动效果',
                    path: '/app/shake/shake'
                },
                {
                    title: 'animate动画',
                    img: '',
                    subTitle: '微信animate动画效果展示',
                    path: '/app/animate/animate'
                },
                {
                    title: '下载预览',
                    img: '',
                    subTitle: '下载预览word、excel、ppt、pdf等文件',
                    path: '/app/download/download'
                },
                {
                    title: 'wifi相关',
                    img: '',
                    subTitle: 'wifi连接，共享',
                    path: '/app/wifi/wifi'
                }
            ]
        }]
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