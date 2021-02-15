import React, {useEffect, useState} from "react";
import './StatsPanel.css'
import {observer} from "mobx-react-lite";
import {useStores} from "../../hooks/use-stores";

const StatsPanel = observer(() => {

    const {typingStore} = useStores();
    const [speed, setSpeed] = useState(0);

    useEffect(() => {
        const handle = setInterval(() => {
            setSpeed(typingStore.speed);
        }, 1000 / 20)
        return () => {
            clearInterval(handle)
        }
    }, []);

    return <div className="StatsPanel">
        <div className="panel-header">
            <h3 className="title">Statistics</h3>
        </div>
        <div className="categories">
            <div className="category">
                <span>Speed</span>
                <span>{`${speed} CPM`}</span>
            </div>
            <div className="category">
                <span>Accuracy</span>
                <span>{`${typingStore.accuracy}%`}</span>
            </div>
        </div>
    </div>;
})

export default StatsPanel;