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
