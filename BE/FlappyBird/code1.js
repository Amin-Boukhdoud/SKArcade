gdjs.GameCode = {};
gdjs.GameCode.GDBorderObjects1_1final = [];

gdjs.GameCode.GDBottom_9595pipeObjects1_1final = [];

gdjs.GameCode.GDFlappy_9595birdObjects1_1final = [];

gdjs.GameCode.GDGroundObjects1_1final = [];

gdjs.GameCode.GDTop_9595pipeObjects1_1final = [];

gdjs.GameCode.GDFlappy_9595birdObjects1= [];
gdjs.GameCode.GDFlappy_9595birdObjects2= [];
gdjs.GameCode.GDFlappy_9595birdObjects3= [];
gdjs.GameCode.GDFlappy_9595birdObjects4= [];
gdjs.GameCode.GDTop_9595pipeObjects1= [];
gdjs.GameCode.GDTop_9595pipeObjects2= [];
gdjs.GameCode.GDTop_9595pipeObjects3= [];
gdjs.GameCode.GDTop_9595pipeObjects4= [];
gdjs.GameCode.GDBottom_9595pipeObjects1= [];
gdjs.GameCode.GDBottom_9595pipeObjects2= [];
gdjs.GameCode.GDBottom_9595pipeObjects3= [];
gdjs.GameCode.GDBottom_9595pipeObjects4= [];
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects1= [];
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2= [];
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects3= [];
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects4= [];
gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects1= [];
gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2= [];
gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects3= [];
gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects4= [];
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects1= [];
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2= [];
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects3= [];
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects4= [];
gdjs.GameCode.GDMenu_9595buttonObjects1= [];
gdjs.GameCode.GDMenu_9595buttonObjects2= [];
gdjs.GameCode.GDMenu_9595buttonObjects3= [];
gdjs.GameCode.GDMenu_9595buttonObjects4= [];
gdjs.GameCode.GDShare_9595buttonObjects1= [];
gdjs.GameCode.GDShare_9595buttonObjects2= [];
gdjs.GameCode.GDShare_9595buttonObjects3= [];
gdjs.GameCode.GDShare_9595buttonObjects4= [];
gdjs.GameCode.GDRestart_9595buttonObjects1= [];
gdjs.GameCode.GDRestart_9595buttonObjects2= [];
gdjs.GameCode.GDRestart_9595buttonObjects3= [];
gdjs.GameCode.GDRestart_9595buttonObjects4= [];
gdjs.GameCode.GDPanel_9595scoreObjects1= [];
gdjs.GameCode.GDPanel_9595scoreObjects2= [];
gdjs.GameCode.GDPanel_9595scoreObjects3= [];
gdjs.GameCode.GDPanel_9595scoreObjects4= [];
gdjs.GameCode.GDBorderObjects1= [];
gdjs.GameCode.GDBorderObjects2= [];
gdjs.GameCode.GDBorderObjects3= [];
gdjs.GameCode.GDBorderObjects4= [];
gdjs.GameCode.GDFlashObjects1= [];
gdjs.GameCode.GDFlashObjects2= [];
gdjs.GameCode.GDFlashObjects3= [];
gdjs.GameCode.GDFlashObjects4= [];
gdjs.GameCode.GDlabel_9595game_9595overObjects1= [];
gdjs.GameCode.GDlabel_9595game_9595overObjects2= [];
gdjs.GameCode.GDlabel_9595game_9595overObjects3= [];
gdjs.GameCode.GDlabel_9595game_9595overObjects4= [];
gdjs.GameCode.GDInstructionsObjects1= [];
gdjs.GameCode.GDInstructionsObjects2= [];
gdjs.GameCode.GDInstructionsObjects3= [];
gdjs.GameCode.GDInstructionsObjects4= [];
gdjs.GameCode.GDBackground_9595dayObjects1= [];
gdjs.GameCode.GDBackground_9595dayObjects2= [];
gdjs.GameCode.GDBackground_9595dayObjects3= [];
gdjs.GameCode.GDBackground_9595dayObjects4= [];
gdjs.GameCode.GDGroundObjects1= [];
gdjs.GameCode.GDGroundObjects2= [];
gdjs.GameCode.GDGroundObjects3= [];
gdjs.GameCode.GDGroundObjects4= [];
gdjs.GameCode.GDNew_9595hscoreObjects1= [];
gdjs.GameCode.GDNew_9595hscoreObjects2= [];
gdjs.GameCode.GDNew_9595hscoreObjects3= [];
gdjs.GameCode.GDNew_9595hscoreObjects4= [];


