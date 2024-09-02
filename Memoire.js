class Memoire{
    cartes = ["image/jeux_1.png", "image/jeux_1.png", 
    "image/jeux_7.png", "image/jeux_7.png", "image/jeux_3.png", "image/jeux_3.png", 
    "image/jeux_4.png", "image/jeux_4.png", "image/jeux_5.png", "image/jeux_5.png", 
    "image/jeux_6.png", "image/jeux_6.png"];
    trouve = [];
    carte_01;
    carte_02;
    premiereCarte;
    nbCoups = 0;
    verif = false;
    constructor(){
        this.brasser();
  
    }
    brasser(){
        for (let index = 0; index < 100; index++) {
            let j = Math.floor(Math.random() * 11);
            let temp = this.cartes[0];
            this.cartes[0] = this.cartes[j];
            this.cartes[j] = temp;
        }
    }        

    jouer(carte){
        if (this.premiereCarte != true) {
            window.action = null;
            document.getElementById(carte).style.backgroundImage="none";
            document.getElementById(carte).style.backgroundColor="white";
            document.getElementById(carte).childNodes[0].src=this.cartes[carte];
            document.getElementById(carte).childNodes[0].style.height="18.6vh";
            this.carte_01 = carte;
            this.verif = true;
            this.premiereCarte = true;
            this.nbCoups++;
            document.getElementById('nb').value=this.nbCoups;
        }
        else{
            document.getElementById(carte).style.backgroundImage="none";
            document.getElementById(carte).style.backgroundColor="white";
            document.getElementById(carte).childNodes[0].src=this.cartes[carte];
            document.getElementById(carte).childNodes[0].style.height="18.6vh";
            this.carte_02 = carte;
            if (this.carte_01 != this.carte_02) {  
                this.premiereCarte = false;
                this.verif = true;
                this.verifierChoix();
                this.nbCoups++;
                document.getElementById('nb').value=this.nbCoups;
            }
        }
    }

    verifierChoix(){
        if (this.cartes[this.carte_01] == this.cartes[this.carte_02]) {
            setTimeout(this.nice, 300, this.carte_01);
            setTimeout(this.nice, 300, this.carte_02);
            this.trouve.push(true);
            this.verif = false;
            this.carte_01 = null;
            this.carte_02 = null;
            this.aGagner();
        }
        else{
            setTimeout(this.bad, 300, this.carte_01);
            setTimeout(this.bad, 300, this.carte_02);
            this.verif = false;
            this.carte_01 = null;
            this.carte_02 = null;
        }
    }

    nice(truc){
        document.getElementById(truc).style.visibility="hidden";
        document.getElementById(truc).style.backgroundColor=" transparent";
    }
    bad(truc){
        document.getElementById(truc).style.visibility="initial";
        document.getElementById(truc).style.backgroundColor=" transparent";
        document.getElementById(truc).style.backgroundImage="url(image/sky_01.png)";
        document.getElementById(truc).childNodes[0].src="image/merry.png";
    }

    aGagner(){
        if (this.trouve.length == 6) {
            document.getElementById('tableau').style.display="none";  
            document.getElementById('victory').style.display="block";
        }
    }
    rejouer(){
        document.getElementById('tableau').style.display="block";  
        document.getElementById('victory').style.display="none";
        this.nbCoups = 0;
        this.trouve.length = 0;
        this.brasser();
        document.getElementById('nb').value=this.nbCoups;
        for(let i = 0; i < 12; i++){
            let strClef = i.toString();
            this.bad(strClef);
        }
        this.verif = false;
    }
}