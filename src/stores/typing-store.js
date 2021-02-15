import {makeAutoObservable} from 'mobx';

export default class TypingStore {
    timeTypingStart;
    typoCount;
    correctCount;
    complete;

    constructor() {
        this.timeTypingStart = 0;
        this.typoCount = 0;
        this.correctCount = 0;
        this.complete = false;

        makeAutoObservable(this);
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
    }

    get correctPerMinute() {
        console.log(Date.now() - this.timeTypingStart);
        return Math.round((this.correctCount / ((Date.now() - this.timeTypingStart) / 1000.0)) * 60, 2);
    }

    get correctOverTypo() {
        return Math.round(100 * this.correctCount / (this.correctCount + this.typoCount), 2);
    }

}