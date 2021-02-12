import React from "react";
import './KeycapsLayout.css';
import Keycap from './Keycap/Keycap';

function KeycapsLayout() {


    const firstRow = [
        {text: '`', code: 192, finger: 'f1', grow: 1},
        {text: '1', code: 49, finger: 'f2', grow: 1},
        {text: '2', code: 50, finger: 'f2', grow: 1},
        {text: '3', code: 51, finger: 'f3', grow: 1},
        {text: '4', code: 52, finger: 'f4', grow: 1},
        {text: '5', code: 53, finger: 'f5_1', grow: 1},
        {text: '6', code: 54, finger: 'f5_1', grow: 1},
        {text: '7', code: 55, finger: 'f5_2', grow: 1},
        {text: '8', code: 56, finger: 'f4', grow: 1},
        {text: '9', code: 57, finger: 'f3', grow: 1},
        {text: '0', code: 48, finger: 'f2', grow: 1},
        {text: '-', code: 192, finger: 'f2', grow: 1},
        {text: '=', code: 192, finger: 'f2', grow: 1},
        {text: '←', code: 192, finger: 'f1', grow: 2}
    ];
    const secondRow = [
        {text: 'TAB', code: 9, finger: 'f1', grow: 2},
        {text: 'Q', code: 81, finger: 'f2', grow: 1},
        {text: 'W', code: 87, finger: 'f3', grow: 1},
        {text: 'E', code: 69, finger: 'f4', grow: 1},
        {text: 'R', code: 82, finger: 'f5_1', grow: 1},
        {text: 'T', code: 84, finger: 'f5_1', grow: 1},
        {text: 'Y', code: 89, finger: 'f5_2', grow: 1},
        {text: 'U', code: 85, finger: 'f5_2', grow: 1},
        {text: 'I', code: 73, finger: 'f4', grow: 1},
        {text: 'O', code: 79, finger: 'f3', grow: 1},
        {text: 'P', code: 80, finger: 'f2', grow: 1},
        {text: '[', code: 219, finger: 'f2', grow: 1},
        {text: ']', code: 221, finger: 'f2', grow: 1},
        {text: '\\', code: 220, finger: 'f1', grow: 1}
    ];
    const thirdRow = [
        {text: 'CAPS', code: 20, finger: 'f1', grow: 2},
        {text: 'A', code: 65, finger: 'f2', grow: 1},
        {text: 'S', code: 83, finger: 'f3', grow: 1},
        {text: 'D', code: 68, finger: 'f4', grow: 1},
        {text: 'F', code: 70, finger: 'f5_1', grow: 1},
        {text: 'G', code: 71, finger: 'f5_1', grow: 1},
        {text: 'H', code: 72, finger: 'f5_2', grow: 1},
        {text: 'J', code: 74, finger: 'f5_2', grow: 1},
        {text: 'K', code: 75, finger: 'f4', grow: 1},
        {text: 'L', code: 76, finger: 'f3', grow: 1},
        {text: ';', code: 186, finger: 'f2', grow: 1},
        {text: '\'', code: 222, finger: 'f2', grow: 1},
        {text: 'ENTER', code: 13, finger: 'f1', grow: 2}
    ];
    const fourthRow = [
        {text: 'SHIFT', code: 16, finger: 'f1', grow: 2},
        {text: 'Z', code: 90, finger: 'f2', grow: 1},
        {text: 'X', code: 88, finger: 'f3', grow: 1},
        {text: 'C', code: 67, finger: 'f4', grow: 1},
        {text: 'V', code: 86, finger: 'f5_1', grow: 1},
        {text: 'B', code: 66, finger: 'f5_1', grow: 1},
        {text: 'N', code: 78, finger: 'f5_2', grow: 1},
        {text: 'M', code: 77, finger: 'f5_2', grow: 1},
        {text: ',', code: 188, finger: 'f4', grow: 1},
        {text: '.', code: 190, finger: 'f3', grow: 1},
        {text: '/', code: 191, finger: 'f2', grow: 1},
        {text: 'SHIFT', code: 16, finger: 'f1', grow: 2}
    ];
    const fifthRow = [{text: 'SPACE', code: 32, finger: 'f1', grow: 2}];

    return (<div className={'KeycapsLayout'}>
        <div className={'KeycapsLayout-row'}>
            {
                firstRow.map((i,index) => {
                    return <Keycap key={`Keycap-${i.code}-${index}`} data={i}/>
                })
            }
        </div>
        <div className={'KeycapsLayout-row'}>
            {
                secondRow.map((i,index) => {
                    return <Keycap key={`Keycap-${i.code}-${index}`} data={i}/>
                })
            }
        </div>
        <div className={'KeycapsLayout-row'}>
            {
                thirdRow.map((i,index) => {
                    return <Keycap key={`Keycap-${i.code}-${index}`} data={i}/>
                })
            }
        </div>
        <div className={'KeycapsLayout-row'}>
            {
                fourthRow.map((i,index) => {
                    return <Keycap key={`Keycap-${i.code}-${index}`} data={i}/>
                })
            }
        </div>
        <div className={'KeycapsLayout-row'}>
            {
                fifthRow.map((i,index) => {
                    return <Keycap key={`Keycap-${i.code}-${index}`} data={i}/>
                })
            }
        </div>
    </div>);
}

export default KeycapsLayout;