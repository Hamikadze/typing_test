import StatsPanel from "../StatsPanel/StatsPanel";
import React from "react";
import {observer} from "mobx-react-lite";
import './Result.css';
import {useStores} from "../../hooks/use-stores";


const Result = observer(() => {

    const {typingStore, textStore} = useStores();
    function handleClick(){
        typingStore.reset();
        textStore.reset();
    }

    return (<div className={'Result'}>
            <div className={'Result-container'}>
                <StatsPanel/>
                <div className={'active-container'}>
                    <button onClick={handleClick}>Start over</button>
                </div>
            </div>
        </div>
    );
})
export default Result;
