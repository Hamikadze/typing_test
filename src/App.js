import './App.css';
import KeycapsLayout from "./components/KeycapsLayout/KeycapsLayout";
import TextArea from "./components/TextArea/TextArea";
import {useEffect} from "react";

function App() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);


    return (
        <div className="App">
            <header className="App-header">
                <TextArea></TextArea>
            </header>
            <div className={'KeycapsLayout-container'}>
                <KeycapsLayout></KeycapsLayout>

            </div>
        </div>
    );
}

export default App;
