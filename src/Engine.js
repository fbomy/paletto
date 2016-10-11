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


    this.choixCouleur= function( couleur ){

        if(this.plateau[0][0]==couleur){
            return true;
        }
        if(this.plateau[0][5]==couleur){
            return true;
        }
        if(this.plateau[5][0]==couleur){
            return true;
        }
        if(this.plateau[5][5]==couleur){
            return true;
        }
        return False;
    };


};