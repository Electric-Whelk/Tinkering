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
        console.log("full deck: " + outp);
        return outp;
    }

    randomInt(max){
        let outp = Math.round(Math.random() * max);
        console.log("Random int: " + outp);
        return outp;
    }

    topCard(){
        if(this.deck.length <= 0){
            return -1;
        }else{
            return(this.deck[0]);
        }
    }

    shuffle(){
        let i = this.deck.length - 1;
        let j;
        let tmp;
        while(i != 0){
            j = this.randomInt(i);
            i--;

            tmp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = tmp;
        }
        console.log("Deck after shuffling: " + this.deck);
    }
}