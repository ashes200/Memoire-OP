
let game = new Memoire();

function gameplay(id){
    game.jouer(id);
}

function again() {
    game.rejouer();
}

function auDessus(id) {
    if(game.verif == false){
        document.getElementById(id).childNodes[0].src='image/sunny.png';
        document.getElementById(id).style.backgroundImage="url(image/sky_02.jpg)";
    }
}
function enDehord(id) {
    if(game.verif == false){
        document.getElementById(id).childNodes[0].src='image/merry.png';
        document.getElementById(id).style.backgroundImage="url(image/sky_01.png)";
    }
}

function btnHover(id) {
    document.getElementById(id).src='image/boutton_blanc.png';
}
function btnNonHover(id) {
    document.getElementById(id).src='image/boutton_noir.png';
}

// fontions sur la musique
function choixMusique(id) {
    let selectElement = document.querySelector('#musiq');
    let output = selectElement.options[selectElement.selectedIndex].value;
    let nb = parseInt(output);
   document.getElementById("ost").pause();
    switch (nb) {
        case 1:
            document.getElementById("srcOst").setAttribute('src','musique/Sadness And Sorrow.mp3');
            document.getElementById("ost").load();
            document.getElementById("ost").play();
            break;
        case 2:
            document.getElementById("srcOst").setAttribute('src','musique/Spin and Burst.mp3');
            document.getElementById("ost").load();
            document.getElementById("ost").play();
            break;
        case 3:
            document.getElementById("srcOst").setAttribute('src',"musique/Strong and Strike.mp3");
            document.getElementById(id).load();
            document.getElementById(id).play();
            break;
        case 4:
            document.getElementById("srcOst").setAttribute('src',"musique/The Very Very Very Strongest.mp3");
            document.getElementById("ost").load();
            document.getElementById("ost").play();
            break;
        case 5:
            document.getElementById("srcOst").setAttribute('src',"musique/Luffy Fierce Attack.mp3");
            document.getElementById(id).load();
            document.getElementById(id).play();
            break;
        case 6:
            document.getElementById("srcOst").setAttribute('src',"musique/Overtaken.mp3");
            document.getElementById(id).load();
            document.getElementById(id).play();
            break;
        case 7:
            document.getElementById("srcOst").setAttribute('src',"musique/We_are.mp3");
            document.getElementById(id).load();
            document.getElementById(id).play();
            break;
        case 8:
            document.getElementById("srcOst").setAttribute('src',"musique/To Give a Marionette Life.mp3");
            document.getElementById(id).load();
            document.getElementById(id).play();
            break;
        default:
            document.getElementById("srcOst").setAttribute('src',"musique/Next to you.mp3");
            document.getElementById(id).load();
            document.getElementById(id).play();
            break;
    }
}
    // fontions sur l'image de fond
function choixFond() {
    let selectElement = document.querySelector('#fond');
    let output = selectElement.options[selectElement.selectedIndex].value;
    if(output == "fond_01"){
        document.getElementById("body").style.backgroundImage="url(image/img_fond_01.jpg)";
    }
    else if(output == "fond_02"){
        document.getElementById("body").style.backgroundImage="url(image/img_fond_02.png)";
    }
    else{
        document.getElementById("body").style.backgroundImage="url(image/img_fond_03.jpg)";
    }
}
