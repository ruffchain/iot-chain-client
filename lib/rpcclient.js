'use strict';
var http = require('http');

function RPCClient(options) {
  if (options.serveraddr === undefined) {
    throw new Error('No serveraddr');
  }
  if (options.port === undefined) {
    throw new Error('No port')
  }
  this.m_server = options.serveraddr;
  this.m_port = options.port;
}

RPCClient.prototype.call = function (funName, args, onComplete) {
  var sendStr = JSON.stringify({
    funName: 'view',
    args: {
      method: funName,
      params: args,
    }
  })

  var option = {
    hostname: this.m_server,
    port: this.m_port,
    path: '/rpc',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': sendStr.length
    }
  }

  var resp = '';

  var req = http.request(option, function (res) {
    console.log('headers:\n' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      console.log('body:\n' + chunk);
      console.log('typeof:', typeof chunk)
      resp += chunk;
    });
    res.on('end', function () {
      console.log('No more data in response')
      onComplete(resp, 200);
    })
  });

  req.on('error', function (e) {
    console.log('problem with request: ' + e.message);
    onComplete(null, 500);
  });
  req.write(sendStr);
  req.end();
}

module.exports = {
  RPCClient: RPCClient
}
