import React from "react";
import {observer} from "mobx-react-lite";
import {useStores} from "../../../hooks/use-stores";
import './Keycap.css';

const Keycap = observer((props) => {
    const {keyboardStore, textStore} = useStores();
    const data = props.data;

    const selected = ((data.code === 32 && textStore.curLetter.ch === ' ') ||
        (data.code === 16 && textStore.curLetter.shift) ||
        data.ch === textStore.curLetter.ch ||
        data.shiftCh === textStore.curLetter.ch) ? 'f_select' : '';
    const pressed = keyboardStore.keysPressed.some(v => v === data.code) ? 'keycap-pressed' : '';

    return (
        <div style={{flexGrow: data.grow}}
             className={`Keycap ${data.finger} ${pressed} ${selected}`}>
            <span>{keyboardStore.shiftPressed ? data.shiftCh : data.ch}</span>
        </div>);
})

export default Keycap;