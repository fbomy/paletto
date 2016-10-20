'use strict';

var Engine = function () {

    var plateau;
    //Black, Blue ,Green, Red, White, Yellow
    var couleur=["Black", "Blue" ,"Green", "Red", "White", "Yellow"];
    var j1=new Array(6), j2=new Array(6);
    var joueur_actuel=1;
    var indice=[0,1,2,3,4,5];

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

    this.init2 = function(){
        this.plateau = [
            ["0", "0", "0", "Blue", "Red", "White"],
            ["0", "0", "0", "Red", "Yellow", "0"],
            ["0", "0", "Blue", "White", "Black", "0"],
            ["Red", "Black", "Red", "0", "0", "0"],
            ["0", "Green", "Yellow", "0", "0", "0"],
            ["0", "0", "Black", "0", "0", "0"]
        ];
        return this.plateau;
    }


    this.initJ=function(){

        for(var i=0; i<6; i++){
            j1[i]=0;
            j2[i]=0;
        }
    }

    this.getJoueurActuel=function(){
        return joueur_actuel;
    }

    this.joueurSuivant=function(){
        if(joueur_actuel==1){
            joueur_actuel=2;
        }
        else if(joueur_actuel==2){
            joueur_actuel=1;
        }
    }

    var indiceCouleur= function(coul){
        for(var i=0; i<6; i++){
            if(couleur[i]==coul){
                console.log(i);
                return i;
            }
        }
    }

    this.ajoutPiece = function(joueuractuel,coul,nombre){
        var compteur=indiceCouleur(coul);
        if(joueuractuel==1){
            j1[compteur]+=nombre;
        }
        if(joueuractuel==2){
            j2[compteur]+=nombre;
        }
    }

    this.comptVoisin=function(tableau){
        var compteur=0;
        for(var i=0;i<4;i++){
            if(tableau[i]!=0){
                compteur++;
            }
        }
        return compteur;
    }

    this.getVoisin=function(position){
        var i= position.charAt(0);
        var j= position.charAt(1);
        var voisin=new Array(4);

        for(var a=0;a<4;a++){
            voisin[a]=0;
        }
        if(i!=0){
            i--;
            if(this.plateau[i][j]!=0){
                voisin[0]=String(i)+String(j);
            }
            i++;
        }
        if(j!=0){
            j--;
            if(this.plateau[i][j]!=0){
                voisin[1]=String(i)+String(j);
            }
            j++;
        }
        if(i!=5){
            i++;
            if(this.plateau[i][j]!=0){
                voisin[2]=String(i)+String(j);
            }
            i--;
        }
        if(j!=5){
            j++;
            if(this.plateau[i][j]!=0){
                voisin[3]=String(i)+String(j);
            }
            j--;
        }
        console.log(voisin);
        return voisin;
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
        return false;
        
    };

    this.nbPieces= function(){
        var count=0;

        for(var i=0; i<6; i++) {
            for (var j=0; j<6; j++) {
                if(this.plateau[i][j]!="0"){
                    count+=1;
                }
            }
        }
        return count;
    };

    this.pieceJ=function(joueuractuel,indice){
        if(joueuractuel==1){
            return j1[indice];
        }
        else if(joueuractuel==2){
            return j2[indice];
        }
    }

    this.voisinCommun=function(position,voisin){
        var a; var b; var bx; var by;
        for(var i=0; i<4; i++){
            if(i==0){
                var a= voisin[i+1];
                var b= voisin[3];
            }
            else if(i==3){
                var a= voisin[0];
                var b= voisin[i-1];
            }
            else{
                var a= voisin[i+1];
                var b= voisin[i-1];
            }
            if(a!="0" && b!="0" ){
                bx=a.charAt(0);
                by=b.charAt(1);
                console.log(bx);
                if(bx>c){
                    bx--;
                }
                if(bx<c){
                    bx++;
                }
                if(by>l){
                    by--;
                }
                if(by<l){
                    by++;
                }

                if(this.plateau[bx][by]!="0"){
                    return true;
                }
            }

        }
        return false;

    }

};