gdjs.GameCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_9595pipeObjects2);
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(0);
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595birdObjects2[i].activateBehavior("SineMovement", true);
}
}{for(var i = 0, len = gdjs.GameCode.GDTop_9595pipeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTop_9595pipeObjects2[i].flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_9595birdObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_9595birdObjects2[i].behaviorActivated("SineMovement") ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlappy_9595birdObjects2[k] = gdjs.GameCode.GDFlappy_9595birdObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_9595birdObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_9595birdObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlappy_9595birdObjects2[i].behaviorActivated("SineMovement")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlappy_9595birdObjects2[k] = gdjs.GameCode.GDFlappy_9595birdObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_9595birdObjects2.length = k;
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(2).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Bottom_pipe"), gdjs.GameCode.GDBottom_9595pipeObjects1);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_9595pipeObjects1);
{for(var i = 0, len = gdjs.GameCode.GDBottom_9595pipeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDBottom_9595pipeObjects1[i].setZOrder(1);
}
for(var i = 0, len = gdjs.GameCode.GDTop_9595pipeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTop_9595pipeObjects1[i].setZOrder(1);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595birdObjects1Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_9595birdObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects1});
gdjs.GameCode.eventsList1 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Bottom_pipe"), gdjs.GameCode.GDBottom_9595pipeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_9595pipeObjects2);
{for(var i = 0, len = gdjs.GameCode.GDBottom_9595pipeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDBottom_9595pipeObjects2[i].addForce(-(100), 0, 0);
}
for(var i = 0, len = gdjs.GameCode.GDTop_9595pipeObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDTop_9595pipeObjects2[i].addForce(-(100), 0, 0);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595birdObjects2[i].rotateTowardAngle(gdjs.randomFloatInRange(-(90), 90), 50, runtimeScene);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
{let isConditionTrue_2 = false;
isConditionTrue_1 = false;
{
isConditionTrue_2 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
isConditionTrue_2 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if(isConditionTrue_2) {
    isConditionTrue_1 = true;
}
}
{
}
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_2) {
isConditionTrue_2 = false;
isConditionTrue_2 = gdjs.evtTools.input.popEndedTouch(runtimeScene);
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9119892);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Instructions"), gdjs.GameCode.GDInstructionsObjects2);
{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_wing.wav", false, 100, 1);
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595birdObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595birdObjects2[i].getBehavior("PlatformerObject").setCanJump();
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595birdObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595birdObjects2[i].setAngle(320);
}
}{for(var i = 0, len = gdjs.GameCode.GDInstructionsObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDInstructionsObjects2[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_9595birdObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_9595birdObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlappy_9595birdObjects2[k] = gdjs.GameCode.GDFlappy_9595birdObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_9595birdObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(2)) == 0;
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFlappy_9595birdObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595birdObjects2[i].rotateTowardAngle(90, 150, runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595birdObjects1Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFlappy_9595birdObjects1 */
{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595birdObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595birdObjects1[i].rotate(90, runtimeScene);
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTop_95959595pipeObjects1Objects = Hashtable.newFrom({"Top_pipe": gdjs.GameCode.GDTop_9595pipeObjects1});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottom_95959595pipeObjects1Objects = Hashtable.newFrom({"Bottom_pipe": gdjs.GameCode.GDBottom_9595pipeObjects1});
gdjs.GameCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_9595birdObjects1.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlappy_9595birdObjects1[i].behaviorActivated("SineMovement")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlappy_9595birdObjects1[k] = gdjs.GameCode.GDFlappy_9595birdObjects1[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_9595birdObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2.5, "pipe_spawn");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9126172);
}
}
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDBottom_9595pipeObjects1.length = 0;

gdjs.GameCode.GDTop_9595pipeObjects1.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDTop_95959595pipeObjects1Objects, 420, gdjs.randomInRange(70, 320), "");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottom_95959595pipeObjects1Objects, 420, (( gdjs.GameCode.GDTop_9595pipeObjects1.length === 0 ) ? 0 :gdjs.GameCode.GDTop_9595pipeObjects1[0].getPointY("")) + 120, "");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "pipe_spawn");
}{for(var i = 0, len = gdjs.GameCode.GDTop_9595pipeObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDTop_9595pipeObjects1[i].flipX(true);
}
}}

}


};gdjs.GameCode.eventsList3 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_hscore"), gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score"), gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score_two"), gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2[i].setOutline("0;0;0", 7);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2[i].setOutline("0;0;0", 2);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2[i].setOutline("0;0;0", 2);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score"), gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score_two"), gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Bottom_pipe"), gdjs.GameCode.GDBottom_9595pipeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_9595pipeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBottom_9595pipeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottom_9595pipeObjects2[i].getX() < (( gdjs.GameCode.GDFlappy_9595birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_9595birdObjects2[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBottom_9595pipeObjects2[k] = gdjs.GameCode.GDBottom_9595pipeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottom_9595pipeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTop_9595pipeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTop_9595pipeObjects2[i].getX() < (( gdjs.GameCode.GDFlappy_9595birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_9595birdObjects2[0].getPointX("Centre")) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTop_9595pipeObjects2[k] = gdjs.GameCode.GDTop_9595pipeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTop_9595pipeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDBottom_9595pipeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDBottom_9595pipeObjects2[i].getX() > (( gdjs.GameCode.GDFlappy_9595birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_9595birdObjects2[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDBottom_9595pipeObjects2[k] = gdjs.GameCode.GDBottom_9595pipeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDBottom_9595pipeObjects2.length = k;
for (var i = 0, k = 0, l = gdjs.GameCode.GDTop_9595pipeObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDTop_9595pipeObjects2[i].getX() > (( gdjs.GameCode.GDFlappy_9595birdObjects2.length === 0 ) ? 0 :gdjs.GameCode.GDFlappy_9595birdObjects2[0].getPointX("Centre")) - 60 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDTop_9595pipeObjects2[k] = gdjs.GameCode.GDTop_9595pipeObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDTop_9595pipeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9130276);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_point.wav", false, 100, 1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) > gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score"));
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9131644);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.storage.writeNumberInJSONFile("save", "high_score", gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)));
}{runtimeScene.getScene().getVariables().getFromIndex(3).setNumber(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.storage.elementExistsInJSONFile("save", "high_score");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_hscore"), gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2);
{gdjs.evtTools.storage.readNumberFromJSONFile("save", "high_score", runtimeScene, runtimeScene.getScene().getVariables().get("score"));
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2[i].setString(gdjs.evtTools.common.toString(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("score"))));
}
}{gdjs.evtTools.network.sendAsyncRequest("../db.php", "score=data", "POST", "application / json; charset = utf-8”, but for my example set", runtimeScene.getScene().getVariables().get("score"), gdjs.VariablesContainer.badVariable);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score_two"), gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2[k] = gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird_score"), gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2[i].hide();
}
}}

}


