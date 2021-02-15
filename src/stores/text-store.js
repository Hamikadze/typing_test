import {makeAutoObservable} from 'mobx';
import isEnterKey from "../utils/isEnterKey";

export default class TextStore {
    text;
    cursorPos;

    constructor() {
        this.text = [];
        this.cursorPos = 0;
        this.fetch();

        makeAutoObservable(this);
    }

    get curLetter() {
        if (!this.expected.length)
            return {ch: null, enter: false,}
        const curLetter = this.expected[0];

        return {ch: curLetter, enter: isEnterKey(curLetter)}

    }

    get textLength() {
        return this.text.length;
    }

    fetch() {
        fetch('https://baconipsum.com/api/?type=all-meat&paras=1&format=json', {method: 'GET'})
            .then(res => res.json())
            .then(res => {
                this.setText(res[0]);
            })
            .catch(err => {
                console.log(err);
                //setErrors(err);
                this.setText('Crazy Fredrick bought many very exquisite opal jewels.')
            });
    }

    setText(value) {
        this.text = value.replace(/\s\s+/g, ' ').split('');
    }

    get printed() {
        return this.text.slice(0, this.cursorPos);
    }

    get expected() {
        return this.text.slice(this.cursorPos);
    }

    get complete() {
        return !this.expected.length;
    }

    setCursorPos(value) {
        this.cursorPos = value;
    }

    incrementCursorPos() {
        this.cursorPos++;
    }
}