gdjs.MenuCode = {};
gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects1= [];
gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects2= [];
gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects3= [];
gdjs.MenuCode.GDFlappy_9595birdObjects1= [];
gdjs.MenuCode.GDFlappy_9595birdObjects2= [];
gdjs.MenuCode.GDFlappy_9595birdObjects3= [];
gdjs.MenuCode.GDStartObjects1= [];
gdjs.MenuCode.GDStartObjects2= [];
gdjs.MenuCode.GDStartObjects3= [];
gdjs.MenuCode.GDRect_9595blackObjects1= [];
gdjs.MenuCode.GDRect_9595blackObjects2= [];
gdjs.MenuCode.GDRect_9595blackObjects3= [];
gdjs.MenuCode.GDGroundObjects1= [];
gdjs.MenuCode.GDGroundObjects2= [];
gdjs.MenuCode.GDGroundObjects3= [];
gdjs.MenuCode.GDBackground_9595dayObjects1= [];
gdjs.MenuCode.GDBackground_9595dayObjects2= [];
gdjs.MenuCode.GDBackground_9595dayObjects3= [];


gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDStartObjects2Objects = Hashtable.newFrom({"Start": gdjs.MenuCode.GDStartObjects2});
gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDRect_95959595blackObjects2Objects = Hashtable.newFrom({"Rect_black": gdjs.MenuCode.GDRect_9595blackObjects2});
gdjs.MenuCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_9595blackObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDRect_9595blackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRect_9595blackObjects2[i].setOpacity(255);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Start"), gdjs.MenuCode.GDStartObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDStartObjects2Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Flappy_bird"), gdjs.MenuCode.GDFlappy_9595birdObjects2);
gdjs.copyArray(runtimeScene.getObjects("Label_flappy_bird"), gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects2);
/* Reuse gdjs.MenuCode.GDStartObjects2 */
gdjs.MenuCode.GDRect_9595blackObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.MenuCode.mapOfGDgdjs_9546MenuCode_9546GDRect_95959595blackObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.MenuCode.GDRect_9595blackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRect_9595blackObjects2[i].setZOrder(20);
}
}{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "sfx_swooshing.wav", 1, false, 100, 1);
}{for(var i = 0, len = gdjs.MenuCode.GDFlappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDFlappy_9595birdObjects2[i].hide();
}
for(var i = 0, len = gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects2[i].hide();
}
for(var i = 0, len = gdjs.MenuCode.GDStartObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDStartObjects2[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(0)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_9595blackObjects2);
{for(var i = 0, len = gdjs.MenuCode.GDRect_9595blackObjects2.length ;i < len;++i) {
    gdjs.MenuCode.GDRect_9595blackObjects2[i].setOpacity(gdjs.MenuCode.GDRect_9595blackObjects2[i].getOpacity() - (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 150));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rect_black"), gdjs.MenuCode.GDRect_9595blackObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.MenuCode.GDRect_9595blackObjects1.length;i<l;++i) {
    if ( gdjs.MenuCode.GDRect_9595blackObjects1[i].getOpacity() <= 150 ) {
        isConditionTrue_0 = true;
        gdjs.MenuCode.GDRect_9595blackObjects1[k] = gdjs.MenuCode.GDRect_9595blackObjects1[i];
        ++k;
    }
}
gdjs.MenuCode.GDRect_9595blackObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


};gdjs.MenuCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.MenuCode.GDGroundObjects1);
{for(var i = 0, len = gdjs.MenuCode.GDGroundObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDGroundObjects1[i].setXOffset(gdjs.MenuCode.GDGroundObjects1[i].getXOffset() + (100 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


};gdjs.MenuCode.eventsList2 = function(runtimeScene) {

{


gdjs.MenuCode.eventsList0(runtimeScene);
}


{


gdjs.MenuCode.eventsList1(runtimeScene);
}


};

gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects1.length = 0;
gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects2.length = 0;
gdjs.MenuCode.GDLabel_9595flappy_9595birdObjects3.length = 0;
gdjs.MenuCode.GDFlappy_9595birdObjects1.length = 0;
gdjs.MenuCode.GDFlappy_9595birdObjects2.length = 0;
gdjs.MenuCode.GDFlappy_9595birdObjects3.length = 0;
gdjs.MenuCode.GDStartObjects1.length = 0;
gdjs.MenuCode.GDStartObjects2.length = 0;
gdjs.MenuCode.GDStartObjects3.length = 0;
gdjs.MenuCode.GDRect_9595blackObjects1.length = 0;
gdjs.MenuCode.GDRect_9595blackObjects2.length = 0;
gdjs.MenuCode.GDRect_9595blackObjects3.length = 0;
gdjs.MenuCode.GDGroundObjects1.length = 0;
gdjs.MenuCode.GDGroundObjects2.length = 0;
gdjs.MenuCode.GDGroundObjects3.length = 0;
gdjs.MenuCode.GDBackground_9595dayObjects1.length = 0;
gdjs.MenuCode.GDBackground_9595dayObjects2.length = 0;
gdjs.MenuCode.GDBackground_9595dayObjects3.length = 0;

gdjs.MenuCode.eventsList2(runtimeScene);

return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
