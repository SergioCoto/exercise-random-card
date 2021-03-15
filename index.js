function myFunction() {
    let palo = Math.floor(Math.random() * 4);


   // let carta;
    switch (palo) {
        case 0:
            document.getElementById("figura").src ='https://images.emojiterra.com/mozilla/512px/2665.png';
            document.getElementById("figura1").src ='https://images.emojiterra.com/mozilla/512px/2665.png';
            break;
        case 1:
            document.getElementById("figura").src ='https://images.emojiterra.com/google/android-nougat/512px/2663.png';
            document.getElementById("figura1").src ='https://images.emojiterra.com/google/android-nougat/512px/2663.png';
            break;
        case 2:
            document.getElementById("figura").src ='https://www.magosartesanos.com/contents/media/l_diamante.png';
            document.getElementById("figura1").src ='https://www.magosartesanos.com/contents/media/l_diamante.png';
            break;
        case 3:
            document.getElementById("figura").src ='https://w7.pngwing.com/pngs/747/267/png-transparent-playing-card-suit-espadas-ace-of-spades-card-symbols-monochrome-computer-wallpaper-gambling.png';
            document.getElementById("figura1").src ='https://w7.pngwing.com/pngs/747/267/png-transparent-playing-card-suit-espadas-ace-of-spades-card-symbols-monochrome-computer-wallpaper-gambling.png';
            break;

    }

    const number2 = Math.floor(Math.random() * 13);
    let numero;
    switch (number2) {
        case 0:
            numero = "A";
            break;
        case 1:
            numero = "2";
            break;
        case 2:
            numero = "3";
            break;
        case 3:
            numero = "4";
            break;
        case 4:
            numero = "5";
            break;
        case 5:
            numero = "6";
            break;
        case 6:
            numero = "7";
            break;
        case 7:
            numero = "8";
            break;
        case 8:
            numero = "9";
            break;
        case 9:
            numero = "10";
            break;
        case 10:
            numero = "J";
            break;
        case 11:
            numero = "Q";
            break;
        case 12:
            numero = "K";
            break;
    }

    document.getElementById("number1").innerHTML = numero;
    

}

function myFunction2() {
    setInterval(function(){ myFunction(); }, 10000);
}