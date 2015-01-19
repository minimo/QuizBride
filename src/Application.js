/*
 *  jsstg-2015spring
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

quiz = {
    core: null,
};

quiz.Application = tm.createClass({
    superClass: tm.app.CanvasApp,

    mainScene: null,

    init: function(id) {
        this.superInit(id);

        quiz.core = this;
        this.resize(SC_W, SC_H).fitWindow();
        this.fps = 30;
        this.background = "rgba(0, 0, 0, 1.0)";

        this.keyboard = tm.input.Keyboard(window);

        var loadingScene = jsstg.LoadingScene({
            assets: quiz.assets,
            width: SC_W,
            height: SC_H,
            bgColor: "black",
            nextScene: function() {
                this._onLoadAssets();
                return quiz.MainScene();
            }.bind(this),
        });

        this.replaceScene(loadingScene);
    },

    _onLoadAssets: function() {
    },

    exitApp: function() {
        this.stop();
    },
});

})();