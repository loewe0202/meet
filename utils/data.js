/*
 * @Author: loewe0202
 * @Date:   2018-06-25 16:52:55
 * @Last Modified by:   loewe0202
 * @Last Modified time: 2018-06-25 17:08:41
 */
const data = {};

function getData(name) {
    return data[name]
};

function setData(param) {
    param = param || {};
    if (param.name && param.data) {
        data[param.name] = param.data
    }
};

export default {
    getData: getData,
    setData: setData
}
