'use strict';

var Engine = function () {

var plateau;

    this.init = function(){
        this.plateau = [
            ["Black", "Green", "White", "Blue", "Red", "White"],
            ["Yellow", "White", "Green", "Red", "Yellow", "Blue"],
            ["Blue", "Yellow", "Blue", "White", "Black", "Red"],
            ["Red", "Black", "Red", "Green", "Blue", "White"],
            ["White", "Green", "Yellow", "Black", "Yellow", "Green"],
            ["Yellow", "Blue", "Black", "Red", "Green", "Black"]
        ];
        return this.plateau;
    }
    
    

};