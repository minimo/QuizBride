/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.Slide3", {
    superClass: "quiz.SlideBase",

    //画像
    paper: [
        "Q03-0",
        "Q03-1",
        "Q03-2",
        "Q03-3",
    ],

    //スライドテキスト
    text: [
        "交際を重ねるにつれて、色々な仕草や行動を見せる新婦",
        "そんな新婦に新郎は毎回メロメロです",
        "ある日新婦のとった行動に新郎は胸キュンしてしまいます",
    ],

    //問題文
    question: "新郎が思わず胸キュンしてしまう新婦がとった“ある行動”とは？",

    //答え一覧
    answer: {
        0: "（１）食事中口についたソースを指で拭いてくれた",
        1: "（２）待ち合わせで後ろからこっそり近づきハグしてくれた",
        2: "（３）歩道で車から守ろうと腕を引っ張ってくれた",
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
                this.enterAnswer(0, 1, 40);
                break;
            case 6:
                this.enterAnswer(1, 1, 40);
                break;
            case 7:
                this.enterAnswer(2, 1, 40);
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
                app.replaceScene(quiz.Slide4());
                break;
        }
        this.wait = true;
    },
});

})();
