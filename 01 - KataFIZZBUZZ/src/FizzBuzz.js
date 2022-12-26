module.exports = fizzBuzz



function fizzBuzz(x) {

    let resto = ""

    resto = x % 3;

    if (resto == 0){

        resto = x % 5

        if (resto == 0){

            return 'FIZZBUZZ'

        }else return 'FIZZ' 
        
    } 
    else {

        resto = x % 5

        if (resto == 0){

            return 'BUZZ'

        }return x
    }
}

let count = []

for (var i = 1; i <= 100; i++) {
    count.push(fizzBuzz(i));
}


function fizzBuzz (number){
    let resultado =""

    if ((number % 3) == 0){
        resultado = 'FIZZ'
    }
    if ((number % 5) == 0){
        resultado = resultado + 'BUZZ'
    }
    if (((number % 3) != 0) && ((x % 5) != 0)){
        resultado = x
    }
    return resultado
}








   let count = []

    for (var i = 1; i <= 100; i++) {
        console.info(i)
        let resultado =""

        if ((i % 3) == 0){
            resultado = 'FIZZ'
            console.info(i)
        }
        if ((i % 5) == 0){
            resultado = resultado + 'BUZZ'
        }
        if (((i % 3) != 0) && ((i % 5) != 0)){
            resultado = i
        }

        count.push(resultado)



    console.info(count)
}

