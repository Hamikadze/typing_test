import React, {useEffect, useRef, useState} from "react";
import './TextArea.css';

function TextArea(props) {
    const [cursorState, setCursorState] = useState(false);
    const [printedText, setPrintedText] = useState('');
    const [waitText, setWaitText] = useState('Some\u00A0fancy\u00A0text!');
    const handleKeyDown = (event) => {
        console.log('A key was pressed', event.keyCode);
        switch (event.keyCode) {
            case 8:
                setPrintedText(v => v.slice(0, -1));
                break;
            case 16:
            case 9:
            case 17:
            case 20:
                break;
            case 32:
                setPrintedText(v => v += '\u00A0');
                setWaitText(v => v.slice(1));
                break;
            default:
                setPrintedText(v => v += event.key);
                setWaitText(v => v.slice(1));
                break;
        }
        event.preventDefault();
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // cleanup this component
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [])

    useRef()

    useEffect(() => {
        const id = setInterval(() => {
            setCursorState(v => !v);
        }, 800);
        return () => {
            clearInterval(id);
        };
    }, [])


    return (<div className={'TextArea'}>
        <div className={'div-text printed-text'}>{printedText}</div>
        <div className={`div-text cursor ${cursorState ? "" : "hidden"}`}></div>
        <div className={'div-text wait-text'}>{waitText}</div>
    </div>)
}

export default TextArea;