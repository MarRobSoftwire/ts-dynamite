import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    private dynamiteRemaining: number;
    private currentMove: number;
    private probabilityDistribution: number[];
    constructor() {
        this.dynamiteRemaining = 100;
        this.currentMove = -1;
        this.probabilityDistribution = [0.3,0.05,0.05]; //probabilities of R/P/S, W & D resp.
    }
    makeMove(gamestate: Gamestate): BotSelection {
        this.currentMove += 1;
        if (this.currentMove <=4) {
            return this.makeDynamite();
        } else if (this.currentMove == 2499) {
            return this.makeDynamite();
        }
        let firstRepeat = this.compareOpponentsMoves(this.currentMove-1,this.currentMove-2,gamestate);
        let secondRepeat = this.compareOpponentsMoves(this.currentMove-2,this.currentMove-3,gamestate);

        if (firstRepeat && secondRepeat) {
            if(gamestate.rounds[this.currentMove-1].p2 == 'D'){
                return this.makeDynamite();
            } else{
                return gamestate.rounds[this.currentMove-1].p2;
            }
        } else{
            return this.randomMove(this.probabilityDistribution);
        }
    }
    private makeDynamite(): BotSelection {
        if (this.dynamiteRemaining >0){
            this.dynamiteRemaining -= 1;
            return 'D'
        }else{
            return this.randomMove(this.probabilityDistribution);
        }
    }
    private compareOpponentsMoves(i: number,j: number,gamestate: Gamestate): Boolean {
        return gamestate.rounds[i].p2 == gamestate.rounds[j].p2;
    }
    private randomMove(probDist: number[]): BotSelection {
        let randomNumber = 0;
        if(this.dynamiteRemaining>0) {
            randomNumber = Math.random();
        } else {
            randomNumber = Math.floor(Math.random()/(1-probDist[2]));
        }

        if (randomNumber<= probDist[0]) {
            return 'R'
        } else if (randomNumber<= 2*probDist[0]) {
            return 'P'
        } else if (randomNumber<= 3*probDist[0]) {
            return 'S'
        } else if (randomNumber<= 3*probDist[0]+probDist[1]) {
            return 'W'
        } else {
            return this.makeDynamite();
        }
    }
}

export = new Bot();