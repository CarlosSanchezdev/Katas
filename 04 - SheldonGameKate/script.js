module.exports = gameDie;


function gameDie(tiradaDelPlayer1, tiradaDelPlayer2) {
    
    if (tiradaDelPlayer1 == 'lagarto' && tiradaDelPlayer2 == 'roca'|| 'spock' || 'papel'){
        return 'Gana ' + tiradaDelPlayer1
    }else if(tiradaDelPlayer2 == 'tijeras'){
            return 'Gana ' + tiradaDelPlayer2
        }
    

    if (tiradaDelPlayer1 == 'tijeras' && tiradaDelPlayer2 == 'papel' || 'lagarto' || 'roca') {
        return 'Gana ' + tiradaDelPlayer1
    }

    if (tiradaDelPlayer1 == 'papel' && tiradaDelPlayer2 == 'roca' || 'spock') {
        return 'Gana ' + tiradaDelPlayer1
    }

    if (tiradaDelPlayer1 == 'spock' && tiradaDelPlayer2 == 'tijera' || 'roca') {
        return 'Gana ' + tiradaDelPlayer1
    }

}