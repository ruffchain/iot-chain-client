'use strict';

var http = require('http');
var Client = require('../lib/rpcclient.js').RPCClient

var client = new Client({
    serveraddr: '40.73.100.56',
    port: 18089
});

var postData = JSON.stringify({
    funName: 'view',
    args: {
        method: 'getMiners',
        params: {},
    }
})

var options = {
    hostname: '40.73.100.56',
    port: 18089,
    path: '/rpc',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};


$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }

    client.call('getMiners', {}, function (resp, code) {
        console.log('code:', code)
        console.log('resp:')
        console.log(resp);
    });

});

$.end(function () {

});
