/*
 *  SlideBase.js
 *  2015/01/19
 *  @auther minimo  
 *  This Program is MIT license.
 */
(function() {

tm.define("quiz.SlideBase", {
    superClass: "tm.app.Scene",

    question: {
        "1": "�����ɂ����S�������ėՂސV�Y",
        "2": "����͏��f�[�g�̎�����O�ł͂���܂���",
        "3": "���āA���́u�R�v�Ƃ�������",
        "4": "����͏��f�[�g�Ɋ֌W���鐔���������ł�",
        "5": "����͈ȉ��̂����ǂ�ł��傤���H",

        "question1":"�p�P�D���f�[�g�ɂ܂�鐔��",
        "question2":"�u�R�v",
        "question3":"����͉��̐����ł��傤���H",

        "answer1": "��Ă����v�����̐�",
        "answer2": "�c��̕ϐg��",
        "answer3": "�n�����v���[���g�̐�",

        "answer": 1,
    },

    msg: null,

    init: function() {
        this.superInit();
        this.time = 0;
    },

    update: function() {
    },

    //���b�Z�[�W�\��
    enterMessage: function(y, time, msg, size) {
        size = size || 45;
        var that = this;

        if (this.msg) {
            this.msg.remove();
            this.msg = null;
        }

        this.msg = tm.app.Object2D().addChildTo(this);
//        pt.tweener.wait(time).call(function(){this.remove();that.msg=null;}.bind(pt));

        tm.display.RectangleShape(SC_W*0.9, 80, {fillStyle: "rgba(0,0,0,0.5)", strokeStyle: "rgba(0,0,0,0.5)"})
            .addChildTo(this.msg)
            .setPosition(SC_W*0.5, y);

        tm.display.OutlineLabel(msg, size)
            .addChildTo(this.msg)
            .setParam(this.labelParam)
            .setPosition(SC_W*0.5, y);
    },
    eraseMessage: function() {
        if (this.msg) {
            this.msg.remove();
            this.msg = null;
        }
    },
});

})();
