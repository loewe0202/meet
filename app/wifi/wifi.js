import dataJs from "../../utils/data.js";
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
     * 生命周期函数--监听页面显示
     */
    onShow: function() {
        this.initWifi();
    },

    initWifi() {
        wx.startWifi(); // 开启
        this.onWifiConnected(); // wifi连接中
        this.getConnectedWifi(); // wifi已连接
    },

    /**
     * 连接wifi
     */
    linkWifi() {
        wx.scanCode({
            success: res => {
                let wifiInfo = JSON.parse(res.result);
                this.connectWifi(wifiInfo);
            }
        })
    },

    /**
     * 分享点击wifi
     */
    shareWifi(e) {
        let wifiInfo = e.currentTarget.dataset.info;
        dataJs.setData({
            name: "wifiInfo",
            data: wifiInfo
        })
        app.turnToPage(`/app/wifi/QRCode/QRCode`);
    },

    /**
     *  获取wifi列表
     */
    getWifiList(params) {
        params = params || {};
        wx.getWifiList();
        wx.onGetWifiList(res => { // 成功获取wifi列表
            console.log('onGetWifiList: ', res.wifiList);
            this.setData({
                wifiList: res.wifiList
            })
            params.success == "function" && params.success(res.wifiList);
            this.showConnectedWifi();
        });
    },

    /**
     * 连接wifi
     */
    connectWifi(params) {
        params = params || {};
        wx.connectWifi({
            SSID: params.SSID,
            BSSID: params.BSSID,
            password: params.password,
            success: res => {
                params.success == "function" && params.success(res.wifiList);
            },
            fail: res => {
                params.fail == "function" && params.fail(res.wifiList);
            },
            complete: res => {
                console.log("connectWifi complete : ", res)
            }
        })
    },

    /**
     * wifi连接中
     */
    onWifiConnected(params) {
        params = params || {};
        wx.onWifiConnected(res => {
            console.log("onWifiConnected: ", res);
            this.setData({
                connectWifi: res.wifi
            });
            params.success == "function" && params.success(res.wifiList);
            this.showConnectedWifi();
        })
    },

    /**
     * wifi已连接
     */
    getConnectedWifi(params) {
        params = params || {};
        wx.getConnectedWifi({
            success: res => {
                console.log("getConnectedWifi: ", res);
                this.setData({
                    connectWifi: res.wifi
                });
                params.success == "function" && params.success(res.wifiList);
                this.showConnectedWifi();
            }
        })
    },

    /**
     * 展示已连接的wifi
     */
    showConnectedWifi() {
        let connectWifi = this.data.connectWifi,
            wifiList = this.data.wifiList;
        if (connectWifi && wifiList && wifiList.length > 0) {
            wifiList.forEach((item) => {
                if (connectWifi.BSSID == item.BSSID) {
                    item.autoJoined = true;
                    return false;
                }
            })
            this.setData({
                wifiList
            })
        }
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

    }
})