/* First extract from json file
note that the function has been vivisected somewhat. this is because this is educational.
*/

fetch("cards.json")
.then(response => {
    return response.json();
})
.then(jsondata => {
    initialize(jsondata);
})
.catch(error => console.error("Error caught: " + error));


function initialize(data){

    let qanda = data.QandA;

    //magic numbers
    const q = 0; 
    const a = 1;

    let deck = new numDeck(qanda.length)

    let i = deck.reveal();
    console.log(i);

    //TODO: find difference between div and span. then make some buttons!  


    const question = document.getElementById("question");
    const answer = document.getElementById("answer");
    question.innerText = data.QandA[i][q];
    answer.innerText = data.QandA[i][a];
}

/*function findMax(qanda){
    let length = qanda.length;
    return length;

}

function randomInt(max){
    console.log(max);
    let outp = Math.round(Math.random() * max);
    console.log(outp);
    return outp;
}*/