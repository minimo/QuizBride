/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.Slide2", {
    superClass: "quiz.SlideBase",

    //画像
    paper: [
        "Q02-0",
        "Q02-1",
        "Q02-2",
        "Q02-3",
    ],

    //スライドテキスト
    text: [
        "デートを重ねてめでたく交際を始めた二人",
        "会う度にサプライズやプレゼントで驚かせてくれる新郎",
        "そんな中に新郎が新婦へプレゼントした意外な物がありました",
    ],

    //問題文
    question: "新婦が新郎からプレゼントされた“意外な物”とは？",

    //答え一覧
    answer: {
        0: "（１）新郎の写真のジグソーパズル",
        1: "（２）登山用ハイキングシューズ",
        2: "（３）カステラ",
    },

    //正解番号
    correct: 2,

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
                app.replaceScene(quiz.Slide3());
                break;
        }
        this.wait = true;
    },
});

})();
