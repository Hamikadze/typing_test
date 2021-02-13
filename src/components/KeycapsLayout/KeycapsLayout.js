import React, {useEffect, useState} from "react";
import './KeycapsLayout.css';
import Keycap from './Keycap/Keycap';

function KeycapsLayout(props) {
    const layout_eng = [[
        {ch: '`', shiftCh: '~', code: 192, finger: 'f1', grow: 1},
        {ch: '1', shiftCh: '!', code: 49, finger: 'f2', grow: 1},
        {ch: '2', shiftCh: '@', code: 50, finger: 'f2', grow: 1},
        {ch: '3', shiftCh: '#', code: 51, finger: 'f3', grow: 1},
        {ch: '4', shiftCh: '$', code: 52, finger: 'f4', grow: 1},
        {ch: '5', shiftCh: '%', code: 53, finger: 'f5_1', grow: 1},
        {ch: '6', shiftCh: '^', code: 54, finger: 'f5_1', grow: 1},
        {ch: '7', shiftCh: '&', code: 55, finger: 'f5_2', grow: 1},
        {ch: '8', shiftCh: '*', code: 56, finger: 'f4', grow: 1},
        {ch: '9', shiftCh: '(', code: 57, finger: 'f3', grow: 1},
        {ch: '0', shiftCh: ')', code: 48, finger: 'f2', grow: 1},
        {ch: '-', shiftCh: '_', code: 189, finger: 'f2', grow: 1},
        {ch: '=', shiftCh: '+', code: 187, finger: 'f2', grow: 1},
        {ch: '←', shiftCh: '←', code: 8, finger: 'f1', grow: 2}
    ], [
        {ch: 'TAB', shiftCh: 'TAB', code: 9, finger: 'f1', grow: 2},
        {ch: 'q', shiftCh: 'Q', code: 81, finger: 'f2', grow: 1},
        {ch: 'w', shiftCh: 'W', code: 87, finger: 'f3', grow: 1},
        {ch: 'e', shiftCh: 'E', code: 69, finger: 'f4', grow: 1},
        {ch: 'r', shiftCh: 'R', code: 82, finger: 'f5_1', grow: 1},
        {ch: 't', shiftCh: 'T', code: 84, finger: 'f5_1', grow: 1},
        {ch: 'y', shiftCh: 'Y', code: 89, finger: 'f5_2', grow: 1},
        {ch: 'u', shiftCh: 'U', code: 85, finger: 'f5_2', grow: 1},
        {ch: 'i', shiftCh: 'I', code: 73, finger: 'f4', grow: 1},
        {ch: 'o', shiftCh: 'O', code: 79, finger: 'f3', grow: 1},
        {ch: 'p', shiftCh: 'P', code: 80, finger: 'f2', grow: 1},
        {ch: '[', shiftCh: '{', code: 219, finger: 'f2', grow: 1},
        {ch: ']', shiftCh: '}', code: 221, finger: 'f2', grow: 1},
        {ch: '\\', shiftCh: '|', code: 220, finger: 'f1', grow: 1}
    ], [
        {ch: 'CAPS', shiftCh: 'CAPS', code: 20, finger: 'f1', grow: 2},
        {ch: 'a', shiftCh: 'A', code: 65, finger: 'f2', grow: 1},
        {ch: 's', shiftCh: 'S', code: 83, finger: 'f3', grow: 1},
        {ch: 'd', shiftCh: 'D', code: 68, finger: 'f4', grow: 1},
        {ch: 'f', shiftCh: 'F', code: 70, finger: 'f5_1', grow: 1},
        {ch: 'g', shiftCh: 'G', code: 71, finger: 'f5_1', grow: 1},
        {ch: 'h', shiftCh: 'H', code: 72, finger: 'f5_2', grow: 1},
        {ch: 'j', shiftCh: 'J', code: 74, finger: 'f5_2', grow: 1},
        {ch: 'k', shiftCh: 'K', code: 75, finger: 'f4', grow: 1},
        {ch: 'l', shiftCh: 'L', code: 76, finger: 'f3', grow: 1},
        {ch: ';', shiftCh: ':', code: 186, finger: 'f2', grow: 1},
        {ch: '\'', shiftCh: '"', code: 222, finger: 'f2', grow: 1},
        {ch: 'ENTER', shiftCh: 'ENTER', code: 13, finger: 'f1', grow: 2}
    ], [
        {ch: 'SHIFT', shiftCh: 'SHIFT', code: 16, finger: 'f1', grow: 2},
        {ch: 'z', shiftCh: 'Z', code: 90, finger: 'f2', grow: 1},
        {ch: 'x', shiftCh: 'X', code: 88, finger: 'f3', grow: 1},
        {ch: 'c', shiftCh: 'C', code: 67, finger: 'f4', grow: 1},
        {ch: 'v', shiftCh: 'V', code: 86, finger: 'f5_1', grow: 1},
        {ch: 'b', shiftCh: 'B', code: 66, finger: 'f5_1', grow: 1},
        {ch: 'n', shiftCh: 'N', code: 78, finger: 'f5_2', grow: 1},
        {ch: 'm', shiftCh: 'M', code: 77, finger: 'f5_2', grow: 1},
        {ch: ',', shiftCh: '<', code: 188, finger: 'f4', grow: 1},
        {ch: '.', shiftCh: '>', code: 190, finger: 'f3', grow: 1},
        {ch: '/', shiftCh: '?', code: 191, finger: 'f2', grow: 1},
        {ch: 'SHIFT', shiftCh: 'SHIFT', code: 16, finger: 'f1', grow: 2}
    ],
        [{ch: 'SPACE', shiftCh: 'SPACE', code: 32, finger: 'f1', grow: 2}]];

    const [isShift, setIsShift] = useState(false);
    const [keysPressed, setKeysPressed] = useState([]);

    const handleKeyDown = (event) => {
        if (event.keyCode === 16) {
            setIsShift(event.shiftKey);
            setKeysPressed(v => [...v,event.keyCode]);
        } else {
            setKeysPressed(v => [...v,event.keyCode]);
        }
    }

    const handleKeyUp = (event) => {
        if (event.keyCode === 16) {
            setIsShift(event.shiftKey);
            setKeysPressed(v=>v.filter(i => i !== event.keyCode));
        } else {
            setKeysPressed(v=>v.filter(i => i !== event.keyCode));
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        // cleanup this component
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [])

    return (<div className={'KeycapsLayout'}>
        {
            layout_eng.map((row, index) => {
                return <div key={`KeycapsLayout-row-${index}`} className={`KeycapsLayout-row`}>
                    {
                        row.map((i, index) => {
                            return <Keycap key={`Keycap-${i.code}-${index}`} data={i} isShift={isShift}
                                           isPressed={keysPressed.includes(i.code)}/>
                        })
                    }
                </div>
            })
        }
    </div>);
}

export default KeycapsLayout;