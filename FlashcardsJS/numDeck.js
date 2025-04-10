class numDeck{
    constructor(count){
        this.deck = this.getDeck(count);
        this.shuffle();
    }

    answer(correct){
        if(correct){
            this.deck.shift();
        }else{
            this.shuffle();
        }
    }

    getDeck(inp){
        //BOOKMARK
        let outp = []
        for(let i = 0; i < inp; i++){
            outp.push([i]);
        }
        return outp;
    }

    randomInt(max){
        let outp = Math.round(Math.random() * max);
        console.log(outp);
        return outp;
    }

    reveal(){
        return(this.deck[0]);
    }

    shuffle(){
        let i = this.deck.length;
        let j;
        let tmp;
        while(i != 0){
            j = this.randomInt(i);
            i--;

            tmp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = tmp;
        }
    }
}