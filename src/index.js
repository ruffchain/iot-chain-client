/* global $ */
'use strict';

// var http = require('http');
// var Client = require('../lib/rpcclient.js').RPCClient
//var runList = require('../lib/taskls').listIt;
var runSwitch = require('../lib/taskSwitch').switchIt;

// default state is off
runSwitch(0, function () {});
// var client = new Client({
//     serveraddr: '40.73.100.56',
//     port: 18089
// });

// var postData = JSON.stringify({
//     funName: 'view',
//     args: {
//         method: 'getMiners',
//         params: {},
//     }
// })

// var options = {
//     hostname: '40.73.100.56',
//     port: 18089,
//     path: '/rpc',
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Content-Length': postData.length
//     }
// };




$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    var stateSwitch = 0;
    setInterval(function () {
        // console.log('\nDate:', new Date());
        // client.call('getMiners', {}, function (resp, code) {
        //     console.log('code:', code)
        //     console.log('resp:')
        //     console.log(resp);
        // });
        // console.log('\n control switch on/off');

        // runList(function (err, data) {
        //     if (err) {
        //         console.log('error:', data);
        //     } else {
        //         console.log(data);
        //     }
        // })
        if (stateSwitch === 0) {
            stateSwitch = 1;
            console.log('\n control switch on');
            runSwitch(1, function () {});
        } else {
            stateSwitch = 0;
            console.log('\n control switch off');
            runSwitch(0, function () {});
        }
    }, 10000);



});

$.end(function () {

});
