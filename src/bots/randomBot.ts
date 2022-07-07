import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    private dynamiteRemaining: Number;
    constructor() {
        this.dynamiteRemaining = 100;
    }
    makeMove(gamestate: Gamestate): BotSelection {
        let randomNumber = 0;
        if(this.dynamiteRemaining>0) {
            randomNumber = Math.floor(Math.random()*4.1);
        } else {
            randomNumber = Math.floor(Math.random()*4);
        }
        
        switch(randomNumber) {
            case 0: {
                return 'R';
            }
            case 1: {
                return 'P';
            }
            case 2: {
                return 'S';
            }
            case 3: {
                return 'W';
            }
            default: {
                this.dynamiteRemaining=- 1;
                return 'D';
            }
        }
    }
}

export = new Bot();
