/**
 * Created by fei on 2017/4/27.
 */
'use strict';

const HotShots = require('hot-shots');

module.exports.create = function (config) {
    return new HotShots(config);
};
