/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

var SLIDE_DEFAULT_PARAM = {
    title: "テスト問題",
    question1: "「夜は短し歩けよ乙女」「有頂天家族」などの著作で知られる森見登美彦ですが",
    question2: "彼のデビュー作であり、山本周五郎賞を受賞した作品は",
    question3: "以下のうち、どれでしょうか",

    answer1:"「四畳半神話体系」",
    answer2:"「ペンギンハイウェイ」",
    answer3:"「太陽の塔」",
    answer4:"「芸術は爆発だ！」",

    answer: 3,
};

tm.define("quiz.Slide1", {
    superClass: "quiz.SlideBase",

    labelParam: {fontFamily: "Yasashisa", align: "center", baseline: "middle",outlineWidth: 2, fontWeight:700},

    init: function(param) {
        this.superInit();
        this.time = 0;

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
