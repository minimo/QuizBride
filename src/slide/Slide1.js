/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.Slide1", {
    superClass: "quiz.SlideBase",

    labelParam: {fontFamily: "Yasashisa", align: "center", baseline: "middle",outlineWidth: 2, fontWeight:700},

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

    //現在スライドシーケンス番号
    seq: 0,
    phase: 0,

    init: function(param) {
        this.superInit();
        this.time = 0;

        this.slide = [];
        for (var i = 0; i < 5; i++) {
            this.slide[i] = tm.display.Sprite("Q01-"+i)
                .addChildTo(this)
                .setPosition(SC_W*2, SC_H*0.5);
        }

        this.think = quiz.ThinkingTime(60)
            .setPosition(0, 0);
    },

    update: function() {
        var kb = app.keyboard;
        if (kb.getKeyDown("s") && this.time > 15) {
            this.phase++;
            this.time = 0;
        }
        if (this.phase == 1) {
            this.slide[this.seq].tweener.clear().moveBy(-SC_W*1.5, 0, 500, "easeOutSine");
            this.seq++;
            this.phase++;
        }
        if (this.phase == 3) {
            this.slide[this.seq].tweener.clear().moveBy(-SC_W*1.5, 0, 500, "easeOutSine");
            this.seq++;
            this.phase++;
        }
        if (this.phase == 5) {
            this.enterMessage(SC_H*0.8, 3000, this.question[1]);
            this.phase++;
        }
        if (this.phase == 7) {
//            this.slide[this.seq].tweener.clear().moveBy(-SC_W*1.5, 0, 500, "easeOutSine");
            this.enterMessage(SC_H*0.8, 3000, this.question[2]);
//            this.seq++;
            this.phase++;
        }

        this.time++;
    },
});

})();
