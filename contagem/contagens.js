  
let contadorAlunos = 10;

/**
 * REPETIÇÃO: DO/WHILE
*/
do {
    if (index === 0) {
        console.log('O index é ZERO');
    } else if (index % 2 != 0){
        console.log('O número é ÍMPAR: ' + index);
    } else
    console.log('O número é PAR: ' + index);
    index++;
} while (index <= contadorAlunos);


/**
 *  REPETIÇÃO: WHILE
 */
while (index <= contadorAlunos) {
    if (index === 0) {
        console.log('O index é ZERO');
    } else if (index % 2 != 0){
        console.log('O número é ÍMPAR: ' + index);
    } else
    console.log('O número é PAR: ' + index);
    index++;
}

/**
 * REPETIÇÃO: FOR
 */
for (let index = 0; index <= contadorAlunos; contador++) {   
    if (index === 0){
        console.log('O index é ZERO');
    }
    else if (index % 2 == 0 ) {
       console.log('O número é PAR: ' + index); 
    }
    else{
        console.log('O número é ÍMPAR: ' + index);
    }  
}