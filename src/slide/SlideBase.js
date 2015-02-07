/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.SlideBase", {
    superClass: "tm.app.Scene",

    labelParam:     {fontFamily:"Yasashisa", align:"center", baseline:"middle", outlineWidth:2, fontWeight:700},
    labelParamAns:  {fontFamily:"Yasashisa", align:"left", baseline:"middle", outlineWidth:2, fontWeight:700},

    //画像
    paper: [],

    //問題文章
    text: [],

    //質問
    question: [],

    //回答一覧
    answer1: [],
    answer2: [],
    answer3: [],

    //正解番号
    correct: 0,

    //スライド用スプライト配列
    slide: [],

    //メッセージ表示用
    message: null,

    //現在スライドシーケンス番号
    seq: 0,
    msg: 0,
    phase: 0,
    wait: true,

    init: function() {
        this.superInit();

        this.think = quiz.ThinkingTime().setPosition(0, 0);

        this.slide = [];
        for (var i = 0; i < this.paper.length; i++) {
            this.slide[i] = tm.display.Sprite(this.paper[i], SC_W, SC_H)
                .addChildTo(this)
                .setPosition(SC_W*0.5, SC_H*0.5)
                .setAlpha(0);
        }

        //初期画面の表示
        this.advanceSlide();

        this.on("enterframe", function() {
            var kb = app.keyboard;
            if (kb.getKeyDown("s")) {
                this.tick();
            }
            this.time++;
        }, false);
        this.time = 0;
    },

    tick: function() {
        if (this.time > 5 && !this.think.working) {
            this.phase++;
            this.wait = false;
            this.time = 0;
        }
    },

    //スライドを進める
    advanceSlide: function() {
        this.slide[this.seq++].tweener.clear().fadeIn(200);
    },

    //スライドを戻す
    backwordSlide: function() {
        this.slide[this.seq--].tweener.clear().fadeOut(200);
    },

    //テキスト表示
    enterText: function(y, number, size) {
        size = size || 60;
        var that = this;

        this.eraseText();
        this.message = tm.app.Object2D().addChildTo(this);

        tm.display.RectangleShape({width: SC_W, height: 100, fillStyle: "rgba(0,0,0,0.5)", strokeStyle: "rgba(0,0,0,0.5)"})
            .addChildTo(this.message)
            .setPosition(SC_W*0.5, y);

        var msg = this.text[number] || "undefined";
        tm.display.OutlineLabel(msg, size)
            .addChildTo(this.message)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, y);
    },

    //メッセージ消去
    eraseText: function() {
        if (this.message) {
            this.message.remove();
            this.message = null;
        }
    },

    enterQuestion: function(size) {
        size = size || 60;
        this.eraseText();
        this.message = tm.app.Object2D().addChildTo(this);

        //問題文表示
        this.ques = tm.display.RectangleShape({width:SC_W, height:100, fillStyle:"rgba(0,0,0,0.5)", strokeStyle:"rgba(0,0,0,0.5)"})
            .addChildTo(this.message)
            .setPosition(SC_W*0.5, SC_H*0.2);
        tm.display.OutlineLabel(this.question, size)
            .addChildTo(this.ques)
            .setParam(this.labelParam)
            .setPosition(0, 0);
        this.ans = [];
    },

    //回答一覧表示
    enterAnswer: function(num, x, size) {
        num = num || 0;
        x = x || SC_W*0.5;
        size = size || 60;

        var y = SC_H*0.4+SC_H*num*0.15;
        this.ans[num] = tm.display.RectangleShape({width:SC_W, height:100, fillStyle:"rgba(0,0,0,0.5)", strokeStyle:"rgba(0,0,0,0.5)"})
            .addChildTo(this.message)
            .setPosition(SC_W*0.5, y);

        tm.display.OutlineLabel(this.answer[num], size)
            .addChildTo(this.ans[num])
            .setParam(this.labelParam)
            .setPosition(0, 0);
    },

    //正解表示
    dispCorrect: function(scale) {
        scale = scale || 1.0;
        for (var i = 0; i < 3; i++) {
            if (this.correct == i) {
                this.ans[i].tweener.to({x:SC_W*0.5, y:SC_H*0.5, scaleX:scale, scaleY:scale}, 500);
            } else {
                this.ans[i].tweener.fadeOut(300);
            }
        }
    },

    //タッチorクリック開始処理
    ontouchstart: function(e) {
    },

    //タッチorクリック移動処理
    ontouchmove: function(e) {
    },

    //タッチorクリック終了処理
    ontouchend: function(e) {
        this.tick();
    },
});

})();
