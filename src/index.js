/* global $ */
'use strict';

// var http = require('http');
var Client = require('../lib/rpcclient.js').RPCClient
//var runList = require('../lib/taskls').listIt;
var runSwitch = require('../lib/taskSwitch').switchIt;

// default state is off
var currentState = 'unlock';
runSwitch(0, function () {});

var client = new Client({
    serveraddr: '40.73.35.23',
    port: 18089
});

var CONTRACT_ADDR = '1GHzPAoYxzuT2aTwpwHx2z2rcaSo16pyUy';
var CONTRACT_TABLE_NAME = 'IotDemo';
var CONTRACT_KEY_NAME = 'state';

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
        console.log('\nDate:', new Date());

        // client.call('getMiners', {}, function (resp, code) {
        //     console.log('code:', code)
        //     console.log('resp:')
        //     console.log(resp);
        // });

        client.call('getUserTableValue', {
            contractAddr: CONTRACT_ADDR,
            tableName: CONTRACT_TABLE_NAME,
            keyName: CONTRACT_KEY_NAME
        }, function (resp, code) {
            console.log('code:', code)
            console.log('resp:')
            console.log(resp);

            handleWithState(resp);

        });
        // console.log('\n control switch on/off');

        // runList(function (err, data) {
        //     if (err) {
        //         console.log('error:', data);
        //     } else {
        //         console.log(data);
        //     }
        // })
        // if (stateSwitch === 0) {
        //     stateSwitch = 1;
        //     console.log('\n control switch on');
        //     runSwitch(1, function () {});
        // } else {
        //     stateSwitch = 0;
        //     console.log('\n control switch off');
        //     runSwitch(0, function () {});
        // }
    }, 10000);
});

function handleWithState(resp) {
    var tempObj;
    console.log('\nhandleWithState:')
    // console.log(resp);
    // console.log(typeof resp)
    try {
        tempObj = JSON.parse(resp);
    } catch (e) {
        console.log('\nerr: ', e)
        return;
    }
    // console.log('\ntempObj:');
    // console.log(tempObj);
    // console.log("err: ", tempObj.err);
    // console.log('state:', tempObj.value)

    var stateSwitch = (tempObj.value + '').substr(1);
    console.log('switch: ', stateSwitch)

    if (stateSwitch === 'lock' && stateSwitch !== currentState) {
        currentState = 'lock';
        runSwitch(1, function () {});
    } else if (stateSwitch === 'unlock' && stateSwitch !== currentState) {
        currentState = 'unlock'
        runSwitch(0, function () {});
    } else {
        console.log('Unrecognized state: ', stateSwitch)
        console.log('Or currentState is: ', currentState)
    }
}

$.end(function () {

});
