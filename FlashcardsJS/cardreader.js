/* First extract from json file
note that the function has been vivisected somewhat. this is because this is educational.
*/

fetch("DandP.json")
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
}