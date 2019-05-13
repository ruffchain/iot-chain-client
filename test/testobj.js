var myObj = {
  'err': 1
};
console.log('\nmyObj:')
console.log(myObj);

var strMyObj = JSON.stringify(myObj);
console.log('\nstrMyObj:')
console.log(strMyObj)

var my2ndObj = JSON.parse(strMyObj);
console.log('\nmy2ndObj:')
console.log(my2ndObj);

var my2ndStrMyObj = JSON.stringify(strMyObj);
console.log('\nmy2ndStrMyObj:')
console.log(my2ndStrMyObj);

var exceptObj = JSON.parse(JSON.stringify(strMyObj));
console.log('\nexceptObj:')
console.log(exceptObj);
