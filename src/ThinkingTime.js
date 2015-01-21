/*
 *  ThinkingTime.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.ThinkingTime", {
    superClass: "tm.display.CanvasElement",

    labelParam: {fontFamily: "Yasashisa", align: "center", baseline: "middle",outlineWidth: 2, fontWeight:700},

    finish: false,

    init: function(sec) {
        this.superInit();

        var that = this;

        this.label = tm.display.OutlineLabel("シンキングタイム！", 100)
            .addChildTo(this)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, SC_H*0.5);
        this.label.tweener.clear().wait(5000).fadeOut(10);

        this.start = tm.display.OutlineLabel("START", 100)
            .addChildTo(this)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, SC_H*0.5)
            .setAlpha(0)
            .setScale(5)
            .setRotation(20);
        this.start.tweener.clear()
            .wait(5000)
            .fadeIn(10)
            .to({scaleX:1, scaleY:1}, 2000, "easeOutBounce")
            .wait(500)
            .rotate(0, 1000, "easeOutBounce")
            .wait(3000)
            .fadeOut(500);

        this.timeup = tm.display.OutlineLabel("TIME UP!!", 100)
            .addChildTo(this)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, SC_H*0.5)
            .setAlpha(0)
            .setScale(10);

        this.sprite = tm.display.Sprite("think", 32, 32)
            .addChildTo(this)
            .setFrameIndex(0)
            .setScale(3)
            .setPosition(32, SC_H*0.9);
        this.sprite.time = 0;
        this.sprite.frame = 0;
        this.sprite.stop = false;
        this.sprite.bx = this.sprite.x;
        this.sprite.update = function() {
            if (this.x != this.bx && this.time % 3 == 0) {
                this.frame = (this.frame+1)%3;
                this.setFrameIndex(this.frame);
            }
            if (this.stop) {
                this.frame = 0;
                this.setFrameIndex(this.frame);
            }
            this.time++;
        }
        this.sprite.tweener.clear()
            .wait(5000)
            .move(SC_W-96, SC_H*0.9, 1000*sec)
            .call(function() {
                this.stop = true;
                that.finish = true;
            }.bind(this.sprite));

        this.goal = tm.display.Sprite("think", 32, 32)
            .addChildTo(this)
            .setFrameIndex(10)
            .setScale(3)
            .setPosition(SC_W-32, SC_H*0.9);
        this.goal.scaleX *= -1;    

        this.heart = tm.display.Sprite("icon", 16, 16)
            .addChildTo(this)
            .setAlpha(0)
            .setFrameIndex(10)
            .setScale(3)
            .setPosition(SC_W-64, SC_H*0.9-16);
        this.heart.tweener.clear()
            .wait(5000)
            .wait(1000*sec)
            .to({x:SC_W-64, y:SC_H*0.9-64, alpha:1}, 1000)
            .to({x:SC_W-64, y:SC_H*0.9-128, alpha:0}, 1000);

        this.time = 0;
    },

    update: function() {
        this.time++;
    },

    skip: function() {
    },

    finish: function() {
    },
});

})();
