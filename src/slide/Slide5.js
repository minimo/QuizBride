/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.Slide5", {
    superClass: "quiz.SlideBase",

    //画像
    paper: [
        "Q05-0",
        "Q05-1",
        "Q05-2",
        "Q05-3",
    ],

    //スライドテキスト
    text: [
        "プロポーズも成功し、より一層ラブラブになった二人",
        "結婚式を意識してより一層お互いが輝いて見える日々",
        "そんな中でも思わず新婦がキュンと惚れなおす新郎の特技が有りました",
    ],

    //問題文
    question: "新婦が惚れなおしてしまう新郎の“特技”とは？",

    //答え一覧
    answer: {
        0: "（１）りんごの皮むきが上手い",
        1: "（２）毛糸の編み物が上手い",
        2: "（３）食用キノコと毒キノコが見分けられる",
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
                this.advanceSlide();
                this.enterText(SC_H*0.9, this.msg++);
                break;
            case 5:
                this.enterQuestion(40);
                break;
            case 6:
                this.enterAnswer(0, 1, 45);
                break;
            case 7:
                this.enterAnswer(1, 1, 45);
                break;
            case 8:
                this.enterAnswer(2, 1, 45);
                break;
            case 9:
                this.think.addChildTo(this);
                break;
            case 10:
                this.think.start(5);
                break;
            case 11:
                this.dispCorrect();
                this.think.leaveStage();
                break;
            case 12:
                app.replaceScene(quiz.Slide1());
                break;
        }
        this.wait = true;
    },
});

})();