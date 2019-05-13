/*!
 * Copyright (c) 2017 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var driver = require('ruff-driver');

module.exports = driver({
    attach: function (inputs) {
        var that = this;
        this._uart = inputs['uart'];
    },
    detach: function () {
    },
    exports: {
        setup: function (options, callback) {
            this._uart.setup(options, callback);
        },
        open: function () {
            var that = this;
            this._uart.on('data', function (data) {
                that.emit('data', data);
            });
            this._uart.on('error', function (error) {
                that.emit('error', error);
            });
        },
        write: function (data, callback) {
            this._uart.write(data, callback);
        }
    }
});
