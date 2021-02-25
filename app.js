var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');

while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  var user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
 }

var js_hand = getJShand();
var judge = WinLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + "です。\nJavaScriptの選んだ手は" + js_hand + "です。\n結果は" + judge + "です。");
} else{
  alert("またチャレンジしてね");
}

function getJShand(){
  var js_hand_num = Math.floor( Math.random() * 3 );
  var hand_name;

  if(js_hand_num == 0){
    hand_name = "グー";
  } else if(js_hand_num == 1){
    hand_name = "チョキ";
  } else if(js_hand_num == 2){
    hand_name = "パー";
  }

  return hand_name;
}

function WinLose(user, js){
  var WinLoseStr;

  if(user =="グー"){
    if(js == "グー"){
      WinLoseStr = "あいこ";
    } else if(js == "チョキ"){
      WinLoseStr = "勝ち";
    } else if(js == "パー"){
      WinLoseStr = "負け";
    }
  } else if (user == "チョキ"){
    if(js == "グー"){
      WinLoseStr = "負け";
    } else if(js == "チョキ"){
      WinLoseStr = "あいこ";
    } else if(js == "パー"){
      WinLoseStr = "勝ち"
    }
  } else if(user == "パー"){
    if(js == "グー"){
      WinLoseStr = "勝ち";
    } else if(js == "チョキ"){
      WinLoseStr = "負け";
    } else if(js == "パー"){
      WinLoseStr = "あいこ";
    }
  }

  return WinLoseStr;
}

var alertString;
alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  var addStr = "Hello" + strA;
  return addStr;
}

var PromptStr = prompt('何か好きな文字を入力してください。');
alert(PromptStr);

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