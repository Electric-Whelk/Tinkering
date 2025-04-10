class view{
    constructor(contents){
        this.qanda = contents;
        this.deck = new numDeck(contents.length);


        //set up document sections
        this.question = document.getElementById("question");
        this.answer = document.getElementById("answer");

        this.correct = this.idAndEvent("c", "click", function(){this.incorrect()});
        this.incorrect = this.idAndEvent("i", "click", function(){this.correct()});

    }

    idAndEvent(id, trig, func){
        let outp = document.getElementById(id);
        outp.addEventListener(trig, func)
        return outp;
    }

    incorrect(){console.log("incorrect");}

    correct(){console.log("correct");}

    

    getAnswerByNumber(i){
        return this.qanda[i][1];
    }

    getQuestionByNumber(i){
        return this.qanda[i][0];
    }

    visualize(){
        const index = this.deck.reveal();
        this.question.innerText = this.getQuestionByNumber(index);
        this.answer.innerText = this.getAnswerByNumber(index);

    }
}