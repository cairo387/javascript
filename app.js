var hello = 'Hello World';
alert(hello);

//変数には整数、負数、小数点、文字列を代入可能。
var int1 = 1;
var int2 = -10;
var float1 = 3.14;
var str1 = 'JavaScriptを覚えよう';

alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);

var str2 = 'Hello';
var str3 = 'World!!';
alert(str2 + str3);

 var orange = 100;
 var apple = 120;

 if(orange < apple){
   alert('みかんの値段がリンゴより安い');
 } else if(orange == apple){
   alert('みかんとリンゴが同じ値段');
 } else{
   alert('みかんの値段がリンゴより高い');
 }

 var max = 100;
 var num = 1;
 var count = 0;

while(num < max){
  num = num * 2;
  count = count + 1;
}

alert('2を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

var i;
num = 0;
for (i = 1; i < 11; i++){
  num = num + i;
}
alert('1から10まで足し算した結果は' + num + 'です');