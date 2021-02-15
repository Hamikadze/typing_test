import {makeAutoObservable} from 'mobx';

export default class TypingStore {
    timeTypingStart;
    typoCount;
    correctCount;
    complete;
    result;

    constructor() {
        this.reset();
        makeAutoObservable(this);
    }

    reset(){
        this.timeTypingStart = 0;
        this.typoCount = 0;
        this.correctCount = 0;
        this.complete = false;
        this.result = null;
    }

    setTimeTypingStart(value) {
        this.timeTypingStart = value;
    }

    initTimeTypingStart() {
        if (this.timeTypingStart === 0)
            this.timeTypingStart = Date.now();
    }

    setTypoCount(value) {
        if (this.complete)
            return;
        this.typoCount = value;
    }

    setCorrectCount(value) {
        if (this.complete)
            return;
        this.correctCount = value;
    }

    incrementTypo() {
        if (this.complete)
            return;
        this.typoCount++;
    }

    incrementCorrect() {
        if (this.complete)
            return;
        this.correctCount++;
    }

    setComplete(value) {
        this.complete = value;
        if (value) {
            this.result = {
                speed: this.speed,
                accuracy: this.accuracy
            };
        }
    }

    get speed() {
        if (this.result !== null) {
            return this.result.speed;
        }
        return Math.round((this.correctCount / ((Date.now() - this.timeTypingStart) / 1000.0)) * 60, 2);
    }

    get accuracy() {
        if (this.result !== null) {
            return this.result.accuracy;
        }
        const accuracy = Math.round(100 * this.correctCount / (this.correctCount + this.typoCount), 2);
        return isNaN(accuracy) ? 100 : accuracy;
    }
}