import {makeAutoObservable} from 'mobx';

export default class KeyboardStore {
    keysPressed;
    nextKey;

    constructor() {
        this.keysPressed = [];
        this.nextKey = null;
        makeAutoObservable(this);
    }

    get shiftPressed() {
        return this.keysPressed.some(v => v === 16);
    }

    addKeyPressed(value) {
        this.keysPressed.push(value);
    }

    removeKeyPressed(value) {
        this.keysPressed = this.keysPressed.filter(v => v !== value);
    }

    setNextKey(value) {
        if (this.nextKey !== value)
            this.nextKey = value;
    }
}