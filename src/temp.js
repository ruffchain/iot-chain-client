client.call('getUserTableValue', {
  contractAddr: CONTRACT_ADDR,
  tableName: CONTRACT_TABLE_NAME,
  keyName: CONTRACT_KEY_NAME
}, function (resp, code) {
  console.log('code:', code)
  console.log('resp:')
  console.log(resp);
});
