//I'm gonna put some dynamite in your eye
import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    private dynamiteRemaining: number;
    private currentMove: number;
    constructor() {
        this.dynamiteRemaining = 100;
        this.currentMove = 0;
    }
    makeMove(gamestate: Gamestate): BotSelection {
        this.currentMove += 1;
        if (this.currentMove <=3) {
            return this.openingMoves()
        } else if (this.currentMove == 2500) {
            this.dynamiteRemaining -= 1;
            return 'D'
        } else{
            return this.drawingMoves(gamestate);
        }
    }
    private openingMoves(): BotSelection {
        this.dynamiteRemaining -= 1;
        return 'D'
    }
    private drawingMoves(gamestate: Gamestate): BotSelection{
        return 'W'
    }
}

export = new Bot();
