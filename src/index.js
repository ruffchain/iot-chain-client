/* global $ */
'use strict';

// var http = require('http');
var Client = require('../lib/rpcclient.js').RPCClient
//var runList = require('../lib/taskls').listIt;
var runSwitch = require('../lib/taskSwitch').switchIt;

// default state is off
var currentState = 'unlock';
runSwitch(0, function () { });

var client = new Client({
    serveraddr: '40.73.1.241',
    port: 18089
});

var CONTRACT_ADDR = '1GHzPAoYxzuT2aTwpwHx2z2rcaSo16pyUy';
var CONTRACT_TABLE_NAME = 'IotDemo';
var CONTRACT_KEY_NAME = 'state';


$.ready(function (error) {
    if (error) {
        console.log(error);
        return;
    }
    var stateSwitch = 0;
    setInterval(function () {
        console.log('\nDate:', new Date());

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

    }, 10000);
});

function handleWithState(resp) {
    var tempObj;
    console.log('\nhandleWithState:')

    try {
        tempObj = JSON.parse(resp);
    } catch (e) {
        console.log('\nerr: ', e)
        return;
    }


    var stateSwitch = (tempObj.value + '').substr(1);
    console.log('switch: ', stateSwitch)

    if (stateSwitch === 'lock' && stateSwitch !== currentState) {
        currentState = 'lock';
        runSwitch(1, function () { });
    } else if (stateSwitch === 'unlock' && stateSwitch !== currentState) {
        currentState = 'unlock'
        runSwitch(0, function () { });
    } else {
        console.log('Unrecognized state: ', stateSwitch)
        console.log('Or currentState is: ', currentState)
    }
}

$.end(function () {

});
