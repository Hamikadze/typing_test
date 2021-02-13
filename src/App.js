import './App.css';
import KeycapsLayout from "./components/KeycapsLayout/KeycapsLayout";
import TextArea from "./components/TextArea/TextArea";
import {useEffect, useState} from "react";

function App() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
    const [text, setText] = useState([]);
    const [errors, setErrors] = useState(null);


    async function fetchData() {
        const res = await fetch('https://baconipsum.com/api/?type=all-meat&paras=1&format=json');
        res.json().then(res => setText(res[0].replace(/\s\s+/g, ' ').split(''))).catch(err => {
            setErrors(err);
            'Crazy Fredrick bought many very exquisite opal jewels.'.split('')
        });
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="App">
            <header className="App-header"/>
            <div className="App-body">
                {text.length > 0 ? <TextArea text={text}/> : null}
                <div className={'KeycapsLayout-container'}>
                    <KeycapsLayout/>
                </div>
            </div>
        </div>
    );
}

export default App;
