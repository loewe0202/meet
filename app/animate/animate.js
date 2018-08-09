Page({
    onReady: function() {
        this.animation = wx.createAnimation()
        console.log(this.animation)
    },
    strikeFn() {
        this.animation.option.transformOrigin = "100% 100% 0";
        let n = 1;
        for (var i = 0; i < 20; i++) {
            n = n * (-1);
            this.animation.rotate(30 * n).step({
                duration: 100
            })
        }
        this.animation.rotate(0, 0)
            .scale(1)
            .translate(0, 0)
            .skew(0, 0)
            .step({
                duration: 0
            })
        this.setData({
            animation: this.animation.export()
        })
    },
    rotate: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.rotate(Math.random() * 720 - 360).step()
        this.setData({
            animation: this.animation.export()
        })
    },
    scale: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.scale(Math.random() * 2).step()
        this.setData({
            animation: this.animation.export()
        })
    },
    translate: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
        this.setData({
            animation: this.animation.export()
        })
    },
    skew: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.skew(Math.random() * 90, Math.random() * 90).step()
        this.setData({
            animation: this.animation.export()
        })
    },
    rotateAndScale: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.rotate(Math.random() * 720 - 360)
            .scale(Math.random() * 2)
            .step()
        this.setData({
            animation: this.animation.export()
        })
    },
    rotateThenScale: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.rotate(Math.random() * 720 - 360).step()
            .scale(Math.random() * 2).step()
        this.setData({
            animation: this.animation.export()
        })
    },
    all: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.rotate(Math.random() * 720 - 360)
            .scale(Math.random() * 2)
            .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
            .skew(Math.random() * 90, Math.random() * 90)
            .step()
        this.setData({
            animation: this.animation.export()
        })
    },
    allInQueue: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.rotate(Math.random() * 720 - 360).step()
            .scale(Math.random() * 2).step()
            .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
            .skew(Math.random() * 90, Math.random() * 90).step()
        this.setData({
            animation: this.animation.export()
        })
    },
    reset: function() {
        this.animation.option.transformOrigin = "50% 50% 0";
        this.animation.rotate(0, 0)
            .scale(1)
            .translate(0, 0)
            .skew(0, 0)
            .step({
                duration: 0
            })
        this.setData({
            animation: this.animation.export()
        })
    }
})