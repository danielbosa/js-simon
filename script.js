/*
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//funzione che genera un numero casuale e, se questo numero non è contenuto già nell'array X, lo pusha nell'array X;
//finché la lunghezza dell'array non è === 5;

function numGen(){
    let numArray = [];
    while(numArray.length < 5){
        let num = RndNumberGen(1, 100);
        if (!numArray.includes(num)){
            numArray.push(num);
        }
    }
    return numArray;
};

//al click su un bottone, per ogni elemento dell'array creo un elemento html e ci infilo l'elemento i dell'array; finiti gli elementi dell'array, infilo tutto nel contenitore e appendo il contenitore nell'html

function displayNum(array){
    let numSection;
    let displaySection = document.getElementById('display-number');
    
    for(let i = 0; i < array.length; i++){
    let numSlot = document.createElement('span');
    numSlot.textContent = array[i];
    console.log(numSlot, typeof numSlot);
    numSection.append(numSlot);
    }
    
    displaySection.append(numSection);
};

displayNum(numGen());