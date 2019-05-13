var spawn = require('child_process').spawn;

function switchIt(action, callback) {
  var strCmd;

  if (action === true || action === 'on' || action === 1) {
    strCmd = '/home/root/turnon.sh';
  } else if (action === false || action === 'off' || action === 0) {
    strCmd = '/home/root/turnoff.sh'
  } else {
    callback('error', 'Unrecognized action: ' + action);
    return;
  }

  var ls = spawn(strCmd, []);
  // var strOut = '';

  ls.stdout.on('data', function () {
    // console.log('stdout:', data.toString());
    // strOut = data.toString();
  });

  ls.stderr.on('data', function (data) {
    // console.log('stderr:', data);
    callback('error', data.toString());
  });

  ls.on('exit', function (code) {
    // console.log('child process exited with code:', code);
    void code;
    callback(null, code);
  });
}


module.exports = {
  switchIt: switchIt
}
