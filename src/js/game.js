import { Character } from './domain.js';

export class Game {
  start() {
    console.log('game started');
  }
}

export class GameSavingData {
}

export function readGameSaving() {
}

export function writeGameSaving() {
}

const game = new Game();
export default game;
