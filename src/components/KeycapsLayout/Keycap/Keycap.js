import React from "react";
import './Keycap.css';

function Keycap(props) {
    const keycapStyle = {
        flexGrow: props.data.grow,
    }

    return (
        <div style={keycapStyle} className={`Keycap ${props.data.finger} ${props.isPressed ? 'keycap-pressed' : ''}`}>
            <span>{props.isShift ? props.data.shiftCh : props.data.ch}</span>
        </div>);
}


export default Keycap;