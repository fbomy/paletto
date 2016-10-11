'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");
var e = new Engine();
PalettoTestCase.prototype.testStory1 = function () {
    assertTrue(plat[0][0]=="Black" && plat[2][4]=="Black" && plat[3][1]=="Black" && plat[4][3]=="Black" && plat[5][2]=="Black" && plat[5][5]=="Black");
    assertTrue(plat[0][1]=="Green" && plat[1][2]=="Green" && plat[3][3]=="Green" && plat[4][1]=="Green" && plat[4][5]=="Green" && plat[5][4]=="Green");
    assertTrue(plat[0][2]=="White" && plat[0][5]=="White" && plat[1][1]=="White" && plat[2][3]=="White" && plat[3][5]=="White" && plat[4][0]=="White");
    assertTrue(plat[0][3]=="Blue" && plat[1][5]=="Blue" && plat[0][2]=="Blue" && plat[2][2]=="Blue" && plat[3][4]=="Blue" && plat[5][1]=="Blue");
    assertTrue(plat[0][4]=="Red" && plat[1][3]=="Red" && plat[2][5]=="Red" && plat[3][0]=="Red" && plat[3][2]=="Red" && plat[5][3]=="Red");
    assertTrue(plat[1][0]=="Yellow" && plat[1][4]=="Yellow" && plat[2][1]=="Yellow" && plat[4][2]=="Yellow" && plat[4][4]=="Yellow" && plat[0][5]=="Yellow");


};