{



}


};gdjs.GameCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.GameCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.GameCode.GDGroundObjects1[i].setXOffset(gdjs.GameCode.GDGroundObjects1[i].getXOffset() + (1.7));
}
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_9595birdObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBorderObjects2Objects = Hashtable.newFrom({"Border": gdjs.GameCode.GDBorderObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_9595birdObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects2Objects = Hashtable.newFrom({"Ground": gdjs.GameCode.GDGroundObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595birdObjects2Objects = Hashtable.newFrom({"Flappy_bird": gdjs.GameCode.GDFlappy_9595birdObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottom_95959595pipeObjects2ObjectsGDgdjs_9546GameCode_9546GDTop_95959595pipeObjects2Objects = Hashtable.newFrom({"Bottom_pipe": gdjs.GameCode.GDBottom_9595pipeObjects2, "Top_pipe": gdjs.GameCode.GDTop_9595pipeObjects2});
gdjs.GameCode.eventsList5 = function(runtimeScene) {

{



}


{

gdjs.GameCode.GDBorderObjects1.length = 0;

gdjs.GameCode.GDBottom_9595pipeObjects1.length = 0;

gdjs.GameCode.GDFlappy_9595birdObjects1.length = 0;

gdjs.GameCode.GDGroundObjects1.length = 0;

gdjs.GameCode.GDTop_9595pipeObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.GameCode.GDBorderObjects1_1final.length = 0;
gdjs.GameCode.GDBottom_9595pipeObjects1_1final.length = 0;
gdjs.GameCode.GDFlappy_9595birdObjects1_1final.length = 0;
gdjs.GameCode.GDGroundObjects1_1final.length = 0;
gdjs.GameCode.GDTop_9595pipeObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Border"), gdjs.GameCode.GDBorderObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBorderObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBorderObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBorderObjects1_1final.indexOf(gdjs.GameCode.GDBorderObjects2[j]) === -1 )
            gdjs.GameCode.GDBorderObjects1_1final.push(gdjs.GameCode.GDBorderObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDFlappy_9595birdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDFlappy_9595birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_9595birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_9595birdObjects1_1final.push(gdjs.GameCode.GDFlappy_9595birdObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.GameCode.GDGroundObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDGroundObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDFlappy_9595birdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDFlappy_9595birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_9595birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_9595birdObjects1_1final.push(gdjs.GameCode.GDFlappy_9595birdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDGroundObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDGroundObjects1_1final.indexOf(gdjs.GameCode.GDGroundObjects2[j]) === -1 )
            gdjs.GameCode.GDGroundObjects1_1final.push(gdjs.GameCode.GDGroundObjects2[j]);
    }
}
}
{
gdjs.copyArray(runtimeScene.getObjects("Bottom_pipe"), gdjs.GameCode.GDBottom_9595pipeObjects2);
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.GameCode.GDFlappy_9595birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Top_pipe"), gdjs.GameCode.GDTop_9595pipeObjects2);
isConditionTrue_1 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595birdObjects2Objects, gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDBottom_95959595pipeObjects2ObjectsGDgdjs_9546GameCode_9546GDTop_95959595pipeObjects2Objects, false, runtimeScene, false);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.GameCode.GDBottom_9595pipeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDBottom_9595pipeObjects1_1final.indexOf(gdjs.GameCode.GDBottom_9595pipeObjects2[j]) === -1 )
            gdjs.GameCode.GDBottom_9595pipeObjects1_1final.push(gdjs.GameCode.GDBottom_9595pipeObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDFlappy_9595birdObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDFlappy_9595birdObjects1_1final.indexOf(gdjs.GameCode.GDFlappy_9595birdObjects2[j]) === -1 )
            gdjs.GameCode.GDFlappy_9595birdObjects1_1final.push(gdjs.GameCode.GDFlappy_9595birdObjects2[j]);
    }
    for (let j = 0, jLen = gdjs.GameCode.GDTop_9595pipeObjects2.length; j < jLen ; ++j) {
        if ( gdjs.GameCode.GDTop_9595pipeObjects1_1final.indexOf(gdjs.GameCode.GDTop_9595pipeObjects2[j]) === -1 )
            gdjs.GameCode.GDTop_9595pipeObjects1_1final.push(gdjs.GameCode.GDTop_9595pipeObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.GameCode.GDBorderObjects1_1final, gdjs.GameCode.GDBorderObjects1);
gdjs.copyArray(gdjs.GameCode.GDBottom_9595pipeObjects1_1final, gdjs.GameCode.GDBottom_9595pipeObjects1);
gdjs.copyArray(gdjs.GameCode.GDFlappy_9595birdObjects1_1final, gdjs.GameCode.GDFlappy_9595birdObjects1);
gdjs.copyArray(gdjs.GameCode.GDGroundObjects1_1final, gdjs.GameCode.GDGroundObjects1);
gdjs.copyArray(gdjs.GameCode.GDTop_9595pipeObjects1_1final, gdjs.GameCode.GDTop_9595pipeObjects1);
}
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9136380);
}
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "sfx_hit.wav", false, 100, 1);
}}

}


};gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects = Hashtable.newFrom({"Flash": gdjs.GameCode.GDFlashObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPanel_95959595scoreObjects2Objects = Hashtable.newFrom({"Panel_score": gdjs.GameCode.GDPanel_9595scoreObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDlabel_95959595game_95959595overObjects2Objects = Hashtable.newFrom({"label_game_over": gdjs.GameCode.GDlabel_9595game_9595overObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNew_95959595hscoreObjects2Objects = Hashtable.newFrom({"New_hscore": gdjs.GameCode.GDNew_9595hscoreObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMenu_95959595buttonObjects2Objects = Hashtable.newFrom({"Menu_button": gdjs.GameCode.GDMenu_9595buttonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDShare_95959595buttonObjects2Objects = Hashtable.newFrom({"Share_button": gdjs.GameCode.GDShare_9595buttonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestart_95959595buttonObjects2Objects = Hashtable.newFrom({"Restart_button": gdjs.GameCode.GDRestart_9595buttonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595bird_95959595hscoreObjects2Objects = Hashtable.newFrom({"Flappy_bird_hscore": gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595bird_95959595score_95959595twoObjects2Objects = Hashtable.newFrom({"Flappy_bird_score_two": gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMenu_95959595buttonObjects2Objects = Hashtable.newFrom({"Menu_button": gdjs.GameCode.GDMenu_9595buttonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDShare_95959595buttonObjects2Objects = Hashtable.newFrom({"Share_button": gdjs.GameCode.GDShare_9595buttonObjects2});
gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestart_95959595buttonObjects1Objects = Hashtable.newFrom({"Restart_button": gdjs.GameCode.GDRestart_9595buttonObjects1});
gdjs.GameCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9138884);
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDFlashObjects2.length = 0;

gdjs.GameCode.GDPanel_9595scoreObjects2.length = 0;

gdjs.GameCode.GDlabel_9595game_9595overObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlashObjects2Objects, 0, 0, "Gameover");
}{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].getBehavior("Flash").Flash(0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDPanel_95959595scoreObjects2Objects, 90, 220, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDlabel_95959595game_95959595overObjects2Objects, 130, 140, "Gameover");
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Panel_score"), gdjs.GameCode.GDPanel_9595scoreObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPanel_9595scoreObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPanel_9595scoreObjects2[i].getY() > 240 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPanel_9595scoreObjects2[k] = gdjs.GameCode.GDPanel_9595scoreObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPanel_9595scoreObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(3)) == 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9141212);
}
}
}
if (isConditionTrue_0) {
gdjs.GameCode.GDNew_9595hscoreObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDNew_95959595hscoreObjects2Objects, 230, 300, "Gameover");
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("New_hscore"), gdjs.GameCode.GDNew_9595hscoreObjects2);
{for(var i = 0, len = gdjs.GameCode.GDNew_9595hscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDNew_9595hscoreObjects2[i].setZOrder(1000);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Flash"), gdjs.GameCode.GDFlashObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDFlashObjects2.length;i<l;++i) {
    if ( !(gdjs.GameCode.GDFlashObjects2[i].getBehavior("Flash").IsFlashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDFlashObjects2[k] = gdjs.GameCode.GDFlashObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDFlashObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDFlashObjects2 */
{for(var i = 0, len = gdjs.GameCode.GDFlashObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlashObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Panel_score"), gdjs.GameCode.GDPanel_9595scoreObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.GameCode.GDPanel_9595scoreObjects2.length;i<l;++i) {
    if ( gdjs.GameCode.GDPanel_9595scoreObjects2[i].getY() > 240 ) {
        isConditionTrue_0 = true;
        gdjs.GameCode.GDPanel_9595scoreObjects2[k] = gdjs.GameCode.GDPanel_9595scoreObjects2[i];
        ++k;
    }
}
gdjs.GameCode.GDPanel_9595scoreObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9142980);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.GameCode.GDPanel_9595scoreObjects2 */
gdjs.copyArray(runtimeScene.getObjects("label_game_over"), gdjs.GameCode.GDlabel_9595game_9595overObjects2);
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2.length = 0;

gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2.length = 0;

gdjs.GameCode.GDMenu_9595buttonObjects2.length = 0;

gdjs.GameCode.GDRestart_9595buttonObjects2.length = 0;

gdjs.GameCode.GDShare_9595buttonObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMenu_95959595buttonObjects2Objects, 80, 400, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDShare_95959595buttonObjects2Objects, 250, 400, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestart_95959595buttonObjects2Objects, 165, 420, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595bird_95959595hscoreObjects2Objects, 255, 316, "Gameover");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDFlappy_95959595bird_95959595score_95959595twoObjects2Objects, 255, 271, "Gameover");
}{for(var i = 0, len = gdjs.GameCode.GDPanel_9595scoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDPanel_9595scoreObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDlabel_9595game_9595overObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDlabel_9595game_9595overObjects2[i].activateBehavior("SineMovement", false);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2[i].setZOrder(20);
}
}{for(var i = 0, len = gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2.length ;i < len;++i) {
    gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2[i].setZOrder(20);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu_button"), gdjs.GameCode.GDMenu_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDMenu_95959595buttonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Share_button"), gdjs.GameCode.GDShare_9595buttonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDShare_95959595buttonObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://www.youtube.com/channel/UCsZ4Ue8c94YLJDbGRafCI5Q", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Restart_button"), gdjs.GameCode.GDRestart_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.GameCode.mapOfGDgdjs_9546GameCode_9546GDRestart_95959595buttonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.GameCode.eventsList7 = function(runtimeScene) {

{


gdjs.GameCode.eventsList0(runtimeScene);
}


{


gdjs.GameCode.eventsList1(runtimeScene);
}


{


gdjs.GameCode.eventsList2(runtimeScene);
}


{


gdjs.GameCode.eventsList3(runtimeScene);
}


{


gdjs.GameCode.eventsList4(runtimeScene);
}


{


gdjs.GameCode.eventsList5(runtimeScene);
}


{


gdjs.GameCode.eventsList6(runtimeScene);
}


};

gdjs.GameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.GameCode.GDFlappy_9595birdObjects1.length = 0;
gdjs.GameCode.GDFlappy_9595birdObjects2.length = 0;
gdjs.GameCode.GDFlappy_9595birdObjects3.length = 0;
gdjs.GameCode.GDFlappy_9595birdObjects4.length = 0;
gdjs.GameCode.GDTop_9595pipeObjects1.length = 0;
gdjs.GameCode.GDTop_9595pipeObjects2.length = 0;
gdjs.GameCode.GDTop_9595pipeObjects3.length = 0;
gdjs.GameCode.GDTop_9595pipeObjects4.length = 0;
gdjs.GameCode.GDBottom_9595pipeObjects1.length = 0;
gdjs.GameCode.GDBottom_9595pipeObjects2.length = 0;
gdjs.GameCode.GDBottom_9595pipeObjects3.length = 0;
gdjs.GameCode.GDBottom_9595pipeObjects4.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects1.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects2.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects3.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595score_9595twoObjects4.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects1.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects2.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects3.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595scoreObjects4.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects1.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects2.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects3.length = 0;
gdjs.GameCode.GDFlappy_9595bird_9595hscoreObjects4.length = 0;
gdjs.GameCode.GDMenu_9595buttonObjects1.length = 0;
gdjs.GameCode.GDMenu_9595buttonObjects2.length = 0;
gdjs.GameCode.GDMenu_9595buttonObjects3.length = 0;
gdjs.GameCode.GDMenu_9595buttonObjects4.length = 0;
gdjs.GameCode.GDShare_9595buttonObjects1.length = 0;
gdjs.GameCode.GDShare_9595buttonObjects2.length = 0;
gdjs.GameCode.GDShare_9595buttonObjects3.length = 0;
gdjs.GameCode.GDShare_9595buttonObjects4.length = 0;
gdjs.GameCode.GDRestart_9595buttonObjects1.length = 0;
gdjs.GameCode.GDRestart_9595buttonObjects2.length = 0;
gdjs.GameCode.GDRestart_9595buttonObjects3.length = 0;
gdjs.GameCode.GDRestart_9595buttonObjects4.length = 0;
gdjs.GameCode.GDPanel_9595scoreObjects1.length = 0;
gdjs.GameCode.GDPanel_9595scoreObjects2.length = 0;
gdjs.GameCode.GDPanel_9595scoreObjects3.length = 0;
gdjs.GameCode.GDPanel_9595scoreObjects4.length = 0;
gdjs.GameCode.GDBorderObjects1.length = 0;
gdjs.GameCode.GDBorderObjects2.length = 0;
gdjs.GameCode.GDBorderObjects3.length = 0;
gdjs.GameCode.GDBorderObjects4.length = 0;
gdjs.GameCode.GDFlashObjects1.length = 0;
gdjs.GameCode.GDFlashObjects2.length = 0;
gdjs.GameCode.GDFlashObjects3.length = 0;
gdjs.GameCode.GDFlashObjects4.length = 0;
gdjs.GameCode.GDlabel_9595game_9595overObjects1.length = 0;
gdjs.GameCode.GDlabel_9595game_9595overObjects2.length = 0;
gdjs.GameCode.GDlabel_9595game_9595overObjects3.length = 0;
gdjs.GameCode.GDlabel_9595game_9595overObjects4.length = 0;
gdjs.GameCode.GDInstructionsObjects1.length = 0;
gdjs.GameCode.GDInstructionsObjects2.length = 0;
gdjs.GameCode.GDInstructionsObjects3.length = 0;
gdjs.GameCode.GDInstructionsObjects4.length = 0;
gdjs.GameCode.GDBackground_9595dayObjects1.length = 0;
gdjs.GameCode.GDBackground_9595dayObjects2.length = 0;
gdjs.GameCode.GDBackground_9595dayObjects3.length = 0;
gdjs.GameCode.GDBackground_9595dayObjects4.length = 0;
gdjs.GameCode.GDGroundObjects1.length = 0;
gdjs.GameCode.GDGroundObjects2.length = 0;
gdjs.GameCode.GDGroundObjects3.length = 0;
gdjs.GameCode.GDGroundObjects4.length = 0;
gdjs.GameCode.GDNew_9595hscoreObjects1.length = 0;
gdjs.GameCode.GDNew_9595hscoreObjects2.length = 0;
gdjs.GameCode.GDNew_9595hscoreObjects3.length = 0;
gdjs.GameCode.GDNew_9595hscoreObjects4.length = 0;

gdjs.GameCode.eventsList7(runtimeScene);

return;

}

gdjs['GameCode'] = gdjs.GameCode;
