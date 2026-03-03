/*Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.*/

// 1.Inizio a scrivere un programma che stampa i numeri da 1 a 100
for (let i = 1; i <= 100; i++){
    
    // - Con i numeri sia multipli di 3 che di 5 stampo “FizzBuzz” al posto del numero
    if (i % 3 == 0 && i % 5){
        console.log("FizzBuzz");
        
    }
    // - Con i numeri multipli di 3 stampo “Fizz” al posto del numero
    else if (i % 3 == 0) {
        console.log("Fizz");   
    }
    // - Con i numeri multipli di 5 stampo “Fizz” al posto del numero
    else if (i % 5 == 0) {
        console.log("Buzz");
        
    }
    // - Resto dei numeri
    else{
        console.log(i);
        
    }
    
}