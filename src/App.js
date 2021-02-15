import './App.css';
import React, {useEffect, createContext, useContext} from "react";
import Keyboard from "./components/Keyboard/Keyboard";
import TextArea from "./components/TextArea/TextArea";

import {observer} from 'mobx-react-lite'
import {useStores} from './hooks/use-stores'

const App = () => {
    //fix for android height
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const {textStore} = useStores();

    const element =
        <div className="App">
            <header className="App-header"/>
            <div className="App-body">
                <TextArea/>
                <div className={'Keyboard-container'}>
                    <Keyboard/>
                </div>
            </div>
        </div>;

    return element;
}

export default App;
