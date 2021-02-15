import React from "react";
import './Keycap.css';
import {observer} from "mobx-react-lite";
import {useStores} from "../../../hooks/use-stores";

const Keycap = observer((props) => {
    const {keyboardStore, textStore} = useStores();

    const keycapStyle = {
        flexGrow: props.data.grow,
    }

    const selected = ((props.data.code === 32 && textStore.curLetter.ch === ' ') ||
        (props.data.code === 16 && textStore.curLetter.shift) ||
        props.data.ch === textStore.curLetter.ch ||
        props.data.shiftCh === textStore.curLetter.ch) ? 'f_select' : '';
    const pressed = keyboardStore.keysPressed.some(v => v === props.data.code) ? 'keycap-pressed' : '';

    return (
        <div style={keycapStyle}
             className={`Keycap ${props.data.finger} ${pressed} ${selected}`}>
            <span>{keyboardStore.shiftPressed ? props.data.shiftCh : props.data.ch}</span>
        </div>);
})

export default Keycap;