import React from "react";
import './keycaps_layout.css';
import Keycap from './keycap/keycap';

function keycaps_layout() {
    return (<div className={'keycaps-layout'}>
        <div className={'keycaps-layout-row'}>
            <Keycap></Keycap>
            <Keycap></Keycap>
            <Keycap></Keycap>
            <Keycap></Keycap>
            <Keycap></Keycap>
            <Keycap></Keycap>
            <Keycap></Keycap>
            <Keycap></Keycap>
            <Keycap></Keycap>
            <Keycap></Keycap>
        </div>
        <div className={'keycaps-layout-row'}></div>
        <div className={'keycaps-layout-row'}></div>
        <div className={'keycaps-layout-row'}></div>
        <div className={'keycaps-layout-row'}></div>
    </div>);
}