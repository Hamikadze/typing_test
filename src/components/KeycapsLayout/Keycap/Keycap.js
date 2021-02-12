import React from "react";
import './Keycap.css';

function Keycap(props){
    const keycapStyle = {
        flexGrow: props.data.grow,
    }

    return (<div style={keycapStyle} className={`Keycap ${props.data.finger}`}>
        <span>{props.data.text}</span>
    </div>);
}


export default Keycap;