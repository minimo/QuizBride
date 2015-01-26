/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.Slide1", {
    superClass: "quiz.SlideBase",

    //画像
    paper: [
        "Q01-0",
        "Q01-1",
        "Q01-2",
        "Q01-3",
        "Q01-4",
    ],

    //質問
    question: [
        "何事にも万全を持って臨む新郎",
        "それは初デートの時も例外ではありません",
        "さて、この「３」という数字",
        "これは初デートに関係ある数字だそうです",
        "それは以下のうちどれでしょうか？",
    ],

    //答え一覧
    answer: [
        "①　提案したプランの数",
        "②　渡したプレゼントの数",
        "③　デートで回った場所の数",
        "④　残りの変身回数",
    ],

    init: function(param) {
        this.superInit();
        this.time = 0;

        this.think = quiz.ThinkingTime()
            .setPosition(0, 0);
    },

    update: function() {
        var kb = app.keyboard;
        if (kb.getKeyDown("s") && this.time > 15) {
            this.phase++;
            this.time = 0;
            this.wait = false;
        }　else {
            this.time++;
        }

        if (this.wait) return;

        switch (this.phase) {
            case 1:
                this.advanceSlide();
                break;
            case 2:
                this.advanceSlide();
                break;
            case 3:
                this.enterMessage(SC_H*0.8, this.msg++);
                break;
            case 4:
                this.advanceSlide();
                this.enterMessage(SC_H*0.8, this.msg++);
                break;
            case 5:
                this.advanceSlide();
                this.enterMessage(SC_H*0.8, this.msg++);
                break;
            case 6:
                this.enterMessage(SC_H*0.8, this.msg++);
                break;
            case 7:
                this.enterMessage(SC_H*0.8, this.msg++);
                break;
            case 8:
                this.enterAnswer();
                break;
            case 9:
                this.think.addChildTo(this);
                break;
            case 10:
                this.think.start(10);
                break;
        }
        this.wait = true;
    },
});

})();
