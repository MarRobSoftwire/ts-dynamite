import { Gamestate, BotSelection } from '../models/gamestate';

class Bot {
    makeMove(gamestate: Gamestate): BotSelection {
        const randomiser = Math.floor(Math.random()*4.25);
        switch(randomiser) {
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
                return 'D';
            }

        }
    }
}

export = new Bot();
