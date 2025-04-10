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

    //basic setup including buttons
    let qanda = data.QandA;
    let screen = new view(qanda);
    screen.visualize();
    //docSetup();

    //TODO: find difference between div and span. then make some buttons!  

    /*const question = document.getElementById("question");
    const answer = document.getElementById("answer");
    question.innerText = data.QandA[i][q];
    answer.innerText = data.QandA[i][a];*/
}

/*function docSetup(){
    const cor = document.getElementById("c");
    const inc = document.getElementById("i");

    cor.addEventListener("click", )
}*/

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