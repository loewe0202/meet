/*
 * @Author: loewe0202
 * @Date:   2018-05-21 17:38:16
 * @Last Modified by:   loewe0202
 * @Last Modified time: 2018-06-19 17:06:56
 */
/**
 * 获取路径携带的参数
 * @type {Object}
 */
let querystring = function(url) {
    var theRequest = new Object();
    var strs = url;
    if (url.indexOf("?") != -1) {
        strs = url.split("?")[1];
    }
    strs = strs.split("&");
    for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = (strs[i].split("=")[1]);
    }
    return theRequest;
}

module.exports = querystring;
