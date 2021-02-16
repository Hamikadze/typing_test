import React, {useEffect} from "react";
import Keycap from './Keycap/Keycap';
import {layout_eng} from "../../data/keyboard-lauout";
import {observer} from "mobx-react-lite";
import {useStores} from "../../hooks/use-stores";
import './Keyboard.css';

const Keyboard = observer(() => {

    const {keyboardStore} = useStores();

    const handleKeyDown = (event) => {
        keyboardStore.addKeyPressed(event.keyCode)
    }

    const handleKeyUp = (event) => {
        keyboardStore.removeKeyPressed(event.keyCode);
    }

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        document.addEventListener('keyup', handleKeyUp);

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.removeEventListener('keyup', handleKeyUp);
        };
    }, [])

    return (<div className={'Keyboard'}>
        {
            layout_eng.map((row, index) => {
                return <div key={`row-${index}`} className={`Keyboard-row`}>
                    {
                        row.map((i, index) => {
                            return <Keycap key={`${i.code}-${index}`} data={i}/>
                        })
                    }
                </div>
            })}
    </div>);
})

export default Keyboard;