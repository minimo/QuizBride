/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.Slide4", {
    superClass: "quiz.SlideBase",

    //画像
    paper: [
        "Q04-0",
        "Q04-1",
        "Q04-2",
        "Q04-3",
    ],

    //スライドテキスト
    text: [
        "交際を重ねて半年、機は熟した！",
        "遂にプロポーズを決意した新郎",
        "しかし人生初めての大勝負に自信がない・・・",
    ],

    //問題文
    question: "新郎がとったプロポーズを成功させる為の“秘策”とは？",

    //答え一覧
    answer: {
        0: "（１）カンニングペーパーを読みながらプロポーズした",
        1: "（２）家族の前で何度もリハーサルした",
        2: "（３）ブライダルセミナーに通い練習した",
    },

    //正解番号
    correct: 0,

    init: function(param) {
        this.superInit();
        this.time = 0;
    },

    update: function() {
        if (this.wait) return;

        switch (this.phase) {
            case 1:
                this.advanceSlide();
                this.enterText(SC_H*0.9, this.msg++);
                break;
            case 2:
                this.advanceSlide();
                this.enterText(SC_H*0.9, this.msg++);
                break;
            case 3:
                this.advanceSlide();
                this.enterText(SC_H*0.9, this.msg++);
                break;
            case 4:
                this.enterQuestion(40);
                break;
            case 5:
                this.enterAnswer(0, 1, 45);
                break;
            case 6:
                this.enterAnswer(1, 1, 45);
                break;
            case 7:
                this.enterAnswer(2, 1, 45);
                break;
            case 8:
                this.think.addChildTo(this);
                break;
            case 9:
                this.think.start(THINKING_TIME);
                break;
            case 10:
                this.dispCorrect();
                this.think.leaveStage();
                break;
            case 11:
                app.replaceScene(quiz.Slide5());
                break;
        }
        this.wait = true;
    },
});

})();
