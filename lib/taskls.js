var spawn = require('child_process').spawn;

function listIt(callback) {
  var ls = spawn('ls', ['-lh', '/']);
  var strOut = '';

  ls.stdout.on('data', function (data) {
    // console.log('stdout:', data.toString());
    strOut = data.toString();
  });

  ls.stderr.on('data', function (data) {
    // console.log('stderr:', data);
    callback('error', data.toString());
  });

  ls.on('exit', function (code) {
    // console.log('child process exited with code:', code);
    void code;
    callback(null, strOut);
  });
}

module.exports = {
  listIt: listIt
}
