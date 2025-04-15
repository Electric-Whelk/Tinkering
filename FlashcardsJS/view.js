class view{
    constructor(contents){
        this.qanda = contents;
        this.deck = new numDeck(contents.length);

        //set up document sections
        this.question = document.getElementById("question");
        this.answer = document.getElementById("answer");

        this.cButton = document.getElementById("c");
        this.cButton.addEventListener("click", () => this.correct());

        this.iButton = document.getElementById("i");
        this.iButton.addEventListener("click", () => this.incorrect());

        this.rButton = document.getElementById("r");
        this.rButton.addEventListener("click", () => this.reveal());

        this.resetPage();
    }

    incorrect(){
        this.deck.answer(false);
        this.resetPage();
    }

    correct(){
        this.deck.answer(true);
        this.resetPage();    
    }

    reveal(){
        const index = this.deck.topCard();
        this.answer.innerText = this.getAnswerByNumber(index);
    }

    resetPage(){
        const index = this.deck.topCard();
        if(index === -1){
            this.question.innerText = "Finished!";
        }else{
            this.question.innerText = this.getQuestionByNumber(index);
            this.answer.innerText = "";
        }
    }

    getAnswerByNumber(i){
        return this.qanda[i][1];
    }

    getQuestionByNumber(i){
        return this.qanda[i][0];
    }
}