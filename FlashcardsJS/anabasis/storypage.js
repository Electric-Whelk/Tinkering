let story;
let pageNum = 0;



fetch("anabasis.json")
.then(response => response.json())
.then(jsondata => {story = jsondata; initialise()})
.catch(error => console.error(error));



function initialise(){

    const title = document.querySelector("h1");
    title.innerText = story.title;


    const nextPage = document.getElementById("next");
    const prevPage = document.getElementById("prev");
    const selectButton = document.getElementById("selectButton");
    nextPage.addEventListener("click", function(){turnPage(true)})
    prevPage.addEventListener("click", function(){turnPage(false)})
    selectButton.addEventListener("click", function(){goToPage()})
    updatePage();
    

}

function turnPage(input){
    const page = document.querySelector("div.page");
    const length = story.pages.length;
    if(input && pageNum < length){
        pageNum++;
    }else if(pageNum > 0){
        pageNum--;
    }
    updatePage();
}

function goToPage(){
    const target = document.getElementById("selectForm").value;
    const length = story.pages.length;
    const page = document.querySelector("div.page");
    if(target >= 0 && target <= length){
        pageNum = target;
    }
    updatePage();
}

function updatePage(){
    const infoPane = document.querySelector("div.infotext");
    infoPane.innerText = "Written by " + story.author + "\nTranslated by " + story.translator + "\nPage " + pageNum;

    const page = document.querySelector("div.page");
    page.innerText = story.pages[pageNum];
}