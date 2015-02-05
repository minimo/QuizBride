/*
 *  main.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */

//乱数発生器
var mt = new MersenneTwister(0);

//フォント読み込み検出
var fontLoadEnd = false;

//定数
//デバッグ
var DEBUG = false;
var MUTEKI = false;

//スクリーンサイズ
SC_W = 1280;
SC_H = 800;

THINKING_TIME = 5;

//インスタンス
app = {};

//アプリケーションメイン
tm.main(function() {
    app = quiz.Application("#world");
//    app.enableStats();
    app.run();
});
