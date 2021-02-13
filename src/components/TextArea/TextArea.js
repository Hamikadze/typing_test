import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import './TextArea.css';

function TextArea(props) {
    const [printedText, setPrintedText] = useState([]);
    const [text, setText] = useState(props.text);
    const [typo, setTypo] = useState(false);
    const textAreaBox = useRef(null);


    const handleKeyDown = (event) => {
        if (event.altKey || event.ctrlKey || (event.shiftKey && event.keyCode === 16))
            return;
        if (text[0] === event.key) {
            setTypo(false);
            setText(v => v.filter((i, index) => index !== 0));
            setPrintedText(v => [...v, event.key]);
        } else {
            setTypo(true);
        }
        event.preventDefault();
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


    return (<div ref={textAreaBox} className={'TextArea'} tabIndex="0">
        {printedText.map((ch, i) => <span className={'printed-text'} key={`printed-${i}`}>{ch}</span>)}
        {text.map((ch, i) => <span className={`wait-text ${i === 0 ? (typo ? 'ch-red' : 'ch-green'): ''}`} key={`text-${i}`}>{ch}</span>)}
    </div>)
}

export default TextArea;