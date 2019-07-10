/******** Modified by Hao Jiang 2019-07-01 ********/

var Candy = cc.Sprite.extend({

    type: 0,
    column: 0,
    row: 0,

    ctor: function (type, column, row) {
        this._super("res/Bubble" + (type) + ".png");
        // this._super("res/" + (type+1) + ".png");
        this.init(type, column, row);
    },

    init: function (type, column, row) {
        this.type = type;
        this.column = column;
        this.row = row;
    }
});


Candy.createRandomType = function (column, row) {
    return new Candy(parseInt(Math.random()*Constant.BUBBLE_TYPE), column, row);
};