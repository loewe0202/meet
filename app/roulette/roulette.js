const utils = require('../../utils/utils.js');
const Animation = require('../../utils/Animation.js');
const Circle = require('../../utils/Circle.js');
Page({
    /**
     * 页面的初始数据
     */
    data: {
        wheelImg: 'https://static.xmt.cn/0a3a1d6f004e436386d50dceccdddf00.png',
        pointImg: 'https://static.xmt.cn/cad8eb6c0f6b413199523308f6ee8d2e.png',
        touch: { x: 0, y: 0, isPressed: false }
    },

    touchMove: function(event) {

    },

    canvasTouchStart: function(event) {
        var touch = event.changedTouches[0];
        touch.isPressed = true;
        this.setData({
            touch: touch
        })
    },

    canvasTouchEnd: function(event) {
        var touch = event.changedTouches[0];
        touch.isPressed = false;
        this.setData({
            touch: touch
        })
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        var that = this;
        // 把设备的尺寸赋值给画布，以做到全屏效果
        wx.getSystemInfo({
            success: function(res) {
                that.setData({
                    windowWidth: res.windowWidth,
                    windowHeight: res.windowHeight
                });
            },
        })
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {
        var that = this,
            fps = 100,
            slicePrizes = ["恭喜中了大奖", "50 积分", "500 积分",
                "谢谢参与", "200 积分", "100 积分", "150 积分", "谢谢参与"
            ],
            w = this.data.windowWidth,
            h = this.data.windowHeight,
            context = wx.createCanvasContext('canvas'),
            wheel = new Circle(w / 2, h / 2.5, 229),
            point = new Circle(w / 2, h / 2.5, 37.5),
            animation = new Animation(wheel);

        wheel.img = that.data.wheelImg;
        wheel.width = 458;
        wheel.height = 458;
        point.img = that.data.pointImg;
        point.width = 150;
        point.height = 150;

        // 缩小比例
        wheel.scale(0.6, 0.6);
        point.scale(0.6, 0.6);

        // 启用事件
        point.inputEvent = true;
        point.onInputDown = run;

        // 更新动画
        var update = function() {
            // 清空
            context.clearRect(0, 0, w, h);
            // 画转盘
            wheel.draw(context);
            // 画指针
            point.draw(context);

            // 更新数据
            animation.update();

            // 获取手指点击
            var touch = that.data.touch;
            if (point.inputEvent && touch.isPressed && point.onInputDown) {
                // 如果点击到了指针
                if (point.contains(touch)) {
                    // 调用点击回调方法
                    point.onInputDown();
                }
            }

            // 绘图
            context.draw();
        };

        setInterval(update, 1000 / fps, 1000 / fps);

        // 开始转
        function run() {
            // 避免重复调用
            if (animation.isRun) return;

            // 随机一个奖品
            var prizeIndex = utils.getRandom(slicePrizes.length - 1);
            var prize = slicePrizes[prizeIndex];

            // 计算奖品角度
            var degrees = utils.getRandom(prizeIndex * 45 + 45, prizeIndex * 45);

            // 当动画完成时
            animation.onComplete = function() {
                wx.showToast({
                    title: prize
                })

                setTimeout(function() {
                    wx.hideToast()
                }, 1000)
            };

            animation.tween(5, degrees);
        }
    }
})