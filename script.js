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
    console.log(numArray);
    return numArray;
};

//al click su un bottone, per ogni elemento dell'array scrivo codice html e ci infilo l'elemento i dell'array; finiti gli elementi dell'array, infilo tutto nel contenitore e appendo il contenitore nell'html

const btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', function(){
    displayNum(numGen());
});

function displayNum(array){
    let displaySection = document.getElementById('display-number');
    displaySection.innerHTML = '';
    let tempHtml = document.createElement('div');

    for(let i = 0; i < array.length; i++){
    tempHtml.innerHTML += `
        <span>
        ${array[i]}
        </span>
        `;
    };
    displaySection.append(tempHtml);
};


/*ALTRO MODO PER CREARE GLI SPAN CON I NUMERI
function displayNum2(array){
    let displaySection = document.getElementById('display-number');
    displaySection.innerHTML = '';
    let tempHtml = document.createElement('div');
    tempHtml.classList.add('d-flex','justify-content-around');

    for(let i = 0; i < array.length; i++){
        let numSpan = document.createElement('span')
        numSpan.innerHTML = array[i];
        tempHtml.append(numSpan);
    };
    displaySection.append(tempHtml);
};
displayNum2(numGen())
*/