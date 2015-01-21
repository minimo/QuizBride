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
        title: "テスト問題",
        question1: "「夜は短し歩けよ乙女」「有頂天家族」などの著作で知られる森見登美彦ですが",
        question2: "彼のデビュー作であり、山本周五郎賞を受賞した作品は",
        question3: "以下のうち、どれでしょうか",

        answer1: "「四畳半神話体系」",
        answer2: "「太陽の塔」",
        answer3: "「芸術は爆発だ！」",

        answer: 2,
};

    init: function(param) {
        this.superInit();
        this.time = 0;

        this.slide0 = tm.display.Sprite("Q1-0")
            .addChildTo(this)
            .setPosition(SC_W*0.5, SC_H*0.5);

        this.think = quiz.ThinkingTime(5)
            .setPosition(0, 0);
    },

    update: function() {
        var kb = app.keyboard;
        if (kb.getKeyDown("s")) {
            this.think.addChildTo(this);
        }
    },
});

})();
