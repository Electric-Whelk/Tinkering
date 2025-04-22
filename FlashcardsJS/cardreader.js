/* First extract from json file
note that the function has been vivisected somewhat. this is because this is educational.
*/

let dev = "DevelopmentMethodologies";
let ood = "ObjectOrientedDesign";
let req = "RequirementsEngineering"
let sus = "Sustainability"
let pro = "ProjectManagement"
let qual = "SoftwareQualityAndTesting"

let arr = [dev, ood, req, sus, pro, qual];

for(let str of arr){
    console.log(str)
    let tmp = document.getElementById(str);
    tmp.addEventListener("click", () => getEm(str));
}

/*getElementById("ood");
ood.addEventListener("click", () => getEm("ObjectOrientedDesign"))

let devmeth = document.getElementById("ood");
devmeth.addEventListener("click", () => getEm("Devn"))

/*fetch("ObjectOrientedDesign.json")
.then(response => {
    return response.json();
})
.then(jsondata => {
    initialize(jsondata);
})
.catch(error => console.error("Error caught: " + error));*/

function getEm(input){
    fetch(input.concat(".json"))
    .then(response => {
        return response.json();
    })
    .then(jsondata => {
        initialize(jsondata);
    })
    .catch(error => console.error("Error caught: " + error));

}


function initialize(data){

    //basic setup including buttons
    let qanda = data.QandA;
    let screen = new view(qanda);
}