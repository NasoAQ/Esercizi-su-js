/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let crazySum = function(numero1, numero2){ /* {
    if (numero1 === numero2) {
        return (numero1 + numero2) * 3
    } else {
        return (numero1 + numero2)
    }
} */
return numero1 === numero2 ? (numero1 + numero2) * 3 : (numero1 + numero2)
}

console.log(crazySum(3, 3));




/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let boundary = function(num) {
    if ((num === 400 ) || (num > 20 && num <100)) {   
    } return true
}



console.log(boundary(70));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let reverseString = function (stringa) {
    //utilizzo il metodo split per dividere le lettere della stringa in un array
    let splitString = stringa.split("");
    //utilizzo il metodo reverse per invertire l'array
    let reverseArray = splitString.reverse();
    //utilizzo il metodo join per unire tutte le lettere in un unico array
    let joinArray = reverseArray.join("")
    return joinArray
}
console.log(reverseString("EPICODE"));

/* const reverseString = function (stringa) {
  let newArray = [];
  let strArray = stringa.split("")
  for(let i = strArray.lenght -1; i >= 0; i--){
    newArray.push(strArray[i])  
  }
  return newArray.join("")
}

console.log(reverseString()); */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


  const upperFirstPhrase = function (stringa) {
    //utilizzo il metodo split avere un unico array di parole
    let parole = stringa.split(" ");
    //dichiaro un array vuoto per inserire le parole create
    let fraseFinale = [];
    //utilizzo un ciclo "for" per iterare in ogni parola del primo array
  
    for (let i = 0; i < parole.length; i++) {
        //utilizzo il metodo charAt per estrarre il primo carattere di ogni parola
      let primaLettera = parole[i].charAt(0);
      //con il metodo toUpperCase rendo maiuscola la lettera presa in considerazione
      let letteraMaiuscola = primaLettera.toUpperCase();
      //con il metodo slice(1) prendiamo il resto della parola dopo la lettera iniziale
      let restoParola = parole[i].slice(1);
      //unisco le due variabili per creare una parola sola
      let parolaFinale = letteraMaiuscola + restoParola;
      //le inserisco nel secondo array creato inizialmente
      fraseFinale.push(parolaFinale);
    }
    //terminato il ciclo trasformo l'array in una stringa
    return fraseFinale.join(" ");
  };
  
  console.log(upperFirstPhrase("ciao mi chiamo gabriele ed ho 36 anni"));


  /* const upperFirst = function(stringa){
    return stringa[0].toUpperCase(1) + stringa.slice(1)
  }

  const upperAllFirst = function(stringa){
    let parole = stringa.split(" ")
    for ( let i=0; i < parole.lenght; i++) {
      parole[i] = upperFirst(parole[i])
    }
    return parole.join(" ")
  }
  let res = upperAllFirst("ciao a tutti sono gabriele")
  console.log(res); */


/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function giveMeRandom(n) {
    //creo un array per inserire i numeri
    const numeriRandom = [];
    //utilizzo un ciclo "for" per iterare n volte
    for (let i = 0; i < n; i++) {
        //utilizzo i metodi math.floor e math random per un numero intero tra 0 e 10
      const numeroSingolo = Math.floor(Math.random() * 11);
        //utilizzo il metodo .push per aggiungere il numero in un array
      numeriRandom.push(numeroSingolo);
    }
    //terminato il ciclo di n volte restituisco l'array con i numeri generati
    return numeriRandom;
  }

  console.log(giveMeRandom(3));
//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function area(l1, l2) {
  return l1 * l2;
}
console.log(area(5, 3));

//return `Il rettangolo di base${l1} e ${l2} ha l'area di ${area(20,18)}`

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function(num){
  return Math.abs(num - 19) > 19 ? Math.abs(num-19) * 3 : Math.abs(num - 19)
}

console.log(crazyDiff(7));

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//a.startsWith ritorna un booleano
const codify = function(stringa){
  if ( stringa.startsWith('code')){
    return stringa
  }
    return `code ${stringa}`
}

console.log(codify("ciao a tutti"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const  check3and7 = function(num){
  if (num % 3 === 0 || num % 7 === 0){
    return true
  }
  else{
    return false
  }
}


console.log(check3and7(3));
console.log(check3and7(35));
console.log(check3and7(10));

/* return num % 3 === 0 || num % 7 === 0 ? true : false */
/* ESERCIZIO 5
 Scrivi una funzione chiamata "restoParola", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const restoParola = function(stringa){
  return stringa.slice(1, -1)
}

console.log(restoParola('epicode'));
