/******** Modified by Hao Jiang 2019-07-01 ********/

var GameUI = cc.Layer.extend({

    levelText:null,
    scoreText:null,
    stepText:null,

    gameLayer:null,

    ctor: function (gameLayer) {
        this._super();
        this.gameLayer = gameLayer;

        this._initInfoPanel();

        this.scheduleUpdate();
    },

    _initInfoPanel: function () {
        var size = cc.director.getWinSize();
        var levelLabel = new cc.LabelTTF("Level", "arial", 36);
        levelLabel.x = 100;
        levelLabel.y = size.height - 50;
        levelLabel.setColor(cc.color(0,0,0));
        this.addChild(levelLabel);

        var levelText = new cc.LabelTTF("1", "arial", 36);
        levelText.x = 100;
        levelText.y = levelLabel.y - 40;
        levelText.setColor(cc.color(0,0,0));
        this.addChild(levelText);
        this.levelText = levelText;

        var scoreLabel = new cc.LabelTTF("Score", "arial", 36);
        scoreLabel.x = 370;
        scoreLabel.y = levelLabel.y;
        scoreLabel.setColor(cc.color(0,0,0));
        this.addChild(scoreLabel);

        var scoreText = new cc.LabelTTF("1", "arial", 36);
        scoreText.x = 370;
        scoreText.y = levelText.y;
        scoreText.setColor(cc.color(0,0,0));
        this.addChild(scoreText);
        this.scoreText = scoreText;

        var stepLabel = new cc.LabelTTF("Step", "arial", 36);
        stepLabel.x = 620;
        stepLabel.y = levelLabel.y;
        stepLabel.setColor(cc.color(0,0,0));
        this.addChild(stepLabel);

        var stepText = new cc.LabelTTF("1", "arial", 36);
        stepText.x = 620;
        stepText.y = levelText.y;
        stepText.setColor(cc.color(0,0,0));
        this.addChild(stepText);
        this.stepText = stepText;
    },

    showSuccess: function () {
        var size = cc.director.getWinSize();
        var dlg = new cc.Sprite("res/SuccessDialog.png");
        this.addChild(dlg, 1);
        dlg.x = size.width/2;
        dlg.y = size.height/2;

        cc.audioEngine.playEffect("res/sounds/GameSucceed.mp3", false);

//        dlg.x = (size.width - dlg.width)/2;
//        dlg.y = (size.height - dlg.height)/2;
//        var bg = new cc.LayerColor(cc.color(255,255,255),500,500);
//        this.addChild(bg, 1);
//        bg.x = (size.width - bg.width)/2;
//        bg.y = (size.height - bg.height)/2;
//        var stepText = new cc.LabelTTF("Congratulation!\nMission " + (this.gameLayer.level+1) + " Completed.", "arial", 50);
//        stepText.setColor(cc.color(0,0,0));
//        stepText.x = 250;
//        stepText.y = 250;
//        bg.addChild(stepText);
    },

    showFail: function () {
        var size = cc.director.getWinSize();
        var dlg = new cc.Sprite("res/FailedDialog.png");
        this.addChild(dlg, 1);
        dlg.x = size.width/2;
        dlg.y = size.height/2;

        cc.audioEngine.playEffect("res/sounds/GameFailed.mp3", false);
//        var bg = new cc.LayerColor(cc.color(255,255,255),500,500);
//        this.addChild(bg, 1);
//        var size = cc.director.getWinSize();
//        bg.x = (size.width - bg.width)/2;
//        bg.y = (size.height - bg.height)/2;
//        var stepText = new cc.LabelTTF("Game Over.\n Please Start Again.", "arial", 50);
//        stepText.setColor(cc.color(0,0,0));
//        stepText.x = 250;
//        stepText.y = 250;
//        bg.addChild(stepText);
    },

    update: function () {
        this.levelText.setString("" + (this.gameLayer.level+1));
        this.targetScore = Constant.levels[this.gameLayer.level].targetScore;
        this.scoreText.setString("" + this.gameLayer.score + "/" + this.targetScore);
        this.stepText.setString("" + (this.gameLayer.limitStep - this.gameLayer.steps));
    }

});