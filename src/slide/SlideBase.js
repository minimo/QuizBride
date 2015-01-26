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

    //質問
    question: [],

    //答え一覧
    answer: [],

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

        this.slide = [];
        for (var i = 0; i < this.paper.length; i++) {
            this.slide[i] = tm.display.Sprite(this.paper[i])
                .addChildTo(this)
                .setPosition(SC_W*0.5, SC_H*0.5)
                .setAlpha(0);
        }

        this.time = 0;
    },

    update: function() {
    },

    //スライドを進める
    advanceSlide: function() {
        this.slide[this.seq++].tweener.clear().fadeIn(100);
    },

    //スライドを戻す
    backwordSlide: function() {
        this.slide[this.seq--].tweener.clear().fadeOut(100);
    },

    //メッセージ表示
    enterMessage: function(y, number, size) {
        size = size || 45;
        var that = this;

        this.eraseMessage();
        this.message = tm.app.Object2D().addChildTo(this);

        tm.display.RectangleShape({width: SC_W*0.9, height: 80, fillStyle: "rgba(0,0,0,0.5)", strokeStyle: "rgba(0,0,0,0.5)"})
            .addChildTo(this.message)
            .setPosition(SC_W*0.5, y);

        var msg = this.question[number] || "undefined";
        tm.display.OutlineLabel(msg, size)
            .addChildTo(this.message)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, y);
    },
    eraseMessage: function() {
        if (this.message) {
            this.message.remove();
            this.message = null;
        }
    },

    enterAnswer: function(x) {
        x = x || SC_W*0.25;
        size = 45;
        this.eraseMessage();
        this.message = tm.app.Object2D().addChildTo(this);

        for (var i = 0; i < 4; i++) {
            var y =  SC_H*0.27+SC_H*i*0.15;
            var base = tm.display.RectangleShape({width: SC_W*0.9, height: 80, fillStyle: "rgba(0,0,0,0.5)", strokeStyle: "rgba(0,0,0,0.5)"})
                .addChildTo(this.message)
                .setPosition(SC_W*0.5, y);

            var msg = this.answer[i] || "undefined";
            tm.display.OutlineLabel(msg, size)
                .addChildTo(base)
                .setParam(this.labelParamAns)
                .setPosition(x-SC_W*0.5, 0);
        }
    },

    dispCorrect: function() {
    },
});

})();
