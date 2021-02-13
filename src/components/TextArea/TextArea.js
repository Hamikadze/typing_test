import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import './TextArea.css';

function TextArea(props) {
    const [cursorState, setCursorState] = useState(false);
    const [cursorRed, setCursorRed] = useState(false);
    const [printedText, setPrintedText] = useState([]);
    const [text, setText] = useState([]);
    const textAreaBox = useRef(null);

    const handleKeyDown = (event) => {
        if (event.altKey || event.ctrlKey || (event.shiftKey && event.keyCode === 16))
            return;
        console.log([printedText, text, props.text])
        if (text[0] === event.key) {
            setText(v => v.filter((i, index) => index !== 0));
            setPrintedText(v => [...v, event.key]);
            setCursorRed(false);
        } else {
            setCursorRed(true);
            setCursorState(true);
            setTimeout(() => {
                setCursorRed(false);
            }, 1000);
            event.preventDefault();
        }
    }


    useEffect(() => {
        if (textAreaBox && textAreaBox.current) {
            textAreaBox.current.addEventListener('keydown', handleKeyDown);

            // cleanup this component
            return () => {
                if (textAreaBox.current !== null)
                    textAreaBox.current.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [printedText])

    useEffect(() => {
        setText(props.text);

        console.log([printedText, text, props.text])
    }, [props])

    useEffect(() => {
        const id = setInterval(() => {
            if (textAreaBox.current === document.activeElement) {
                setCursorState(v => !v);
            } else {
                setCursorState(false);
            }
        }, 500);
        return () => {
            clearInterval(id);
            setCursorState(false);
        };
    }, [])


    return (<div ref={textAreaBox} className={'TextArea'} tabIndex="0">
        {printedText.map((ch,i) => <span key={`printed-${i}`} className={'printed-text'}>{ch}</span>)}
        <span className={`cursor ${cursorRed ? 'cursor-red' : ''} ${cursorState ? "" : "hidden"}`}>&nbsp;</span>
        {text.map((ch, i) => <span className={'wait-text'} key={`text-${i}`}>{ch}</span>)}
    </div>)
}

export default TextArea;