/*Per iniziare scrivi un programma che stampi in console i numeri da 1 a 100,
Successivamente aggiungi un controllo sul numero in modo tale che:
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
in tutti gli altri casi venga stampato il numero stesso7*/



//inizializzazione della costante n
const n = 101

//inizio del ciclo for (inizializzazione della variabile i con valore 1, fino a quando i è minore di n allora incrementa ad ogni ciclo i + 1 )
for (let i = 1; i < n; i++) {

    //Se il resto di (i) diviso 3 e (i) diviso 5 sono entrambi uguali a zero, allora sono multipli di 3 e di 5 quindi stampa "FizzBuzz"

    if (i % 3 == 0 && i % 5 == 0) {

        console.log("FizzBuzz")
    }

    //se il resto di (i) diviso 3 è uguale a zero allora stampa "Fizz"
    else if (i % 3 == 0) {

        console.log("Fizz")

    }

    //se il resto di (i) diviso 5 è uguale a zero allora stampa "Buzz"

    else if (i % 5 == 0) {

        console.log("Buzz")

    }

    //se tutte le condizioni precedenti non sono verificate, allora stampa (i)
    else {

        console.log(i)
    }




}