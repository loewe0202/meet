import drawQrcode from '../../../utils/weapp.qrcode.js';
import dataJs from "../../../utils/data.js";

Page({
    data: {
        text: '',
        inputValue: ''
    },

    onLoad() {
        let wifiInfo = dataJs.getData('wifiInfo');
        this.setData({
            wifiInfo
        })
        this.draw();
    },

    changeText(text) {
        if (!this.data.inputValue) {
            wx.showModal({
                title: '提示',
                content: '请输入wifi密码~',
                showCancel: false
            })
            return false;
        }
        this.setData({
            text: this.data.inputValue
        })
        this.draw();
    },

    bindKeyInput(e) {
        this.setData({
            inputValue: e.detail.value
        })
    },

    draw() {
        let wifiInfo = this.data.wifiInfo,
            password = this.data.text;
        if (password) {
            wifiInfo.password = password;
            console.log(wifiInfo);
            drawQrcode({
                width: 200,
                height: 200,
                canvasId: 'myQrcode',
                text: JSON.stringify(wifiInfo),
                callback(e) {
                    console.log('e: ', e)
                }
            })
        }
    }
})