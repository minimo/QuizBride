/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.Slide0", {
    superClass: "quiz.SlideBase",

    //画像
    paper: [
        "title",
    ],

    init: function(param) {
        this.superInit();
        this.time = 0;
        app.playBGM("bgm1");
    },

    update: function() {
        var kb = app.keyboard;
        if (kb.getKeyDown("1")) app.replaceScene(quiz.Slide1());
        if (kb.getKeyDown("2")) app.replaceScene(quiz.Slide2());
        if (kb.getKeyDown("3")) app.replaceScene(quiz.Slide3());
        if (kb.getKeyDown("4")) app.replaceScene(quiz.Slide4());
        if (kb.getKeyDown("5")) app.replaceScene(quiz.Slide5());

        if (this.wait) return;

        switch (this.phase) {
            case 1:
                app.replaceScene(quiz.Slide1());
                break;
        }
        this.wait = true;
    },
});

})();
