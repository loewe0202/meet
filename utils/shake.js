/*
 * @Author: DESKTOP-U0JOM15\loewe0202
 * @Date:   2018-07-16 17:00:32
 * @Last Modified by:   DESKTOP-U0JOM15\loewe0202
 * @Last Modified time: 2018-07-16 17:41:18
 */
//定义全局变量
let lastTime = 0; //此变量用来记录上次摇动的时间
let x = 0,
    y = 0,
    z = 0,
    lastX = 0,
    lastY = 0,
    lastZ = 0; //此组变量分别记录对应x、y、z三轴的数值和上次的数值
let shakeSpeed = 100; //设置阈值
//摇一摇方法
function shake(acceleration, params) {
    params = params || {};
    let nowTime = new Date().getTime(); //记录当前时间
    //如果这次摇的时间距离上次摇的时间有一定间隔 才执行
    if (nowTime - lastTime > 100) {
        let diffTime = nowTime - lastTime; //记录时间段
        lastTime = nowTime; //记录本次摇动时间，为下次计算摇动时间做准备
        x = acceleration.x; //获取x轴数值，x轴为垂直于北轴，向东为正
        y = acceleration.y; //获取y轴数值，y轴向正北为正
        z = acceleration.z; //获取z轴数值，z轴垂直于地面，向上为正
        //计算 公式的意思是 单位时间内运动的路程，即为我们想要的速度
        let speed = Math.abs(x + y + z - lastX - lastY - lastZ) / diffTime * 10000;
        lastX = x; //赋值，为下一次计算做准备
        lastY = y; //赋值，为下一次计算做准备
        lastZ = z; //赋值，为下一次计算做准备
        if (speed > shakeSpeed) { //如果计算出来的速度超过了阈值，那么就算作用户成功摇一摇
            typeof params.success == 'function' && params.success();
        }
    }
}
const shakeFn = function(params, self) {
    wx.onAccelerometerChange((res) => {
        if (self && !self.shakeShow) { // 主要针对tabBar页Bug
            return false;
        }
        shake(res, params);
    });
}

export default shakeFn;