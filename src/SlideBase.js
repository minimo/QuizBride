/*
 *  SlideBase.js
 *  2015/01/09
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.SlideBase", {
    superClass: "tm.display.CanvasElement",

    layer: LAYER_MAIN,    //所属レイヤー
    parentScene: null,      //親シーン

    init: function(name, x, y, id, param) {
        this.superInit();
        this.time = 0;
    },

    update: function() {
    },
});

})();
