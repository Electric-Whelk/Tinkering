class numDeck{
    constructor(count){
        this.deck = this.getDeck(count);
        this.shuffle();
        this.totalCards = count; 
    }

    answer(correct){
        if(correct){
            this.deck.shift();
        }else{
            let t = this.topCard();
            let i = 0;
            while(this.topCard() === t && i < 20){
                console.log("shuffling... (" + i + ")")
                this.shuffle();
                i++
            }
        }
    }

    getTotalCards(){return this.totalCards;}
    
    getRemainingCards(){return this.getTotalCards() - this.deck.length;}

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
        while(i > 0){
            j = this.randomInt(i);
            i--;

            tmp = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = tmp;
        }
    }
}