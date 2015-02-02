/*
 *  Application
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

        var loadingScene = quiz.LoadingScene({
            assets: quiz.assets,
            width: SC_W,
            height: SC_H,
            bgColor: "black",
            nextScene: function() {
                this._onLoadAssets();
                return quiz.Slide1();
            }.bind(this),
        });

        this.replaceScene(loadingScene);
    },

    _onLoadAssets: function() {
        app.playBGM("bgm1");
    },

    exitApp: function() {
        this.stop();
    },
    //BGM再生
    playBGM: function(assetName) {
        if (this.bgm) {
            this.bgm.stop();
        }
        this.bgm = tm.asset.AssetManager.get(assetName);
        if (this.bgm) {
            this.bgm.loop = true;
            this.bgm.currentTime = 0;
            this.bgm.play();
            return this.bgm;
        }
        return null;
    },

    //SoundEffect再生
    playSE: function(assetName) {
        var se = tm.asset.AssetManager.get(assetName)
        if (se) se.clone().play();
    },
});

//SpriteのsetFrameIndexをちょっと改造
tm.display.Sprite.prototype.setFrameIndex = function(index, width, height) {

    //テクスチャのトリミング設定
    var sx = this.frameTrimX || 0;
    var sy = this.frameTrimY || 0;
    var sw = this.frameTrimW || (this.image.width-sx);
    var sh = this.frameTrimH || (this.image.height-sy);

    var tw  = width || this.width;      // tw
    var th  = height || this.height;    // th
    var row = ~~(sw / tw);
    var col = ~~(sh / th);
    var maxIndex = row*col;
    index = index%maxIndex;

    var x   = index%row;
    var y   = ~~(index/row);
    this.srcRect.x = sx+x*tw;
    this.srcRect.y = sy+y*th;
    this.srcRect.width  = tw;
    this.srcRect.height = th;

    this._frameIndex = index;

    return this;
}

//トリミング開始位置設定
tm.display.Sprite.prototype.setFrameTrim = function(x, y, width, height) {
    this.frameTrimX = x || 0;
    this.frameTrimY = y || 0;
    this.frameTrimW = width || this.image.width - this.frameTrimX;
    this.frameTrimH = height || this.image.height - this.frameTrimY;
    return this;
}

})();