import React, {useEffect, useRef, useState} from 'react';
import {useStores} from '../../hooks/use-stores'
import {observer} from 'mobx-react-lite'
import './TextArea.css';

const TextArea = observer(() => {

    const {textStore, typingStore} = useStores();
    const [typo, setTypo] = useState(false);
    const textAreaBox = useRef(null);

    const handleKeyDown = (event) => {
        typingStore.initTimeTypingStart();
        console.log([`[${typingStore.correctPerMinute}]`, `${typingStore.correctOverTypo}%`])
        if (event.defaultPrevented) {
            return; // Do nothing if the event was already processed
        }

        if (event.altKey || event.ctrlKey || (event.shiftKey && event.keyCode === 16))
            return;
        if (textStore.curLetter.ch === event.key) {
            typingStore.incrementCorrect();
            textStore.incrementCursorPos();
            setTypo(false);
        } else {
            typingStore.incrementTypo();
            setTypo(true);
        }
        typingStore.setComplete(textStore.complete);
        event.preventDefault();
    }

    useEffect(() => {
        if (textAreaBox && textAreaBox.current) {
            const element = textAreaBox.current;
            element.addEventListener('keydown', handleKeyDown);

            // cleanup this component
            return () => {
                if (element !== null)
                    element.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [handleKeyDown]);


    const element =
        <div ref={textAreaBox} className={'TextArea'} tabIndex="0">
            {textStore.printed.map((ch, i) => <span className={'printed-text'} key={`printed-${i}`}>{ch}</span>)}
            {textStore.expected.map((ch, i) => <span
                className={`wait-text ${i === 0 ? (typo ? 'ch-red' : 'ch-green') : ''}`}
                key={`text-${i}`}>{ch}</span>)}
        </div>;
    return element;
});

export default TextArea;