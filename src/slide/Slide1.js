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
    ],

    //スライドテキスト
    text: [
        "二人にとって大切な初めてのデート",
        "新郎は新婦に喜んで貰うべくあらゆるプランを考える",
        "憧れの紗保子さんに気に入られて次へ繋げたい！",
    ],

    //問題文
    question: "何としてでも次へのデートに繋げたい新郎が思いついた“秘策”とは？",

    //答え一覧
    answer: {
        0: "（１）新婦が好きな店を下調べして趣味嗜好が合うように偶然を装う",
        1: "（２）早めにデートを終わらせてもっと話をしたいという印象を残す",
        2: "（３）エステに通って男を磨き、デートマニュアルにある事を全て実行した",
    },

    //正解番号
    correct: 1,

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
                this.enterAnswer(0, 1, 35);
                break;
            case 7:
                this.enterAnswer(1, 1, 35);
                break;
            case 8:
                this.enterAnswer(2, 1, 35);
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
