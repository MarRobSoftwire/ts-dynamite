//I'm gonna put some dynamite in your eye
import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    private dynamiteRemaining: number;
    private currentMove: number;
    constructor() {
        this.dynamiteRemaining = 100;
        this.currentMove = -1;
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
            return gamestate.rounds[this.currentMove-1].p2
        }
    }
    private makeDynamite(): BotSelection {
        this.dynamiteRemaining -= 1;
        return 'D'
    }

    compareOpponentsMoves(i: number,j: number,gamestate: Gamestate): Boolean {
        return gamestate.rounds[i].p2 == gamestate.rounds[j].p2;

    }
}

export = new Bot();