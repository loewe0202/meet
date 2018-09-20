var utils = {};

utils.getRandom = function(max, min) {
    min = arguments[1] || 0;
    return Math.floor(Math.random() * (max - min + 1) + min);
};

module.exports = utils;