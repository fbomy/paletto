'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var e = new Engine();
PalettoTestCase.prototype.testStory1 = function () {
    var plateau=e.init();
    assertTrue(plateau[0][0]=="Black" && plateau[2][4]=="Black" && plateau[3][1]=="Black" && plateau[4][3]=="Black" && plateau[5][2]=="Black" && plateau[5][5]=="Black");
    assertTrue(plateau[0][1]=="Green" && plateau[1][2]=="Green" && plateau[3][3]=="Green" && plateau[4][1]=="Green" && plateau[4][5]=="Green" && plateau[5][4]=="Green");
    assertTrue(plateau[0][2]=="White" && plateau[0][5]=="White" && plateau[1][1]=="White" && plateau[2][3]=="White" && plateau[3][5]=="White" && plateau[4][0]=="White");
    assertTrue(plateau[0][3]=="Blue" && plateau[1][5]=="Blue" && plateau[2][0]=="Blue" && plateau[2][2]=="Blue" && plateau[3][4]=="Blue" && plateau[5][1]=="Blue");
    assertTrue(plateau[0][4]=="Red" && plateau[1][3]=="Red" && plateau[2][5]=="Red" && plateau[3][0]=="Red" && plateau[3][2]=="Red" && plateau[5][3]=="Red");
    assertTrue(plateau[1][0]=="Yellow" && plateau[1][4]=="Yellow" && plateau[2][1]=="Yellow" && plateau[4][2]=="Yellow" && plateau[4][4]=="Yellow" && plateau[5][0]=="Yellow");
};

PalettoTestCase.prototype.testStory2 = function () {
    assertTrue(e.choixCouleur("Yellow"));
};