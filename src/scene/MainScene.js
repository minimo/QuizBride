/*
 *  MainScene.js
 *  2015/01/06
 *  @auther minimo  
 *  This Program is MIT license.
 *
 */
(function() {

tm.define("quiz.MainScene", {
    superClass: tm.app.Scene,

    //タッチ情報
    startX: 0,
    startY: 0,
    moveX: 0,
    moveY: 0,
    beforeX: 0,
    beforeY: 0,

    //経過時間
    time: 0,

    background: "rgba(0, 100, 0, 1.0)",
    labelParam: {fontFamily: "misaki", align: "left", baseline: "top",outlineWidth: 3},

    init: function() {
        this.superInit();

        //レイヤー作成
        this.layers = [];
        for (var i = 0; i < LAYER_SYSTEM+1; i++) {
            this.layers[i] = tm.app.Object2D().addChildTo(this);
        }

        //システム表示ベース
        this.systemBase = tm.app.Object2D()
            .addChildTo(this)
            .setPosition(0, 0);
    },

    update: function() {
    },

    //タッチorクリック開始処理
    ontouchstart: function(e) {
    },

    //タッチorクリック移動処理
    ontouchmove: function(e) {
    },

    //タッチorクリック終了処理
    ontouchend: function(e) {
    },

    //addChildオーバーライド
    addChild: function(child) {
        if (child.layer === undefined) {
            return this.superClass.prototype.addChild.apply(this, arguments);
        }
        child.parentScene = this;
        child.player = this.player;
        return this.layers[child.layer].addChild(child);
    },
});

})();
