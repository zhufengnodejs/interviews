/*
var func = (function (a) {
  this.a = a;
  return function (a) {
    a += this.a;
    return a;
  }
})(function (a, b) {
  return a;
}(1, 2));
func(4);//5*/


for(var i=0;i<10;i++){
  alert(i);
  break;
}
alert(i);

for(var i=0;i<10;i++){
  continue;
  alert(i);
}
alert(i);
// 0  0 10
