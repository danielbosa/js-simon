/*
Visualizzare in pagina 5 numeri casuali ( tra 1 e 100) non duplicati.
Da lì parte un timer di 30 secondi.
Dopo i 30 secondi i numeri scompaiono e l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt() ( o meglio caselle di input).
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

//al click su un bottone, per ogni elemento dell'array scrivo codice html e ci infilo l'elemento i dell'array; finiti gli elementi dell'array, infilo tutto nel contenitore e appendo il contenitore nell'html

const btnStart = document.getElementById('btn-start');
btnStart.addEventListener('click', function(){
    let arrayDaRicordare = numGen();
    displayNum(arrayDaRicordare);
    setTimeout(stopDisplay, (1000*3), arrayDaRicordare);
});


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

function showResult(result){
    let displaySection = document.getElementById('display-number');
    displaySection.innerHTML = '';
    let tempHtml = document.createElement('div');

    tempHtml.innerHTML += `
        <div>Punteggio: ${result.length}</div>
        <div>Risposte giuste: ${result}</div>
        `;

    displaySection.append(tempHtml);
}

function checkArray (array1, array2){
    let risposteGiuste = [];
    for(let i = 0; i < array1.length; i++){
        if(array1.includes(array2[i])){
            risposteGiuste.push(array2[i]);
        }
    };
    console.log(risposteGiuste);
    const result = risposteGiuste;
    console.log(result);
    return result;
};

function stopDisplay(arrayDaRicordare){
    let displaySection = document.getElementById('display-number');
    displaySection.innerHTML = '';
    let tempHtml = document.createElement('form');
    tempHtml.setAttribute('id', 'answerForm');
    let answerForm = document.getElementById('answerForm');

    for(let i = 0; i < arrayDaRicordare.length; i++){
        let userNum = document.createElement('INPUT')
        userNum.setAttribute('type', 'number');
        userNum.setAttribute('id', `answer-${i}`);
        tempHtml.append(userNum);
    };

    let btnSubmit = document.createElement('BUTTON');
    btnSubmit.className = 'btn btn-primary';
    btnSubmit.innerHTML = `Submit`;
    btnSubmit.setAttribute('id', 'btn-submit');
    tempHtml.append(btnSubmit);
    displaySection.append(tempHtml);

    btnSubmit.addEventListener('click', function(e){
        e.preventDefault();
        let answer = [];
        for(let i = 0; i < arrayDaRicordare.length; i++){
            let answerX = document.getElementById(`answer-${i}`);
            answer.push(parseInt(answerX.value));
        };
        console.log(answer);
        showResult(checkArray(arrayDaRicordare,answer));
    })

    
    //while(answer.length < 5){
        //let userAnswer = parseInt(prompt('type a number'));
        //answer.push(userAnswer);
    //}
    //console.log(answer);
    //checkArray (arrayDaRicordare, answer);    
};

//ho commentato queste parti perché sospetto che il prompt interferisca: infatti non puliva la displaySection dai numeri da ricordare... Prova a farlo con delle caselle di testo/input.





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