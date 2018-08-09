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
        let that = this;
        that.socketOpen = false;
        that.socketMsgQueue = [];
        wx.connectSocket({
            url: 'ws://192.168.31.182:9505/test/websocket/server_socket.php'
        });
        wx.onSocketOpen((res) => {
            console.log('WebSocket连接已打开！');
            that.socketOpen = true;
            for (var i = 0; i < that.socketMsgQueue.length; i++) {
                that.sendSocketMessage(that.socketMsgQueue[i]);
            }
            that.socketMsgQueue = [];
        })
        wx.onSocketError((res) => {
            console.log('WebSocket连接打开失败，请检查！')
        })
        wx.onSocketMessage(function(res) { // 接收消息
            console.log(JSON.parse(res.data))
        })
    },

    /**
     * 发送数据
     */
    sendSocketMessage(msg) {
        let sendMsg = {
            message: msg,
            name: "loewe0202"
        }
        if (this.socketOpen) { // 已打开连接
            wx.sendSocketMessage({
                data: JSON.stringify(sendMsg)
            })
        } else { // 未打开连接
            this.socketMsgQueue.push(msg)
        }
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
     * 输入内容
     */
    inputTxt(e) {
        let msg = e.detail.value;
        this.sendSocketMessage(msg);
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