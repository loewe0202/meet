const app = getApp();

function savePicToAlbum(tempFilePath, params) {
    params = params || {};
    let that = this;
    wx.getSetting({
        success(res) {
            if (!res.authSetting['scope.writePhotosAlbum']) {
                wx.authorize({
                    scope: 'scope.writePhotosAlbum',
                    success() {
                        wx.saveImageToPhotosAlbum({
                            filePath: tempFilePath,
                            success(res) {
                                app.showModal({
                                    title: '成功保存图片',
                                    content: '已成功为您保存图片到手机相册，请自行前往朋友圈分享',
                                    confirmText: '知道了',
                                    confirm: res => {
                                        typeof params.confirm == 'function' && params.confirm(res);
                                    }
                                });
                            },
                            fail(res) {
                                console.log(res);
                            }
                        })
                    },
                    fail() {
                        // 用户拒绝授权,打开设置页面
                        wx.openSetting({
                            success: function(data) {
                                console.log("openSetting: success");
                            },
                            fail: function(data) {
                                console.log("openSetting: fail");
                            }
                        });
                    }
                })
            } else {
                wx.saveImageToPhotosAlbum({
                    filePath: tempFilePath,
                    success(res) {
                        app.showModal({
                            title: '成功保存图片',
                            content: '已成功为您保存图片到手机相册，请自行前往朋友圈分享',
                            confirmText: '知道了',
                            confirm: res => {
                                typeof params.confirm == 'function' && params.confirm(res);
                            }
                        });
                    },
                    fail(res) {
                        console.log(res);
                    }
                })
            }
        },
        fail(res) {
            console.log(res);
        }
    })
}

module.exports = {
    savePicToAlbum: savePicToAlbum
}