/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.SlideBase", {
    superClass: "tm.app.Scene",

    question: {
        "1": "何事にも万全を持って臨む新郎",
        "2": "それは初デートの時も例外ではありません",
        "3": "さて、この「３」という数字",
        "4": "これは初デートに関係ある数字だそうです",
        "5": "それは以下のうちどれでしょうか？",

        "question1":"Ｑ１．初デートにまつわる数字",
        "question2":"「３」",
        "question3":"これは何の数字でしょうか？",

        "answer1": "提案したプランの数",
        "answer2": "残りの変身回数",
        "answer3": "渡したプレゼントの数",

        "answer": 1,
    },

    msg: null,

    init: function() {
        this.superInit();
        this.time = 0;
    },

    update: function() {
    },

    //メッセージ表示
    enterMessage: function(y, time, msg, size) {
        size = size || 45;
        var that = this;

        if (this.msg) {
            this.msg.remove();
            this.msg = null;
        }

        this.msg = tm.app.Object2D().addChildTo(this);
//        pt.tweener.wait(time).call(function(){this.remove();that.msg=null;}.bind(pt));

        tm.display.RectangleShape(SC_W*0.9, 80, {fillStyle: "rgba(0,0,0,0.5)", strokeStyle: "rgba(0,0,0,0.5)"})
            .addChildTo(this.msg)
            .setPosition(SC_W*0.5, y);

        tm.display.OutlineLabel(msg, size)
            .addChildTo(this.msg)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, y);
    },
    eraseMessage: function() {
        if (this.msg) {
            this.msg.remove();
            this.msg = null;
        }
    },
});

})();
